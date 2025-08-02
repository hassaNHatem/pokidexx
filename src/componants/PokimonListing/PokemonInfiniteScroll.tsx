import { useRef, useEffect } from "react";
import PokimonCard from "./PokimonCard";
import { useInfinitePokemons } from "../../hooks/useInfinitePokemons";
import "./PokemonInfiniteScroll.css";

const PokemonInfiniteScroll = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfinitePokemons();
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const allPokemons = data?.pages.flatMap((page) => page.results) ?? [];
  useEffect(() => {
    if (!loadMoreRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);
  console.log(isFetchingNextPage);
  return (
    <>
      <div className="pokemon-listing__grid">
        {data?.pages.map((page) =>
          page.results.map((pokemon: any) => {
            const id = pokemon?.url?.split("/").filter(Boolean).pop();

            return <PokimonCard name={pokemon.name} id={id} />;
          })
        )}
      </div>
      {isFetchingNextPage && (
        <div className="loader-wrapper">
          <div className="loader"></div>
          <span> Loading more Pokemon...</span>
        </div>
      )}
      <div className="infinite-scroll__total-pokemons">
        showing {allPokemons.length || 0} Pokemon
      </div>
      <div ref={loadMoreRef} style={{ height: 1 }} />
    </>
  );
};

export default PokemonInfiniteScroll;

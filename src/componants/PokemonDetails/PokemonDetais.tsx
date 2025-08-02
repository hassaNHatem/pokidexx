import { Link, useParams } from "react-router-dom";
import { usePokemonById } from "../../hooks/usePokemons";
import { ReactComponent as LeftArrow } from "../../assets/left.svg";
import "./PokemonDetails.css";
import { capitalizeFirstLetter } from "../../utils/pokemon-listing";
import ProgressBar from "./ProgressBar";

export const PokemonDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = usePokemonById(id!);
  const padded = Number(id).toString().padStart(3, "0");
  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (isError || !data)
    return <div className="text-center mt-10">Error fetching Pokémon</div>;
  console.log(data);
  return (
    <div className="pokemon-details__container">
      <div className="pokemon-details__wrapper">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <button className="pokemon-details__back-to-list">
            <LeftArrow />
            Back to List
          </button>
        </Link>
        <div className="pokemon-details__card">
          <div className="pokemon-details__header">
            <span className="pokemon-details__name">
              ⚡{capitalizeFirstLetter(data?.name)}
            </span>
            <span className="pokemon-details__number">#{padded}</span>
          </div>
          <div className="pokemon-details__content">
            <div className="pokemon-details__content-left-side">
              <div className="pokemon-details__image-container">
                <img src={data.sprites?.front_default} alt={data.name} />
              </div>
              <div className="pokemon-details__types-container">
                {data.types.map((t) => (
                  <span
                    key={t.type.name}
                    className="pokemon-details__single-type"
                  >
                    {t.type.name}
                  </span>
                ))}
              </div>
              <div className="pokemon-details__weight-and-height-section">
                <div className="pokemon-details__single-section">
                  <span>icon height</span>
                  <h3>{data.height} m</h3>
                </div>
                <div className="pokemon-details__single-section">
                  <span>icon Weight</span>
                  <h3>{data.weight} Kg</h3>
                </div>
              </div>
            </div>

            <div className="pokemon-details__content-right-side">
              <h2>Base Stats</h2>
              {data.stats.map((s) => (
                <div key={s.stat.name} className="pokemon-details__single-stat">
                  <div className="pokemon-details__stat-header">
                    <span className="capitalize">{s.stat.name}</span>
                    <span>{s.base_stat}%</span>
                  </div>
                  <ProgressBar percent={s.base_stat} />
                </div>
              ))}
              <h2 className="pokemon-details__abilities-header">Abilities</h2>
              {data.abilities.map((a) => (
                <div className="pokemon-details__single-ability">
                  <span>{a.ability.name}</span>
                  {a.is_hidden && <h5>(Hidden)</h5>}
                </div>
              ))}
              <h2>Base Experience</h2>
              <h2 className="pokemon-details__base-experience">
                {data.base_experience} XP
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

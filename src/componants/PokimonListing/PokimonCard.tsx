import React from "react";
import imgPlaceHolder from "../../assets/pokimon-place-holder.png";
interface PokemonCardProps {
  name: string;
  id: string | undefined;
  onClick?: () => void;
}

const PokimonCard: React.FC<PokemonCardProps> = ({ name, id, onClick }) => {
  const padded = Number(id).toString().padStart(3, "0");
  return (
    <div style={styles.card} onClick={onClick}>
      <img src={imgPlaceHolder} alt={name} style={styles.image} />
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.id}>#{padded}</p>
    </div>
  );
};

const styles = {
  card: {
    height: 350,
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    padding: 16,
    transition: "transform 0.2s ease",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: 280,
    backgroundColor: "rgb(238, 242, 245)",
    border: "1px solid #EEEEEE",
    borderRadius: 8,
  },
  name: {
    marginTop: 12,
    fontSize: 18,
    textTransform: "capitalize" as const,
  },
  id: {
    color: "#999",
    marginTop: 8,
  },
};

export default PokimonCard;

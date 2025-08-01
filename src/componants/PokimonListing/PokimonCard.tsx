import React from "react";
import imgPlaceHolder from "../../assets/pngwing.com.png";
interface PokemonCardProps {
  name: string;
  id: string | undefined;
  onClick?: () => void;
}

const PokimonCard: React.FC<PokemonCardProps> = ({ name, id, onClick }) => {
  return (
    <div style={styles.card} onClick={onClick}>
      <img src={imgPlaceHolder} alt={name} style={styles.image} />
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.id}>#{id}</p>
    </div>
  );
};

const styles = {
  card: {
    height: 300,
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    transition: "transform 0.2s ease",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    padding: 30,
    height: 220,
    backgroundColor: "#EEEEEE",
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
    marginTop: 4,
  },
};

export default PokimonCard;

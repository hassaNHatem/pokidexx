import { Button, Space } from "antd";
import { DISPLAY_TYPE } from "../../constants/pokemon-listing";

interface PokimonHeadersProps {
  displayType: number;
  setDisplayType: (type: number) => void;
}
const PokimonListingHeader: React.FC<PokimonHeadersProps> = ({
  displayType,
  setDisplayType,
}) => {
  return (
    <div style={styles.header}>
      <h1 style={styles.title}>⚡ Pokédex</h1>
      <p style={styles.subtitle}>
        Discover and explore Pokémon with page controls
      </p>

      <Space style={{ marginTop: 16 }}>
        <Button
          type="primary"
          style={
            displayType === DISPLAY_TYPE.PAGINATION
              ? styles.activeButton
              : styles.inActiveButton
          }
          onClick={() => setDisplayType(DISPLAY_TYPE.PAGINATION)}
        >
          Page Controls
        </Button>
        <Button
          type="primary"
          style={
            displayType === DISPLAY_TYPE.INFINITE_LOADING
              ? styles.activeButton
              : styles.inActiveButton
          }
          onClick={() => setDisplayType(DISPLAY_TYPE.INFINITE_LOADING)}
        >
          Infinite Scroll
        </Button>
      </Space>
    </div>
  );
};

const styles = {
  header: {
    textAlign: "center" as const,
    padding: "40px 16px 24px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "0",
  },
  activeButton: {
    backgroundColor: "black",
    cursor: "pointer",
    color: "white",
  },
  inActiveButton: {
    backgroundColor: "white",
    cursor: "pointer",
    color: "black",
  },
};

export default PokimonListingHeader;

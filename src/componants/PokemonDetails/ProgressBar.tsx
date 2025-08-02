import React from "react";

interface ProgressBarProps {
  percent: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
  const safePercent = Math.min(Math.max(percent, 0), 100);

  return (
    <div style={containerStyle}>
      <div style={{ ...barStyle, width: `${safePercent}%` }} />
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  width: "80%",
  height: "8px",
  marginTop: 4,
  backgroundColor: "#e0e0e0",
  borderRadius: "10px",
  overflow: "hidden",
};

const barStyle: React.CSSProperties = {
  height: "100%",
  backgroundColor: "black",
  transition: "width 0.3s ease",
};

export default ProgressBar;

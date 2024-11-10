import React from "react";

const AvatarName = ({ letter }: { letter: string }) => {
  return (
    <div
      style={{
        width: "84px",
        height: "84px",
        borderRadius: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #00FFFF 0%, #00D1FF 100%)",
      }}
    >
      <p
        style={{
          fontSize: "48px",
          fontWeight: "700",
          lineHeight: "57.6px",
          textAlign: "center",
        }}
      >
        {letter}
      </p>
    </div>
  );
};

export default AvatarName;

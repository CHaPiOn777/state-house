import React from "react";

const AvatarImg = ({ url }: { url: string }) => {
  return (
    <div
      style={{
        width: "84px",
        height: "84px",
        borderRadius: "100px",
        overflow: "hidden",
        backgroundImage: `url(${url})`,
      }}
    />
  );
};

export default AvatarImg;

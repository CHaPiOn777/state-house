"use client";
import DividerLeft from "@/img/icons/DividerLeft";
import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <h2
        style={{
          fontSize: "48px",
          fontWeight: "700",
          lineHeight: "57.6px",
          textAlign: "left",
        }}
      >
        {title}
      </h2>
      <DividerLeft />
    </div>
  );
};

export default Title;

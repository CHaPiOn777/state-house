"use client";
import DividerLeft from "@/img/icons/DividerLeft";
import React from "react";
import styles from "./title.module.css";

const Title = ({ title }: { title: string }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <h2 className={styles.title}>{title}</h2>
      <DividerLeft />
    </div>
  );
};

export default Title;

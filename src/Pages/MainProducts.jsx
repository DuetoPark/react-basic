import React from "react";
import AppProduct from "../Basic/AppProduct";

export default function MainProducts() {
  return (
    <>
      <section style={{ position: "relative" }}>
        <AppProduct />
      </section>
      <section style={{ position: "relative" }}>
        <AppProduct />
      </section>
    </>
  );
}

import React from "react";
import AppProduct from "../Basic/AppProduct";
import { useQueryClient } from "react-query";

export default function MainProducts() {
  const client = useQueryClient();

  return (
    <>
      <section style={{ position: "relative" }}>
        <AppProduct />
      </section>
      <section style={{ position: "relative" }}>
        <AppProduct />
      </section>

      <button
        type="button"
        onClick={() => {
          client.invalidateQueries(["products"]);
        }}
      >
        정보 업데이트
      </button>
    </>
  );
}

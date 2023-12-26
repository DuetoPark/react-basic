import React, { useState } from "react";
import "./product.css";
import { useQuery } from "react-query";

export default function Product() {
  const [_isChecked, setChecked] = useState(false);

  const {
    isError,
    isLoading,
    data: _products,
  } = useQuery(
    ["products", _isChecked],
    async () => {
      console.log("한번만 fetching 되지롱~~~!");
      return fetch(`datas/${_isChecked ? "sale_" : ""}products.json`).then(
        (res) => res.json()
      );
    },
    { staleTime: 1000 * 60 * 5, refetchOnWindowFocus: false }
  );

  if (isError) return <p className="error">오늘 장사 안해요</p>;

  if (isLoading) return <p className="loading">Loading!!!</p>;

  return (
    <section>
      <h2>싸다 싸 편하게 둘러보고 가세요👀</h2>

      <ol className="product-list">
        {/* public 폴더 내부의 파일을 선택할 때, 상대경로를 사용한다 */}
        <img className="logo" src="logo512.png" alt="" />

        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            value={_isChecked}
            onChange={() => setChecked((v) => !v)}
            checked={_isChecked}
          />
          <span>세일 중인 상품만 보기</span>
        </label>

        {/* 데이터 호출은 로드할 때 한번만 실행해야 한다. 안그럼 무한 호출이 일어남
            요소 출력 > 동시에 데이터 호출 > setState 업로드 함수 실행 > 요소 재 호출 > 동시에 데이터 호출 > setState 업로드 함수 실행 > 요소 재 호출 ... 무한 반복 */}

        {_products.map(({ name, price }) => (
          <li key={name} className="product-item">
            <h3>{name}</h3>
            <strong>{price}</strong>
          </li>
        ))}
      </ol>
    </section>
  );
}

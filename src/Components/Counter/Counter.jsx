import React, { useState } from 'react';
import './counter.css'

/* [useState]
Returns a stateful value, and a function to update it.
상태값, 업데이트 함수(SetStateAction)를 반환

업데이트 함수에는 수식 또는 콜백함수가 들어감
콜백함수의 인자에는 이전 상태값이 사용됨
수식과 콜백함수의 차이는 스코프에 있음
수식은 스코프에 의해 상태값을 찾아가지만,
콜백함수는 스코프에 의해 지역함수 내부의 prev 값을 찾아감
*/

export default function Counter() {
  let [_count, setCount] = useState(0);

  const plus = () => setCount(_count + 1); // _count를 참조
  const minus = () => setCount(_count - 1); // _count를 참조
  const show = () => alert(`아갓씌 현재 카운트는 ${_count}입니다.🥸`);

  return (
    <section className='counter'>
      <h1>👍카운드👎</h1>
      <p className='count'>{_count}</p>
      <div className='btn-box'>
        <button className='btn-count' onClick={plus}>👍</button>
        <button className='btn-count' onClick={show}>🔔</button>
        <button className='btn-count' onClick={minus}>👎</button>
      </div>
    </section>
  );
}


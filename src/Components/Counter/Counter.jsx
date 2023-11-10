import { useState } from 'react';
import './counter.css'

export default function Counter({plus, minus, total}) {
  /* [단위가 작은 컴포넌트의 state]
  개별적으로 처리
  */

  let [_count, setCount] = useState(0);

  return (
    <section className='counter'>
      <h1>👍카운드👎</h1>
      <p className='count'>
        {_count}<span className='total'>/{total}</span>
      </p>
      <div className='btn-box'>
        <button
          className='btn-count'
          onClick={() => {
            setCount(prev => prev + 1);
            plus();
          }}
        >👍</button>
        <button
          className='btn-count'
          onClick={() => {
            alert(`${_count}/${total} 입니다 아갓씌 🥸`);
          }}
        >🔔</button>

        <button
          className='btn-count'
          onClick={() => {
            setCount(prev => prev - 1);
            minus();
          }}
          disabled={_count === 0 ? true : false}
        >👎</button>
      </div>
    </section>
  );
}


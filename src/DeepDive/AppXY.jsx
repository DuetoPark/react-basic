import { useEffect, useState } from 'react';
import './xy.css';

/* [clientX vs offsetX vs pageX vs screenX]
=============================================
- clientX: 보이는 브라우저 화면 기준
- offsetX: 이벤트 대상 기준 (스크롤 화면 포함)
- pageX: 전체 문서 기준 (스크롤 화면 포함)
- screenX: 모니터 화면 기준
*/

/* [내가 푼 거]
- useEffect에 addEventListener, removeEventListener
- window의 mousemove 이벤트
- left, top 값 변경
=============================================
export default function AppXY() {
  let [_x, setX] = useState(0);
  let [_y, setY] = useState(0);

  const pointerHandler = (e) => {
    setX(x => e.clientX);
    setY(y => e.clientY);
  }

  useEffect(() => {
    window.addEventListener('mousemove', pointerHandler);

    return () => {
      window.removeEventListener('mousemove', pointerHandler);
    };
  });



  return (
    <section className='container'>
      <div className='pointer' style={{left: _x, top: _y}}></div>
    </section>
  );
}
*/

/* 정답
- onPointerMove 이벤트
- translate 값 변경
*/
export default function AppXY() {
  let [_x, setX] = useState(0);
  let [_y, setY] = useState(0);

  const pointerHandler = (e) => {
    setX(x => e.clientX);
    setY(y => e.clientY);
  }

  return (
    <section className='container' onPointerMove={pointerHandler}>
      <div className='pointer' style={{transform: `translate(${_x}px, ${_y}px)`}}></div>
    </section>
  );
}

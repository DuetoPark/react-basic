import { useState } from 'react';
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
  const [coord, setCoord] = useState({x: 0, y: 0, z: 0});

  const pointerHandler = (e) => {
    // 수평만 이동
    // NOTE: 객체 반환이기 때문에 소괄호()로 묶어준다. return 축약형
    // setCoord(prev => ({x: e.clientX, y: prev.y}));

    // 하나의 값만 변경
    setCoord(prev => ({...prev, x: e.clientX}));

  }

  return (
    <section className='container' onPointerMove={pointerHandler}>
      <div className='pointer' style={{transform: `translate(${coord.x}px, ${coord.y}px)`}}></div>
    </section>
  );
}

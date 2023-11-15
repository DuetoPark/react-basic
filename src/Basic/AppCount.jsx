import { useState } from 'react';
import Counter from './Components/Counter/Counter';

/* [useState]
Returns a stateful value, and a function to update it.
상태값, 업데이트 함수(SetStateAction)를 반환

업데이트 함수에는 수식 또는 콜백함수가 들어감
콜백함수의 인자에는 이전 상태값이 사용됨
수식과 콜백함수의 차이는 스코프에 있음
수식은 스코프에 의해 상태값을 찾아가지만,
콜백함수는 스코프에 의해 지역함수 내부의 prev 값을 찾아감
*/

// NOTE: 데이터의 덩어리를 나눈다

export default function AppCount() {
  const _titleStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '4px',
    width: '500px',
    height: '48px',
    margin: 'auto',
    backgroundColor: 'gold',
    textAlign: 'center',
    fontWeight: '800',
  };

  /* [단위가 큰 컴포넌트의 state]
  콜백함수에 업데이트 함수를 담아서 props으로 전달
  (total 값과 total 값 업데이트는 AppCount 내에서 선언하고 props로 넘겼음)
  데이터의 독립성을 지키며 컴포넌트간의 협럭을 위함
  */

  let [_total, setTotal] = useState(0);

  const plus = () => {setTotal(prev => prev + 1)};
  const minus = () => {setTotal(prev => prev - 1)};

  return (
    <>
      <p style={_titleStyle}>
        {_total < 10 ? '🎁' : '🎄'}
        아갓씌 전체 값은 <strong style={{textDecoration:'underline'}}>{_total}</strong> 입니다
        {_total < 10 ? '🎁' : '🎄'}
      </p>

      <Counter plus={plus} minus={minus} total={_total} />
      <Counter plus={plus} minus={minus} total={_total} />
      <Counter plus={plus} minus={minus} total={_total} />
      <Counter plus={plus} minus={minus} total={_total} />
    </>
  );
}


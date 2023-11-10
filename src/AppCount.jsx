import { useEffect, useState } from 'react';
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

  let [_count1, setCount1] = useState(0);
  const plus1 = () => setCount1(_count1 + 1);
  const minus1 = () => setCount1(_count1 - 1);


  let [_count2, setCount2] = useState(0);
  const plus2 = () => setCount2(_count2 + 1);
  const minus2 = () => setCount2(_count2 - 1);

  let [_total, setTotal] = useState(_count1 + _count2);

  useEffect(() => {
    setTotal(_count1 + _count2);
  }, [_count1, _count2]);

  return (
    <>
      <p style={_titleStyle}>
        {_total < 10 ? '🎁' : '🎄'}
        아갓씌 전체 값은 <strong style={{textDecoration:'underline'}}>{_total}</strong> 입니다
        {_total < 10 ? '🎁' : '🎄'}
      </p>

      <Counter
        count={_count1}
        plus={plus1}
        minus={minus1}
        total={_total}
        isDisabled={_total <= 0 && true}
      />
      <Counter
        count={_count2}
        plus={plus2}
        minus={minus2}
        total={_total}
        isDisabled={_total <= 0 && true}
      />
    </>
  );
}


import './App.css';

/** [컴포넌트 규칙]
 * 컴포넌트는 대문자로 시작한다.
*/ 

/** [JSX 규칙]
 * 컴포넌트는 하나의 태그를 반환 | <>, <Fragment> 외에 다양한 태그 가능
 * 클래스 속성은 className
 * js 변수 및 문법은 중괄호 안에 작성 | 직접 스타일을 입력하거나, 변수에 스타일 선언하고 변수만 이용
 */

function App() {
  const _name = '슈퍼짱짱 박인혜🔥';
  const _boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
    height: '200px',
    backgroundColor: 'red',
    color: 'white',
  };
  const _charmingPoint = ['유머', '긍정', '1L의 방광', '종이 인간'];

  return (
    <>
      <h1 className='orange'>{`헤어나올 수 없는 ${_name}의 매력`}</h1>
      <h2>수퍼장장 박인혜</h2>

      <ul>
        {_charmingPoint.map((_item, _index) => 
          <li>
            {`매력 포인트 ${_index + 1} `}
            <strong>{`✨ ${_item} ✨`}</strong>
          </li>
        )}
      </ul>

      <div style={_boxStyle}>
        방구 북북
      </div>
    </>
  );
}

export default App;

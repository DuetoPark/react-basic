import React, { useReducer } from 'react';
import './mentor.css';
import personReducer from '../Reducer/person-reducer';

/*

[리듀서]
- function **Reducer (state, action) {
  return 객체
}
- 🔥리듀서는 state를 받아서 newState를 반환🔥
- state는 🔥불변🔥의 상태값
- action은 객체로, 로직에 필요한 값이 담겨있다

[useReducer]
- state가 여럿 중첩되어 있어서 복잡한 경우에 사용

- const [변수(상태값), dispatch] = useReducer(리듀서, 변수 초기값);
- useReducer는 🔥currentState와 newState를 비교해서 서로 다르면 UI 변경됨.🔥

- dispatch(action);
- dispatch는 action(객체)를 전달

*/

export default function AppMentors() {
  const [_person, dispatch] = useReducer(personReducer, _initialData)

  const changeData = () => {
    const prev = window.prompt(`🥸 아갓씌, 어느 분의 이름을 바꾸고 싶은가요?`);
    if (prev === '') return;

    const current = window.prompt(`🥸 아갓씌, 이름을 무엇으로 바꾸고 싶은가요?`);
    if (current === '') return;

    dispatch({type: 'updated', prev, current});
  };

  /*
  [내가 생각한 답]
  - push로 해결
  
  [정답!]
  - 스프레드 문법으로 해결
  */
  const addData = () => {
    const name = window.prompt('🥸 아갓씌, 새로운 분의 이름을 작성해주세요');
    if (name === '') return;

    const desc = window.prompt('🥸 아갓씌, 새로운 분의 설명을 작성해주세요');
    if (desc === '') return;

    dispatch({type: 'added', name, desc});
  };

  /* 
  [내가 생각한 답]
  - splice로 해결

  [정답!]
  - filter로 해결
  */
  const deleteData = () => {
    const name = window.prompt('🥸 아갓씌, 집으로 돌아가실 분의 이름을 작성해주세요');
    if (name === '') return;

    if (window.confirm(`🥸 아갓씌, 정말 ${name}님을 집으로 보내고 싶은가요?`)) {
      dispatch({type: 'deleted', name});
    }
  };

  return (
    <section className='mentor'>
      <h1>{_person.name}는 {_person.desc}</h1>
      <p>
        아갓씌,<br/>
        멘토 리스트를 준비했습니다. 🥸<br/>
      </p>

      <ol className='mentor-list'>
        {_person.mentor.map((_item, index) => (
          <li key={index} className='mentor-item'>
            <span className='name'>{_item.name}</span>님<br/>
            <span className='desc'>{_item.desc}</span>
          </li>
        ))}
        
        {_person.mentor.length === 0 && <p className='empty'>Oops! 모두 집으로 귀가하셨습니다.</p>}
      </ol>

      <div className='btn-box'>
        <button type='button' onClick={changeData}>멘토 이름 바꾸기</button>
        <button type='button' onClick={addData}>+ 멘토 추가 ﹢</button>
        <button type='button' onClick={deleteData}>- 멘토 삭제 -</button>
      </div>
    </section>
  );
}

const _initialData = {
  name: '인혜',
  desc: '못말리는 장난꾸러기 🤦‍♀️',
  mentor: [
    {
      name: '배고프다',
      desc: '왜 인간은 매일 밥을 먹고 살아야 하지요??',
    },
    {
      name: '참아보자',
      desc: '쿠팡에서 대량 간식 칼로리 확인하기, 특이한 먹방 보기',
    },
    {
      name: '기대하는중',
      desc: '금요일 점심 딱 대',
    },
  ],
};
import React, { useState } from 'react';
import './mentor.css';

export default function AppMentors() {
  const [_person, setPerson] = useState({
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
  });

  const changeData = (e) => {
    const _prev = window.prompt(`🥸 아갓씌, 어느 분의 이름을 바꾸고 싶은가요?`);
    const _idx = _person.mentor.findIndex(_item => _item.name === _prev);

    if (_idx === -1) return;

    const _current = window.prompt(`🥸 아갓씌, 이름을 무엇으로 바꾸고 싶은가요?`);
    
    const _newData = {..._person};
    _newData.mentor[_idx].name = _current;

    setPerson(_newData);
  };

  /* [내가 생각한 답]
  - push로 해결
  */
  const _addData = () => {
    const name = window.prompt('🥸 아갓씌, 새로운 분의 이름을 작성해주세요');
    if (name === '') return;

    const desc = window.prompt('🥸 아갓씌, 새로운 분의 설명을 작성해주세요');
    if (desc === '') return;

    const _newData = {..._person};
    _newData.mentor.push({name, desc});

    setPerson(_newData);
  };

   /* [정답!]
  - 스프레드 문법으로 해결
  */
  const addData = () => {
    const name = window.prompt('🥸 아갓씌, 새로운 분의 이름을 작성해주세요');
    if (name === '') return;

    const desc = window.prompt('🥸 아갓씌, 새로운 분의 설명을 작성해주세요');
    if (desc === '') return;

    setPerson(prev => ({
      ...prev,
      mentor: [...prev.mentor, {name, desc}],
    }));
  };

  /* [내가 생각한 답]
  - splice로 해결
  */
  const _deleteData = () => {
    const _name = window.prompt('🥸 아갓씌, 집으로 돌아가실 분의 이름을 작성해주세요');
    if (_name === '') return;

    const _idx = _person.mentor.findIndex(_item => _item.name === _name);

    if (window.confirm(`🥸 아갓씌, 정말 ${_name}님을 집으로 보내고 싶은가요?`)) {
      const _newData = {..._person};
      _newData.mentor.splice(_idx, 1);
      setPerson(_newData);
    }
  };

  /* [정답!]
  - filter로 해결
  */
  const deleteData = () => {
    const _name = window.prompt('🥸 아갓씌, 집으로 돌아가실 분의 이름을 작성해주세요');
    if (_name === '') return;

    if (window.confirm(`🥸 아갓씌, 정말 ${_name}님을 집으로 보내고 싶은가요?`)) {
      setPerson(_prev => ({
        ..._prev,
        mentor: _prev.mentor.filter(_item => _item.name !== _name),
      }));
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


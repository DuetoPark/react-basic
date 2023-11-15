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
      </ol>

      <div className='btn-box'>
        <button type='button' onClick={changeData}>멘토 이름 바꾸기</button>
      </div>
    </section>
  );
}


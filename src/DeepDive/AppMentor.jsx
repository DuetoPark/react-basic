import React, { useState } from 'react';
import './mentor.css';

export default function AppMentor() {
  const [_person, setPerson] = useState({
    name: '인혜',
    desc: '못말리는 장난꾸러기 🤦‍♀️',
    mentor: {
      name: '멘토',
      desc: '가슴 속에 3000원 꼭 품고 다녀주십셔. 붕어빵 메이트 ㄱㄱ 🎏',
    },
  });

  const changeData = (e) => {
    const _id = e.currentTarget.id;
    const _newValue = window.prompt(`멘토님의 변경하실 ${_id === 'name' ? '이름을' : '설명을'} 적어주세용 아갓씌🥸`);
    setPerson(prev => ({
      ...prev,
      mentor: {
        ...prev.mentor,
        [_id]: _newValue,
      }
    }));
  };

  return (
    <section className='mentor'>
      <h1>{_person.name}는 {_person.desc}</h1>
      <p>
        진심으로 환영합니다<br/>
        <span className='name'>{_person.mentor.name}</span>님<br/>
        <span className='desc'>{_person.mentor.desc}</span>
      </p>

      <div className='btn-box'>
        <button id='name' type='button' onClick={changeData}>멘토 이름 바꾸기</button>
        <button id='desc' type='button' onClick={changeData}>멘토 문구 바꾸기</button>
      </div>
    </section>
  );
}


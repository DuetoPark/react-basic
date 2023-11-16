import React, { useState } from 'react';
import './form.css';

/*
[리액트의 Form]
- form 요소들은 uncontrolled component
- 요소의 값이 변경되면, state도 변경되도록 설정
*/

export default function AppForm() {
  const [_form, setForm] = useState({name: '', age: ''});

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(_form);
  };

  const handleInput = (e) => {
    const {name, value} = e.currentTarget;
    setForm(prev => ({...prev, [name]: value}));
  };

  return (
    <form onSubmit={handleSubmit}>
      <header>
        <h1>멋진 폼</h1>
        <p>이것은 uncontrolled component를 연습하는 공간입니다~!👻</p>
      </header>

      <label>
        <span className='title'>이름</span>
        <input type="text" name="name" value={_form.name} onInput={handleInput} autoComplete='false' />
      </label>

      <label>
        <span className='title'>나이</span>
        <input type="tel" name="age" value={_form.age} onInput={handleInput} autoComplete='false' />
      </label>

      <button type='submit'>제출</button>
    </form>
  );
}


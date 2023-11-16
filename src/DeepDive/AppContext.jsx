import React, { useContext } from 'react';
import './context.css';
import { DarkModeContext, DarkModeProvider } from '../context/DarkModeContext';

/*
[구조]
AppContext
  Header
  Main
    SectionWrapper
      Description
    ModeBox
      SectionWrapper
        Description >> darkMode 출력
      SectionWrapper
        ToggleButton >> darkMode 토클
  Footer

- ModeBox를 Provider로 감싼다
- ModeBox에 context를 선언한다
*/

export default function AppContext() {
  return (
    <div className='app-context'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className='header'>
      <h1>헤더</h1>
    </header>
  );
}

function Main () {
  return (
    <div className='main'>
      <h2>여기는 본문영역</h2>

      <SectionWrapper>
        <h3>멋쟁이 박인혜 🤠</h3>
        <Description desc={'🐎 🔫 🍻 🐎 🔫 🍻 🐎 🔫 🍻 🐎 🔫 🍻'} />
      </SectionWrapper>

      <DarkModeProvider>
        <ModeBox />
      </DarkModeProvider>

    </div>
  );
}

function SectionWrapper({children}) {
  return (
    <section className='section-box'>{children}</section>
  );
}

function ModeBox() {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

  return (
    <div>
      <SectionWrapper>
        <h3>페이지 모드</h3>
        <Description desc={darkMode ? 'DarkMode! 🌝': 'LightMode! ☀️'} />
      </SectionWrapper>

      <SectionWrapper>
        <h3>페이지 모드 변환 버튼</h3>
        <ToggleButton toggleDarkMode={toggleDarkMode}/>
      </SectionWrapper>
    </div>
  );
}

function Description({desc}) {
  return (
    <p>{desc}</p>
  );
}

function ToggleButton({toggleDarkMode}) {
  return (
    <button type='button' onClick={toggleDarkMode} className='btn-toggle'>Toggle</button>
  );
}

function Footer() {
  return (
    <footer className='footer'>
      <p>푸터</p>
    </footer>
  );
}

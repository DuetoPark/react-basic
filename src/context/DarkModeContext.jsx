import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext();

/*
[context]
- 많은 컴포넌트와 state 공유
- 수많은 네스팅으로 인한 props drilling 개선
- 예시: 로그인/테마/언어
- 어느 한 지점(컴포넌트)를 지정하여 사용

[createContext]
- 객체를 생성
- state와 로직 저장

[provider]
- context에 저장한 데이터 읽음 (state, 로직)
- 감싼 컴포넌트에 데이터 전달
- state 변경되면 하위 모든 컴포넌트가 랜더링 됨
- 선언
  - wrapper component와 유사
  - children를 props로 받음
- 반환
  - 컨택스트이름.Provider 반환
  - value props로 state와 로직을 전달
 */

export function DarkModeProvider({children}) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(mode => !mode);

  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  );
}


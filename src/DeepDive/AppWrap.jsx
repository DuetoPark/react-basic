import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Avatar from './Components/NavBar/Avatar';

export default function AppWrap() {
  return (
    <header>
      <NavBar>
        <Avatar avatar={'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
        <p>곰돌이 월드</p>
      </NavBar>

      <NavBar>
        <h2>🐻</h2>
      </NavBar>
    </header>
  );
}


import React from 'react';
import './avatar.css'

export default function Avatar({avatar, isNew}) {
  return (
    <div className='avatar-box'>
      <img className="avatar" src={avatar} alt="avatar" />
      {isNew && <strong className='new-tag'>new</strong>}
    </div>
  );
}


import Avatar from '../Avatar/Avatar';
import './profile.css';

/* [컴포넌트 기본]

function Profile() {
  return (
    <>
      <h1>💫 프로필 💫</h1>
    </>
  );
}

export default Profile;
*/ 

/* [컴포넌트 함축]
export default function Profile() {
  return (
    <>
      <h1>💫 프로필 💫</h1>
    </>
  );
}
*/


/* [Simple react snippets 의 rfc 명령어로 생성] */
import React from 'react';

export default function Profile({avatar, name, desc, isNew}) {
  return <article className='profile-card'>
    <img
      className='card-cover'
      src="https://images.unsplash.com/photo-1693993151823-f6064827dd95?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="profile cover"
      aria-hidden="true" />
    <Avatar avatar={avatar} isNew={isNew} />
    <h1 className='card-name'>{name}</h1>
    <p className='card-desc'>{desc}</p>
  </article>;
}

/* [Simple react snippets 의 rfi 명령어로 생성 (state 없는 UI)]
import React from 'react';

export const Profile = (props) => (
  <h1>💫 프로필 💫</h1>
);
*/

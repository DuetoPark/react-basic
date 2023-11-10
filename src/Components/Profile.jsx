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

export default function Profile() {
  return (
    <h1>💫 프로필 💫</h1>
  );
}

/* [Simple react snippets 의 rfi 명령어로 생성 (state 없는 UI)]
import React from 'react';

export const Profile = (props) => (
  <h1>💫 프로필 💫</h1>
);
*/

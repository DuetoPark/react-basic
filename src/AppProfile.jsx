import Profile from "./Components/Profile/Profile";

function AppProfile() {
  return (
    <>
      <Profile 
        avatar="https://plus.unsplash.com/premium_photo-1677101221533-52b45823a2dc?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="멋쟁이 박인혜 🤩"
        desc="유쾌한 방구쟁이 프론트엔드 개발자"
        isNew={true}
      />
      <Profile 
        avatar="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww"
        name="유쾌한 박인혜 👽"
        desc="긍정킹 프론트엔드 개발자"
      />
      <Profile 
        avatar="https://images.unsplash.com/photo-1609151354448-c4a53450c6e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhYmJpdHxlbnwwfHwwfHx8MA%3D%3D"
        name="고양이 박인혜 👀"
        desc="고양이 처돌이 프론트엔드 개발자"
        isNew={true}
      />
      <Profile 
        avatar="https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9yc2V8ZW58MHx8MHx8fDA%3D"
        name="똥패션 박인혜 🤩"
        desc="패션센스는 없지만 옷빨은 죽이는 프론트엔드 개발자"
      />
      
    </>

  );
}

export default AppProfile;

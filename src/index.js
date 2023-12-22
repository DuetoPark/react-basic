import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
// import AppContext from './DeepDive/AppContext';
// import AppWrap from './DeepDive/AppWrap';
// import AppForm from './DeepDive/AppForm';
// import AppMentors from './DeepDive/AppMentors';
// import AppMentor from './DeepDive/AppMentor';
// import AppXY from './DeepDive/AppXY';
// import AppProfile from './Basic/AppProfile';
// import AppCount from './Basic/AppCount';
import AppProduct from "./Basic/AppProduct";
import MainProducts from "./Pages/MainProducts";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

// 1. 랜더링: id가 root인 요소를 만들어서 랜더링 한다.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 2. strict mode: 자바스크립트의 strict 모드와 유사
  <React.StrictMode>
    {/* <AppProfile /> */}
    {/* <AppCount /> */}
    {/* <AppProduct /> */}
    {/* <AppXY /> */}
    {/* <AppMentor /> */}
    {/* <AppMentors /> */}
    {/* <AppForm/> */}
    {/* <AppWrap /> */}
    {/* <AppContext /> */}

    <QueryClientProvider client={queryClient}>
      <MainProducts />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();

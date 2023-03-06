import React from "react";
import Layout from "./components/Layout/Layout";
import ColorChanger from "./components/Content/ColorChanger/ColorChanger";

function App() {
  const [mainBool, setMainBool] = React.useState();

  return(
  <>
    <Layout mainBool={mainBool} setMainBool={setMainBool}/>
    <ColorChanger setMainBool={setMainBool} mainBool={mainBool}/>
  </>
  );
}

export default App;

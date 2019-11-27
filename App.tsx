import React from "react";

import HelloWorld from "./components/HelloWorld";
import HelloWorld2 from "./components/HelloWorld2";
import HelloWorld3 from "./components/HelloWorld3";

export default function App() {
  return (
    <div>
      <HelloWorld name='swapnil' myButtonClickHandler={(e)=>alert(e)}/>
      <HelloWorld2 firstName="swapnil1" lastName="menkudale" salary="1000" />
      <HelloWorld3 firstName="swapnil1" lastName="menkudale" salary="1000" />
    </div>
  );
}

import React from "react";
import Work1 from "./components/work1/index"
import Work2 from "./components/work2/index"
import Work3 from "./components/work3/index"
import Work4 from "./components/work4/index"
import Work6 from "./components/work6";

class App extends React.Component {

  render() {

    return <>

      <Work1 text={'Hello World'} />
      <Work2 text2={'2rd varjutyun'} text21={'afagergfergf'} />
      <Work3 text3={'3rd varjutyun'} text31={'afagergfergf'} />
      <Work4 text4={'Bari GISHER'} />
      <Work6/>

    </>



  }




}














export default App
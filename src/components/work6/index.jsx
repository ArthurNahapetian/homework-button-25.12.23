import React from "react";
import "../work6/style.scss"


class Work6 extends React.Component {

state={
    isClick:false
}

click=()=>{
    this.setState({isClick:! this.state.isClick})
}
click = Math.random



    render() {
        return <>
<div className="box">
<button className={'button'}onClick={this.click}>CHANGE Color</button>
</div>




        </>
    }
}

export default Work6
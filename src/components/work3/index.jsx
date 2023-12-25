import React from "react";
import "../work3/style.scss"
class Work3 extends React.Component {



    state = {
        isTex: false
    }
    changeTex = () => {
        this.setState({ isHide: !this.state.isHide })
    }
    render() {



        return <>


            <div className={'box'}>
                {!this.state.isHide ? <p>{this.props.text3}</p> : <p> {this.props.text31}</p>}
                {!this.state.isHide ? <p>{this.props.text31}</p> : <p> {this.props.text3}</p>}
                <button onClick={this.changeTex}>CHANGE</button>

            </div>










        </>







    }
}

export default Work3
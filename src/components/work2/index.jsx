import React from "react";
import "../work2/style.scss"
class Work2 extends React.Component {



    state = {
        isHide: false
    }
    hideText = () => {
        this.setState({ isHide: !this.state.isHide })
    }
    render() {



        return <>


            <div className={'box'}>
                <p>{this.props.text2}</p>
                {this.state.isHide?<p>{this.props.text21}</p>: null}
                <button onClick={ this.hideText}>Click</button>

            </div>










        </>







    }
}

export default Work2
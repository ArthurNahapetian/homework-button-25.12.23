import React from "react";
import "../work4/style.scss"

class Work4 extends React.Component {




    state = {
        isHide: false
    }
   unHide = () => {
        this.setState({ isHide: !this.state.isHide })
    }






    render() {
        return <>


            <div className={'box'}>
                {!this.state.isHide ? <p>{this.props.text4}</p> :null}
         
                <button onClick={this.unHide}>Click</button>

            </div>


        </>
    }
}

export default Work4
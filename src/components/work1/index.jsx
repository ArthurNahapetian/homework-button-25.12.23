import React from "react";
import "../work1/style.scss"


class Work1 extends React.Component {



    state = {
        changeColor: false
    }
    color = () => {
        this.setState({ changeColor: !this.state.changeColor })
    }

    render() {



        return <>


            <div className={'box'}>

                <p className={`color ${this.state.changeColor ? 'color-green' : 'color-red'} `} >{this.props.text}</p>
                <button onClick={this.color} >{this.state.changeColor ? 'click again' : 'Click me'}</button>

            </div>













        </>




    }


}

export default Work1
import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    handleOnClick = e => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })

        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    handleOnKeyPress = e => {
        console.log("e.target", e.target.value)
    }

    render() {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.handleOnClick}>Click me!</button>
                <input type="text" onKeyPress={this.handleOnKeyPress}></input>
            </div>
        )
    }
}

export default Counter
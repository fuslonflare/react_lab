import React from 'react'

class MyName extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'John Doe',
            displayDate: new Date().toString()
        }
    }

    componentDidMount() {
        console.log('componentDidMount called')
        this.interval = setInterval(() => this.refresh(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    refresh() {
        this.setState({
            displayDate: new Date().toString()
        })
    }

    render() {
        console.log('render called')
        return (
            <div>
                <h1>Hello</h1>
                <p>My name is {this.state.name}</p>
                <p>{this.state.displayDate}</p>
            </div>
        )
    }
}

export default MyName

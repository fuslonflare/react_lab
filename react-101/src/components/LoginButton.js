import React from 'react'

class LoginButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    handleLogin = () => {
        this.setState({
            isLoggedIn: true,
            name: 'Pupe'
        })
    }

    handleLogout = () => {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        if (this.state.isLoggedIn) {
            return null
        } else {
            return <button onClick={this.handleLogin}>Please Login</button>
        }
        // return (
        //     <div>
        //         {this.state.isLoggedIn ? (
        //             <div>
        //                 <p>Hello {this.state.name}</p>
        //                 <button onClick={this.handleLogout}>Logout</button>
        //             </div>
        //         ) : (
        //             <div>
        //                 <button onClick={this.handleLogin}>Please Login</button>
        //             </div>
        //         )}
        //         {this.state.name && <p>Hello again, {this.state.name}</p>}
        //     </div>
        // )
    }
}

export default LoginButton
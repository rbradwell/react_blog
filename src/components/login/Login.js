import React from 'react';
import Notifications from "../notifications/Notifications";
import {Redirect, Link} from "react-router-dom";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password:'',
            notifications:[],
            redirect:''
        }
        this.onHandleInputChange = this.handleInputChange.bind(this);
        this.onHandleClick = this.handleClick.bind(this);
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ ...this.state, [name]:value });
    }

    handleClick = (e) => {
        e.preventDefault();
        if ( this.state.user !== 'admin' || this.state.password !== 'admin' ) {
            this.resetState();
            this.setState({ ...this.state, notifications: ['Wrong user or password.\nTip: Try using admin/admin'] });
        } else {
            this.setState({...this.state, 'redirect': '/admin'});
        }
    }

    resetState = () => {
        this.setState({
            user: '',
            password:'',
            notifications:[],
            redirect:''
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>;
        }
        return (
            <React.Fragment>
            <p>{'\u00A0'}{'\u00A0'}<Link to='/'>{'<<back'}</Link></p>
            <div className="post">
                <Notifications errors={this.state.notifications}/>
                <center>
                    <form name="post_comment">
                        <table border="0">
                            <tbody>
                            <tr>
                                <td>user:</td><td><input type="text" name="user" value={this.state.user} onChange={this.onHandleInputChange} size="20" max="60" /></td>
                            </tr>
                            <tr>
                                <td>password:</td><td><input type="password" name="password" value={this.state.password} onChange={this.onHandleInputChange}  size="20" /></td>
                            </tr>
                            </tbody>
                        </table>
                        <input type="button" value="Login" onClick={this.onHandleClick}/>
                    </form>
                </center>
            </div>
            </React.Fragment>
        );
    }
}

export default Login;
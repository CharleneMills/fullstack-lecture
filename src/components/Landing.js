import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../redux/reducer';

class Landing extends Component {
    
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault();
        const {email, password} = this.state

        axios.post('/auth/login', {email, password})
        .then(res => {
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            alert('could not login')
        })

    }
    
    render(){

        const {email, password} = this.state;

        return(
            <div>
                <form onSubmit={(e) => this.login(e)}>
                    <input type="text" placeholder="email" name="email" value={email} onChange={e => this.changeHandler(e)}/>
                    <input type="password" placeholder="password" name="password" value={password} onChange={e => this.changeHandler(e)}/>
                    <input type="submit" value="Login"/>
                </form>
                <p>If you don't already have an account, please register here:</p>
                <Link to="/register">Register</Link>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

const mapDispatchToProps = {loginUser}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
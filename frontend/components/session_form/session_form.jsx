import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            cont_name: '',
            cont_state: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // Demo Log In - Bind
        this.demoSignIn = this.demoSignIn.bind(this)
        // Continue Method - Bind
        this.contMethod = this.contMethod.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    // Demo Log In
    demoSignIn(e) {
        e.preventDefault();
        e.stopPropagation();
        const guest = { username: 'guest', password: '123456' }
        this.props.processForm(guest).then(this.props.closeModal);
    }

    // Continue Method
    contMethod(e) {
        e.preventDefault();
        e.stopPropagation();
        this.state.cont_name = this.state.username
        if (this.state.cont_name.length > 0) {
            this.setState({ cont_state: true })
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        // Email + Password Input Fields (for Create Account)
        let email;
        if (this.props.formType === 'signup') { 
            email = (
                <>
                    <label>Email:
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                        />
                    </label>
                    <br />
                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                        />
                    </label>
                </>
            )
        }

        // Demo Button
        let demo;
        if (this.props.formType === 'login') {
            demo = (
            <>
                <button onClick={this.demoSignIn}>Demo Sign in</button>
                <br />
            </>
            )
        }

        // Continue Button
        let contButton;
        if (this.props.formType === 'login') {
            contButton = (
                    <>
                        <button onClick={this.contMethod}>Continue</button>
                        <br />
                        {/* DEMO SIGN IN */}
                        {demo}
                    </>
            )
        }
        if (this.state.cont_state === true) {
            contButton = (
                <div>
                    <label>Password:
                            <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                        />
                    </label>
                </div>
            )
        }

        // Sign In/Create Account Button
        let signInOrCreateAccountButton;
        if (this.props.formType === 'signup') {
            signInOrCreateAccountButton = (<input className="session-submit" type="submit" value="Create account" />)
        } else if (this.props.formType === 'login' && this.state.cont_state) {
            signInOrCreateAccountButton = (<input className="session-submit" type="submit" value="Sign in" />)     
        }
        
        // Texty (for Modal form - don't really need though - delete from "form" later?)
        let texty = 'Create account'
        if (this.props.formType === 'login') {
            texty = 'Sign in'
        }

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">

                    {/* SoundCloud doesn't have this lol */}
                    {/* {texty} or {this.props.otherForm} */}
                    {texty}

                    <div onClick={this.props.closeModal} className="close-x">X</div>

                    {this.renderErrors()}

                    <div className="login-form">
                        <br />
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        {email}
                        {/* Continue Button*/}
                        {contButton}
                        <br />
                        {signInOrCreateAccountButton}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);

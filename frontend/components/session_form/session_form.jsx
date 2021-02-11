import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            cont_state: false // NOTE: "Continue State" - if "Continue" buttons shows or not
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
        if (this.state.username.length > 0) {
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
        // Password Input Field
        let passwordInputField = (
            <>
                <label>Password:
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                        placeholder="Your Password"
                    />
                </label>
                {/* <br /> */}
            </>
        )
        // Email Input Field (for Create Account)
        let email;
        if (this.props.formType === 'signup') { 
            email = (
                <>
                    <label>Email:
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                            placeholder="Your Email Address"
                        />
                    </label>
                    <br />
                    {passwordInputField}
                </>
            )
        }

        // Demo Login Button
        let demoLoginButton;
        if (this.props.formType === 'login' && !this.state.cont_state) {
            demoLoginButton = (
            <>
                <button onClick={this.demoSignIn}>Demo Sign in</button>
                <br />
                <p className="straightline">
                    <span>or</span>
                </p>
            </>
            )
        }

        // Continue Button
        let contButton;
        if (this.props.formType === 'login') {
            contButton = (
                    <>
                        <button onClick={this.contMethod}>Continue</button>
                    </>
            )
        }
        if (this.state.cont_state === true) {
            contButton = (
                <div>
                    {passwordInputField}
                </div>
            )
        }

        // Sign In/Create Account Button
        let signInOrCreateAccountButton;
        if (this.props.formType === 'signup') {
            signInOrCreateAccountButton = (
            <>
                <br />
                <input type="submit" value="Create account" />
            </>
            )
        } else if (this.props.formType === 'login' && this.state.cont_state) {
            signInOrCreateAccountButton = (
                <>
                    <br />
                    <input type="submit" value="Sign in" />
                </>
            ) 
        }

        return (
            <>
            
                <div className="login-form-container">

                    <form onSubmit={this.handleSubmit} className="login-form-box">

                        {/* SoundCloud doesn't have this lol */}
                        {/* {} or {this.props.otherForm} */}

                        {this.renderErrors()}

                        <div className="login-form">
                            {/* DEMO SIGN IN */}
                            {demoLoginButton}
                            {/* Username Input Field (always shows) */}
                            <label>Username:
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                    placeholder="Your Username"
                                />
                            </label>
                            <br />
                            {/* Email Input Field*/}
                            {email}
                            {/* Continue Button*/}
                            {contButton}
                            {signInOrCreateAccountButton}
                        </div>
                    </form>
                </div>

            </>
        );
    }
}

export default withRouter(SessionForm);

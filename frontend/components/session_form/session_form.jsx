import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '' // might break HERE
        };

        this.handleSubmit = this.handleSubmit.bind(this);

        // Demo Log In - Bind
        this.demoLogIn = this.demoLogIn.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    // Demo Log In
    demoLogIn(e) {
        e.preventDefault();
        e.stopPropagation();
        const guest = { username: 'guest', password: '123456' }
        this.props.processForm(guest);
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

        let email = (<div></div>)

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
                </>
            )
        }

        let button_text = "Sign in"
        if (this.props.formType === 'signup') {
            button_text = "Sign up"
        }

        // Demo Button
        let demo = (<></>)
        if (this.props.formType === 'login') {
            demo = (
            <>
                <button onClick={this.demoLogIn}>Demo Log in</button>
                <br />
            </>
            )
        }

        let test = 'Create account'
        if (this.props.formType === 'login') {
            test = 'Sign in'
        }

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome to SoundOcean!
                    <br />
                    {test} or {this.props.navLink}
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
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={button_text} />
                        <br />
                    </div>
                    {/* DEMO LOG IN - not sure if it works */}
                    {demo}
                </form>
            </div>
        );
    }
}

export default SessionForm;

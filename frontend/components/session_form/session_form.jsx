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

        let test = (<div></div>)

        if (this.props.formType === 'signup') { 
            test = (
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

        let button_text = "Log In"
        if (this.props.formType === 'signup') {
            button_text = "Sign Up"
        }


        return (

            <div className="login-form-container">

                <form onSubmit={this.handleSubmit} className="login-form-box">

                    Welcome to SoundOcean (from session_form.jsx)!
                    <br />

                    Please {this.props.formType} or {this.props.navLink}

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

                        {test}

                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />


                        <input className="session-submit" type="submit" value={button_text} />

                    </div>

                </form>

            </div>
        );
    }
}

export default SessionForm;

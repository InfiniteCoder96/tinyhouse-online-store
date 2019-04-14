import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SignupForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            password_conf: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value

        });
    }

    onSubmit(e){
        e.preventDefault();
        this.props.userSignupRequest(this.state);

        this.setState({
            username: '',
            password: '',
            email: '',
            password_conf: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h2>Join our community !</h2>

                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Password Confirmation</label>
                    <input
                        type="password"
                        name="password_conf"
                        value={this.state.password_conf}
                        onChange={this.onChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg" type="submit">Sign Up</button>
                </div>
            </form>
        );
    }


}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
}

export default SignupForm;
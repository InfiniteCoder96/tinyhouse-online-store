import React, {Component} from 'react';
import SignupForm from './SignupForm';
import {connect} from "react-redux";
import { userSignupRequest} from '../../actions/signupActions';
import PropTypes from 'prop-types';

class SignupPage extends Component {
    render() {
        const { userSignupRequest} = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <SignupForm userSignupRequest={userSignupRequest}/>
                    </div>
                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
};

// export default connect((state) => {return {} }, { userSignupRequest }) (SignupPage);
export default connect(null, { userSignupRequest }) (SignupPage);
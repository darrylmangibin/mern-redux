import LoginFields from "../login/LoginFields";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	selectErrors,
	selectLoading,
	selectAuthenticated
} from "../../redux/auth/selectors";
import { loginUser } from "../../redux/auth/authActions";

const mapStateToProps = createStructuredSelector({
	errors: selectErrors,
	loading: selectLoading,
	authenticated: selectAuthenticated
});

const mapDispatchToProps = dispatch => ({
	loginUser: formData => dispatch(loginUser(formData))
});

const LoginFieldsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginFields);

export default withRouter(LoginFieldsContainer);

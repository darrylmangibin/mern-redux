import LoginFields from "../../auth/LoginFields";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { loginUser } from "../../../redux/actions/auth";
import {
	selectErrors,
	selectAuthenticated,
	selectLoading
} from "../../../redux/selectors/authSelectors";

const mapDispatchToProps = dispatch => ({
	loginUser: formData => dispatch(loginUser(formData))
});

const mapStateToProps = createStructuredSelector({
	errors: selectErrors,
	authenticated: selectAuthenticated,
	loading: selectLoading
});

const LoginFieldsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginFields);

export default LoginFieldsContainer;

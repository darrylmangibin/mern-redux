import RegisterFields from "../register/RegisterFields";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { registerUser } from "../../redux/auth/authActions";
import { selectErrors, selectAuthenticated } from "../../redux/auth/selectors";

const mapDispatchToProps = dispatch => ({
	registerUser: formData => dispatch(registerUser(formData))
});

const mapStateToProps = createStructuredSelector({
	errors: selectErrors,
	authenticated: selectAuthenticated
});

const RegisterFieldsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(RegisterFields);

export default withRouter(RegisterFieldsContainer);

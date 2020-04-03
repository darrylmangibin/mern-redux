import RegisterFields from "../../auth/RegisterFields";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { registerUser } from "../../../redux/actions/auth";
import {
	selectErrors,
	selectAuthenticated,
	selectLoading
} from "../../../redux/selectors/authSelectors";

const mapStateToProps = createStructuredSelector({
	errors: selectErrors,
	authenticated: selectAuthenticated,
	loading: selectLoading
});

const RegisterFieldsContainer = connect(mapStateToProps, {
	registerUser
})(RegisterFields);

export default RegisterFieldsContainer;

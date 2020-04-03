import { Header } from "../layout";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { logout } from "../../redux/actions/auth";

import {
	selectAuthenticated,
	selectLoading
} from "../../redux/selectors/authSelectors";

const mapStateToProps = createStructuredSelector({
	authenticated: selectAuthenticated,
	loading: selectLoading
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout())
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;

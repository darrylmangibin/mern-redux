import { Header } from "../layout";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectAuthenticated, selectLoading } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/authActions";

const mapStateToProps = createStructuredSelector({
	authenticated: selectAuthenticated,
	loading: selectLoading
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout())
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;

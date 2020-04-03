import MainApp from "../../../pages/main/";
import { connect } from "react-redux";
import { getNotes } from "../../../redux/actions/notes";

const MainAppContainer = connect(null, {
	getNotes
})(MainApp);

export default MainAppContainer;

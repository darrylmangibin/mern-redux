import NotesList from "../../main/NotesList";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	selectNotes,
	selectLoading,
} from "../../../redux/selectors/notesSelector";
import { selectText, selectSortBy } from "../../../redux/selectors/filterSelectors";

const mapStateToProps = createStructuredSelector({
	notes: selectNotes,
	loading: selectLoading,
	text: selectText,
	sortBy: selectSortBy
});

const NotesListContainer = connect(mapStateToProps)(NotesList);

export default NotesListContainer;

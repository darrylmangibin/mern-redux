import EditFields from "../edit/EditFields";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectNote, selectErrors } from "../../redux/selectors/notesSelector";
import { getNote, deleteNote, editNote } from "../../redux/actions/notes";

const mapStateToProps = createStructuredSelector({
	note: selectNote,
	errors: selectErrors
});

const EditFieldsContainer = connect(mapStateToProps, {
	getNote,
	deleteNote,
	editNote
})(EditFields);

export default EditFieldsContainer;

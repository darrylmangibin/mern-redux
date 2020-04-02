import NotesList from "../notes/NotesList";
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'

import { getNotes } from "../../redux/notes/notesActions";
import { selectItems, selectLoading } from "../../redux/notes/selectors";
import { selectAuthenticated } from '../../redux/auth/selectors';

const mapDispatchToProps = dispatch => ({
	getNotes: () => dispatch(getNotes())
});

const mapStateToProps = createStructuredSelector({
  items: selectItems,
  loading: selectLoading,
  authenticated: selectAuthenticated
})

const NotesListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NotesList);

export default withRouter(NotesListContainer);

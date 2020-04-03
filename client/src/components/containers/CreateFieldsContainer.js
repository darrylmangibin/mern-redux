import CreateFields from "../create/CreateFields";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { selectErrors } from '../../redux/selectors/notesSelector';
import { addNote } from "../../redux/actions/notes";


const mapStateToProps = createStructuredSelector({
	errors: selectErrors
})

const CreateFieldsContainer = connect(mapStateToProps, {
	addNote
})(CreateFields);

export default CreateFieldsContainer;

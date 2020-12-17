import { connect } from 'react-redux';
import { deletePhonebooks, resendPhonebooks, editPhonebooks } from '../actions';
import TablePhone from './TablePhone';

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeData: () => dispatch(deletePhonebooks(ownProps.id)),
    resendData: () => dispatch(resendPhonebooks(ownProps.id, ownProps.name, ownProps.phone)),
    editData: (name, phone) => dispatch(editPhonebooks(ownProps.id, name, phone))
})

export default connect(
    null,
    mapDispatchToProps
)(TablePhone)
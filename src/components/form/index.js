import Form from './Form'
import {connect} from "react-redux";
import {addTodo} from "../../store/todos/actions";
import {addNotification} from "../../store/notify/actions";

const mapDispatchToProps = (dispatch) => ({
    addNotify: (payload) => dispatch(addNotification(payload)),
    addTodo: (payload) => dispatch(addTodo(payload)),
})

export default connect(null, mapDispatchToProps)(Form);
import TodoList from './TodoList'
import {connect} from "react-redux";
import {showNotification} from "../../store/notify/actions";
import {completedTodo, deleteTodo} from "../../store/todos/actions";
import {selectorTodos} from "../../store/todos/selectors";

const mapStateToProps = (state) => ({
    todos: selectorTodos(state),
})

const mapDispatchToProps = (dispatch) => ({
    showNotify: (payload) => dispatch(showNotification(payload)),
    deleteTodo: (payload) => dispatch(deleteTodo(payload)),
    completedTodo: (payload) => dispatch(completedTodo(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
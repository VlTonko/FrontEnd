import Notification from './Notification'
import {connect} from "react-redux";
import {selectorNotify} from "../../store/notify/selectors";
import {deleteNotification} from "../../store/notify/actions";

const mapStateToProps = (state) => ({
    notify: selectorNotify(state),
})

const mapDispatchToProps = (dispatch) => ({
    clearNotification: (payload) => dispatch(deleteNotification(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification);



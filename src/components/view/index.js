import View from './View'
import { connect } from "react-redux";
import { changeTheme } from '../../store/theme/actions';
import {selectorTheme} from "../../store/theme/selectors";

const mapStateToProps = (state) => ({
    theme: selectorTheme(state),
})

const mapDispatchToProps = (dispatch) => ({
    changeTheme: (payload) => dispatch(changeTheme(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(View)




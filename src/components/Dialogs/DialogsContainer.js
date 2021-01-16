import { connect } from "react-redux";
import { compose } from "redux";
import { addMessage } from "../../redux/dialogs-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import Dialogs from "./Dialogs"

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addDialog: (newMessage) => {
            dispatch(addMessage(newMessage))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


import React from 'react'
import { connect } from "react-redux";
import { setUsers, getUsersThunk, setCurrentPageThunk, followThunk, unfollowThunk } from "../../redux/users-reducer";
import Users from './Users'
import {getCurrentPage, getFollowInProgress, getIsFetching, getPageSize, getTotalUsers, getUsers} from '../../redux/user-selectors'

class UsersContainer extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props || nextState != this.state
    }
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }
    onSetPage = (page) => {
        this.props.setCurrentPageThunk(page, this.props.pageSize);
    }
    render() {
        return <>
                <Users totalUsers={this.props.totalUsers} 
                    pageSize={this.props.pageSize} 
                    currentPage={this.props.currentPage} 
                    onSetPage={this.onSetPage} 
                    users={this.props.users} 
                    isFetching={this.props.isFetching}
                    followInProgress={this.props.followInProgress}
                    followThunk={this.props.followThunk}
                    unfollowThunk={this.props.unfollowThunk}
                    />
                    
            </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsers: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state)
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsers: (totalUsers) => {
//             dispatch(setTotalUsersAC(totalUsers))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {setUsers, getUsersThunk, setCurrentPageThunk, followThunk, unfollowThunk})(UsersContainer)

import React from 'react'
import { connect } from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom'
import Profile from './Profile';
import {setUserProfileThunk, getStatusThunk, updateStatusThunk, savePhotoThunk} from '../../redux/profile-reducer'
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.setUserProfileThunk(userId);
        this.props.getStatusThunk(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps) {
        if(this.props.userId != this.props.match.params.userId) {
            this.refreshProfile();
        }
    }
    render() {
        return  (
            <Profile {...this.props} savePhoto={this.props.savePhotoThunk} isOwner={!this.props.match.params.userId} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusThunk}/>
        )   
    }
        
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    connect(mapStateToProps, {setUserProfileThunk, getStatusThunk, updateStatusThunk, savePhotoThunk}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
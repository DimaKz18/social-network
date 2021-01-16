import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    toggleEditMode = (status) => {
        if(status===true) {
            this.setState({
                editMode: false
            });
            this.props.updateStatus(this.state.status)
        } 
        else {
            this.setState({
                editMode: true
            })
        }
        
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={() => {this.toggleEditMode(this.state.editMode)}} value={this.state.status}></input>
                    </div> : 
                    <div>
                        <span onClick={() => {this.toggleEditMode(this.state.editMode)}}>{this.props.status || "-------"}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
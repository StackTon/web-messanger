import React, { Component } from 'react';
import './createGroup.css';

class CreateGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groupName: ''
        }

        this.onChangeGroupName = this.onChangeGroupName.bind(this);
    }

    onChangeGroupName(e) {
        this.setState({ groupName: e.target.value});
    }

    render() {
        return (
            <>
                <h1>Create Group</h1>
                <label htmlFor="groupName">Group Name</label>
                <input id="groupName" type="text" value={this.state.groupName} onChange={this.onChangeGroupName} />

            </>
        )
    }
}

export default CreateGroup;
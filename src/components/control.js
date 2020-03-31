import React, { Component } from 'react'

class Control extends Component {
    render() {
        console.log("control")
        return (
            <ul>
                <li><a href="/create" onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('create');
                }.bind(this)}>Create</a></li>
                <li><a href="/update" onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('update');
                }.bind(this)}>Update</a></li>
                <input type="submit" value="Delete" onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('delete');
                }.bind(this)}></input>
            </ul>
        )
    }
}

export default Control;
import React, { Component } from 'react'

class Home extends Component {
    render() {

        return (
            <div>
                <a href="/" onClick={function (e) {
                    e.preventDefault();
                    this.props.changePage();
                }.bind(this)} >Home</a>
            </div>
        )
    }
};

export default Home;
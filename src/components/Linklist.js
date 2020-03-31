import React, { Component } from 'react'

class Linklist extends Component {
    render() {
        console.log("Linklist");

        // this.props.onChangePage();
        var data = this.props.data;
        var i = 0;
        var list = [];
        while (i < data.length) {
            list.push(<li key={"key" + data[i].id}>
                <a href={"/content" + data[i].id}
                    data-id={data[i].id}
                    onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id)
                    }.bind(this)}
                >{data[i].title}</a></li>);
            i++;
        }
        return (
            <ul>
                {list}
            </ul>

        )
    }
}

export default Linklist;
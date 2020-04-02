import React, { Component } from 'react'

class Article extends Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps.who === this.props.who) {
    //         console.log(`---> ${nextProps.who} and ${this.props.who}`)
    //         return false
    //     }
    //     return true
    // }
    render() {
        console.log("===> Article is updated !!!")
        var lists = [];
        var data = this.props.who;
        var desc = this.props.desc;
        var i = 0;
        // while (i < data.length) {
        //     lists.push(<div> Hello id : {data[i].id}</div>);
        //     i = i + 1;
        // };
        return (
            <div className="article">
                <div>
                    {lists}
                    {desc}
                </div>
            </div>
        )

    }
}

export default Article;

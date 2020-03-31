import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Article from './components/article';
import Home from './components/home'
import Linklist from './components/Linklist'
import Control from './components/control'
import CreateControl from './components/CreateControl'


class App extends Component {

  constructor(props) {
    super(props);
    this.max_id = 3;
    this.state = {
      mode: "read",
      selected_id: 1,
      who: [
        { First: "Cho", title: "First", id: 0, desc: 'First chance' },
        { Second: "Heo", title: "Second", id: 1, desc: 'Next chance' },
        { Third: "choi", title: "Third", id: 2, desc: 'Last chance' }
      ]
    }
  }
  render() {
    // eslint-disable-next-line no-unused-vars
    var _who, _desc, _content, result = null;

    // state mode를 만들어줌 , each mode can set "who" props in Article tag
    if (this.state.mode === "blank") {
      _who = "";
      _desc = this.state.who.desc;
      _content = <Article who={_who} desc={_desc}></Article>
    }
    else if (this.state.mode === "read") {
      _who = this.state.who;
      var i = 0;
      var data = this.state.who;
      while (i < data.length) {
        if (data[i].id === this.state.selected_id) {
          _desc = data[this.state.selected_id].desc;
          _content = <Article who={_who} desc={_desc}></Article>
          break;
        }
        i++;
      }

    }
    else if (this.state.mode === "create") {
      _content = <CreateControl onSubmit={function (title, desc) {
        var result = this.state.who.concat({ title: title, desc: desc, id: this.max_id }) //need to change id increment
        this.max_id++;
        this.setState(
          { who: result }
        )

      }.bind(this)}></CreateControl>
    }

    return (
      <div className="App">
        <Home changePage={function (e) {
          this.setState({
            mode: "blank"
          });
        }.bind(this)}></Home>
        <Header></Header>
        <Control onChangeMode={function (mode) {
          var _mode = mode;
          this.setState({ mode: _mode })
        }.bind(this)}></Control>
        <Linklist onChangePage={function (id) {
          // debugger;
          this.setState({
            mode: "read",
            selected_id: Number(id)
          });
        }.bind(this)} data={this.state.who}></Linklist>
        {_content}
      </div>
    );
  }
}



export default App;

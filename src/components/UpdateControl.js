import React, { Component } from 'react'

class UpdateControl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.data.title,
            desc: this.props.data.desc,
            id: this.props.data.id
        }
    };

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

    };


    render() {
        console.log("Update Control");


        // submit 을 할때 여기서 만든 this.state를 parameter로 넘겨줘서 그걸 App.js에서 loop문을 사용해서 업데이트 시켜줌 
        // Input 내부에 value 설정시 지금 컴포넌트 내부의 state에서 갖고 와야됨, 상위 props에서 갖고오면 App.js의 현재 state값을 갖고 오기때문에 수정할 수 없음
        return (
            <div>
                <form action="/update_process" method="post"
                    onSubmit={
                        function (e) {
                            e.preventDefault();
                            this.props.onSubmit(
                                this.state.id,
                                this.state.title,
                                this.state.desc
                            )
                        }.bind(this)
                    }
                >
                    <h2>UPDATE</h2>
                    <p>
                        <input type="hidden" name="id" value={this.state.id}></input>
                        <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.handleChange.bind(this)}></input>
                    </p>
                    <p><textarea name="desc" placeholder="description" value={this.state.desc} onChange={this.handleChange.bind(this)}></textarea>
                    </p>
                    <p>
                        <input type="submit" value="SUBMIT"></input>
                    </p>
                </form>
            </div>
        )
    }

}

export default UpdateControl
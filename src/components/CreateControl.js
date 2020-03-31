import React, { Component } from 'react'

class CreateControl extends Component {
    render() {

        return (
            <div>
                <form action="/create_process" method="post"
                    onSubmit={

                        function (e) {
                            // debugger;
                            e.preventDefault();
                            this.props.onSubmit(
                                e.target.title.value,
                                e.target.desc.value
                            );
                        }.bind(this)
                    }>
                    <h2>CREATE FORM</h2>
                    <p>
                        <input type="text" name="title" placeholder="title"></input>
                    </p>
                    <p><textarea name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="SUBMIT"></input>
                    </p>
                </form>
            </div>
        )
    }

}

export default CreateControl
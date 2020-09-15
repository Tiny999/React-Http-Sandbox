import React, { Component } from 'react';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Abbas'
    }

    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', post)
            .then(response => console.log(response));
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(e) => this.setState({content: e.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(e) => this.setState({author: e.target.value})}>
                    <option value="Abbas">Abbas</option>
                    <option value="Ayuba">Ayuba</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;
import React from 'react';
import { init } from 'pell';

import 'pell/dist/pell.css';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            html: null,
            id: null,
         };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        let title = this.state.title;
        let content = this.state.content;
        let html = this.state.html;
        let id = this.state.id;

        if (this.props.post) {
            title = this.props.post.title;
            content = this.props.post.content;
            id = this.props.post.id;

            this.setState({
                title: title,
                html: html,
                id: id
            });
        }

        this.editor = init({
            element: document.getElementById('content-editor'),
            onChange: content => this.setState({ content }),
            actions: ['bold', 'underline', 'italic'],
        })
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        let post = {
            title: this.state.title,
            content: this.state.content,
            id: this.state.id
        }

        this.props.onPostSubmit(post);

        this.setState({
            title: '',
            content: '',
            id: null
        });

        event.preventDefault();
    }

    handleDelete(event) {
        let postId = this.state.id

        if (postId !== null) {
            this.props.onPostDelete(postId);
        }
    }

    handleClose(event) {
        this.props.onClickClose();
    }

    render(){
        const postId = this.state.id;

        return(
            <form className="Editor" onSubmit={this.handleSubmit} >
                <input 
                    name="title"
                    className="Title-editor"
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange} />
                <div 
                    name="content"
                    id="content-editor"
                    className="Content-editor"
                    value={this.state.content} 
                    />
                <div id="html-output"></div>
                <div>
                    <input type="submit" value="Publish" />
                    <span className="Close-editor" onClick={this.handleClose}>Close</span>
                    {postId !== 'unset' ?
                        <span className="Delete-button" onClick={this.handleDelete}>Delete</span>
                        : ''}
                </div>
            </form>
        )
    }

}

export default Editor
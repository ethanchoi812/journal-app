import React from 'react';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            id: 'unset',
         };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let title = this.state.title;
        let content = this.state.content;
        let id = this.state.id;

        if (this.props.post) {
            title = this.props.post.title;
            content = this.props.post.content;
            id = this.props.post.id;

            this.setState({
                title: title,
                content: content,
                id: id
            });
        }
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
            id: 'unset'
        });

        event.preventDefault();
    }

    render(){

        return(
            <form className="Editor" onSubmit={this.handleSubmit} >
                <input 
                    name="title"
                    className="Title-editor"
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange} />
                <textarea 
                    name="content"
                    className="Content-editor" 
                    value={this.state.content} 
                    onChange={this.handleChange} />
                <input type="submit" value="Publish" />
            </form>
        )
    }

}

export default Editor
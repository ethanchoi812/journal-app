import React from 'react';
import Editor from './Editor';

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isEditOn: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState(state => ({
            isEditOn: !state.isEditOn
        }));
    }

    render() {

        const post = this.props.post;
        const editOn = this.state.isEditOn;

        return (
        <div className="Post">
            {editOn ? <Editor /> :
            (
            <div>
                <h1 className="Title">{post.title}</h1>
                <div className="Post-meta">
                    <span className="Date">{post.date}</span>
                </div>
                <div className="Post-content">
                    <p>{post.content}</p>
                </div> 
            </div>
            ) }
            <div>
            <span 
              className="Edit-post"
              onClick={this.handleClick}
              >
                {editOn ? 'Done' : 'Edit'}
            </span>
            </div>
        </div>
        );
    }
}

export default Post;
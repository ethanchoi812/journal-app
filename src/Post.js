import React from 'react';

class Post extends React.Component {
    render() {

        const post = this.props.post;

        return (
        <div className="Post">
            <h1 className="Title">{post.title}</h1>
            <div className="Post-meta">
                <span className="Date">{post.date}</span>
            </div>
            <div className="Post-content">
                <p>{post.content}</p>
            </div>
        </div>
        );
    }
}

export default Post;
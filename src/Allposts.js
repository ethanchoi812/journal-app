import React from 'react';
import Post from './Post';
import content from './database';

class AllPosts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        this.setState({posts:content});
    }

    render(){
        const posts = this.state.posts;
        const content = posts.map((post) =>
            <Post
                key={post.id}
                id={post.id}
                post={post} />
        );

        return(
            <div className="All-posts">
                {content}
            </div>                
        )
    }
}

export default AllPosts;

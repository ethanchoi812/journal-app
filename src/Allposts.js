import React from 'react';

class AllPosts extends React.Component {
    render(){
        return(
            <div className="All-posts">
                <div className="Post">
                <h1 className="Title">My First Post</h1>
                <div className="Post-meta">
                    <span className="Date">Dec 25, 2019</span>
                </div>
                <div className="Post-content">
                    <p>This is my post content!</p>
                </div>
                </div>
            </div>
        )
    }
}

export default AllPosts;

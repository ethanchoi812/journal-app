import React from 'react';
import Editor from './Editor';
import Post from './Post';
import content from './database';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };

    this.postSubmission = this.postSubmission.bind(this);
  }


  componentDidMount() {
    this.setState({ posts: content });
  }

  postSubmission(post) {
    let allposts = this.state.posts;
    let lastPost = allposts[(allposts.length)-1];

    post['id'] = lastPost.id + 1;

    allposts.push(post);
    console.log(post);
    this.setState({ posts: allposts });
  }

  render() {
    const posts = this.state.posts;
    const content = posts.map((post) =>
      <Post
        key={post.id}
        id={post.id}
        post={post} />
    );
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Journal App</h1>
      </header>
      <Editor onPostSubmit={this.postSubmission} />
      <div className="Blog">
        {content}
      </div> 
    </div>
    );
  }
}

export default App;

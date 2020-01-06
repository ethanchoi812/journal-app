import React from 'react';
import Editor from './Editor';
import Post from './Post';
import content from './database';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      //showForm: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.postSubmission = this.postSubmission.bind(this);
  }


  componentDidMount() {
    this.setState({ posts: content });
  }

  handleClick(event) {
    this.setState(state => ({
      showForm: !state.showForm
    }));
  }

  postSubmission(post) {
    let allposts = this.state.posts;
    let lastPost = allposts[(allposts.length)-1];

    if (post['id'] === 'unset') {

      post['id'] = lastPost.id + 1;
      allposts.push(post);

    } else {
      allposts.splice(post.id, 1, post);

    }

    this.setState({ 
      posts: allposts,
     });
  }

  render() {

    const showForm = this.state.showForm;
    const posts = this.state.posts;
    const content = posts.map((post) =>
      <Post
        key={post.id}
        id={post.id}
        post={post}
        onPostEdit={this.postSubmission}
        />
    );
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Journal App</h1>
      </header>
      <button onClick={this.handleClick}>+ New Post</button>
      {showForm ?
        <Editor onPostSubmit={this.postSubmission} /> :
        '' }
      <div className="Blog">
        {content}
      </div> 
    </div>
    );
  }
}

export default App;

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
      showForm: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.postSubmission = this.postSubmission.bind(this);
    this.postEdit = this.postEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.clickClose = this.clickClose.bind(this);
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

    post['id'] = lastPost.id + 1;
    allposts.push(post);

    this.setState({ 
      posts: allposts,
      showForm: !this.state.showForm
     });
  }

  postEdit(post) {
    let allposts = this.state.posts;
 
    allposts.splice(post.id, 1, post);

    this.setState({
      posts: allposts,
    });
  }

  handleDelete(postId){
    let allposts = this.state.posts;

    allposts.splice(postId, 1);

    this.setState({
      posts: allposts,
    });
 }

  clickClose() {
    this.setState({
      showForm: !this.state.showForm
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
        onPostEdit={this.postEdit}
        onDeletePost={this.handleDelete}
        />
    );
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Journal App</h1>
        <button className="New-post-button" onClick={this.handleClick}>+ New Post</button>
      </header>
      {showForm ?
        <Editor 
        onPostSubmit={this.postSubmission} 
        onClickClose={this.clickClose}
        /> :
        '' }
      <div className="Blog">
        {content}
      </div> 
    </div>
    );
  }
}

export default App;

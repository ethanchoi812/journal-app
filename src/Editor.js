import React from 'react';

class Editor extends React.Component {
    render(){
        return(
            <div className="Editor">
                <button>+ New Post</button>
                <input className="Title-editor" type="text" />
                <textarea className="Content-editor"></textarea>
                <button>Publish</button>
            </div>
        )
    }

}

export default Editor
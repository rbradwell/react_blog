import React from 'react';
import {Link, Redirect} from "react-router-dom";

class NewPost extends React.Component {

  constructor(props) {
    super(props);

    if (this.props.selectedItem) {
      const selected = this.props.selectedItem[0];
      this.state = {
        id: selected.id,
        title: selected.title,
        body: selected.body,
        preview: '',
        redirect:''
      };
    } else {
      this.state = {
        title: '',
        body:'',
        preview: '',
        redirect:''
      };
    }
    this.onHandleInputChange = this.handleInputChange.bind(this);
    this.onHandlePublishPost = this.handlePublishPost.bind(this);
    this.onHandleOnPreviewEdit = this.handlePreviewEdit.bind(this);
  }

  resetState = () => {
    this.setState({
      id: '',
      title: '',
      body:'',
      preview: '',
      redirect:''
    });
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ ...this.state, [name]: value});
  }

  handlePublishPost = (event) => {
    event.preventDefault();
    if (this.state.id){
      this.props.onEditPostUpdateSubmit({
            id: this.state.id,
            title: this.state.title,
            body: this.state.body
      });
    } else {
      this.props.onPostSubmit({
        title: this.state.title,
        body: this.state.body
      });
    }
    this.setState({...this.state, 'redirect': '/admin'});
  }

  handlePreviewEdit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const body = this.state.body.replace(String.fromCharCode(10),"<br/>");
    let preview = `&nbsp;&nbsp;<b>Preview:<b>
                    <h3 class='post-title'>${title}</h3>
                    <div class='post-body'>
                    <p>
                    ${body}
                    </p>
                    </div>
    `;
    this.setState({ ...this.state, preview: preview});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect}/>;
    }
    return (
        <React.Fragment>
        <p>{'\u00A0'}{'\u00A0'}<Link to='/admin'>{'<<back'}</Link></p>
        <div className="post">
          <dl id="comments-block">
            <form name="edit_post">
              Title:<br />
              <input type="text" name="title" size="20" value={this.state.title} onChange={this.onHandleInputChange} />
              <textarea name="body" cols="50" rows="15" value={this.state.body} onChange={this.onHandleInputChange} />
              <input type="button" value="Publish" onClick={this.onHandlePublishPost} />
              <input type="button" value="Preview" onClick={this.onHandleOnPreviewEdit} />
            </form>
          </dl>
        </div>
        <div dangerouslySetInnerHTML={{
          __html: this.state.preview
        }}>
        </div>
        </React.Fragment>
    );
  }

}

export default NewPost;
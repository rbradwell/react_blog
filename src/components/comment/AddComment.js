import React from 'react';
import Notifications from "../notifications/Notifications";

class AddComment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        postIndex: props.postIndex,
        notifications:[],
        comment : {
          author: '',
          email: '',
          website: '',
          text:'',
          dt:''
      }
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const monthName = ["January", "February", "March", "April",
          "May", "June", "July", "August", "September",
          "October", "November", "December"];
    const today = new Date();
    const date =  monthName[today.getMonth()] + " " + today.getDay() + "th, " + today.getFullYear();
    this.setState({ ...this.state, comment: { ...this.state.comment, [name]: value, 'dt':date}});
  }

  handleOnClick = (e) => {
    e.preventDefault();
    if (!this.state.comment.author || !this.state.comment.text){
      this.setState({ ...this.state, notifications: ['Name and Comment are required'] });
      return;
    }
    this.props.onCommentSubmit(this.state);
    this.setState({ ...this.state,
        notifications:[],
        comment : {
        author: '',
        email: '',
        website: '',
        text:'',
        dt:''
      }});
  }

  render() {
    return (
      <React.Fragment>
        <Notifications errors={this.state.notifications}/>
        <div className="comment-poster">
          Leave a comment:<br/></div>
        <form name="post_comment">
          <input type="text" name="author" size="20" max="60" value={this.state.comment.author} onChange={this.handleInputChange}/> <small>Name (required)<br/></small>
          <input type="text" name="email" size="20" value={this.state.comment.email} onChange={this.handleInputChange}/> <small>e-mail <br/></small>
          <input type="text" name="website" size="20" value={this.state.comment.website} onChange={this.handleInputChange}/> <small>Website <br/></small>
          <small><p><b>XHTML:</b> You can use these tags: &lt;a href="" title=""&gt; &lt;abbr title=""&gt; &lt;acronym
            title=""&gt; &lt;b&gt; &lt;blockquote
            cite=""&gt; &lt;code&gt; &lt;em&gt; &lt;i&gt; &lt;strike&gt; &lt;strong&gt;</p></small>
          <textarea name="text" cols="50" rows="8" value={this.state.comment.text} onChange={this.handleInputChange}/>
          <input type="button" value="Submit comment" onClick={this.handleOnClick}/>
        </form>
      </React.Fragment>
    )
  };

}

export default AddComment;
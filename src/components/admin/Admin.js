import React from 'react';
import {Link, Redirect, withRouter } from "react-router-dom";
class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect:''
        }
        this.handleOnEditPost = this.handleOnEditPostClick.bind(this);
        this.handleOnDeletePost = this.handleOnDeletePostClick.bind(this);
        this.handleOnNewPost = this.handleOnNewPostClick.bind(this);
    }

    handleOnNewPostClick = (e) => {
        e.preventDefault();
        this.setRedirect('/newpost');
    }

    handleOnEditPostClick = (e) => {
        e.preventDefault();
        this.props.onEditSelectPostSubmit({
            id : e.currentTarget.dataset.id
        });
        this.setRedirect('/editpost');
    }

    handleOnDeletePostClick = (e) => {
        e.preventDefault();
        this.props.onDeletePostSubmit({
            id : e.currentTarget.dataset.id
        });
        this.props.history.push('/admin');
    }

    setRedirect = (val) => {
        this.setState({
            redirect:val
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>;
        }

        const headings = this.props.blog.items.map((i) => {
            return <tr key={i.id}>
                <td>
                    <div className="item-control">
                        <Link className="item-control" to="/admin" data-id={i.id} onClick={this.handleOnEditPost}>
                            <span className="quick-edit-icon">&nbsp;</span>
                        </Link>
                        <Link className="item-control" to="/admin" data-id={i.id} onClick={this.handleOnDeletePost}>
                            <span className="delete-post-icon">&nbsp;</span>
                        </Link>
                    </div>
                </td>
                <td>{i.title}</td>
            </tr>;
        });

        return (
            <React.Fragment>
                <p>{'\u00A0'}{'\u00A0'}<Link to='/'>{'<<back'}</Link></p>
                <div className="post">
                    <input type="button" value="New Post" onClick={this.handleOnNewPost} />
                    <table border="0" >
                        <tbody>{ headings }</tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }

}

export default withRouter(Admin);
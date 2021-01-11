import React from 'react';
import Header from './Header';
import Admin from './components/admin/Admin';
import Posts from './components/post/Posts';
import PostComments from './components/comment/PostComments';
import Login from "./components/login/Login";
import NewPost from "./components/post/NewPost";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Main = (props) => {
    return (
      <div id="content">
        <Header title={props.blog.title} description={props.blog.description} />
        <BrowserRouter>
        <div id="main">
            <div id="main2">
                <div id="main3">
                    <Switch>
                        <Route exact path="/"><Posts blog={props.blog} /></Route>
                        <Route path="/post/:postId/comments"><PostComments onCommentSubmit={props.onCommentSubmit} blog={props.blog} /></Route>
                        <Route path="/login"><Login/></Route>
                        <Route path="/admin"><Admin onEditSelectPostSubmit={props.onEditSelectPostSubmit} onDeletePostSubmit={props.onDeletePostSubmit} blog={props.blog}/></Route>
                        <Route path="/newpost"><NewPost onPostSubmit={props.onPostSubmit}/></Route>
                        <Route path="/editpost"><NewPost selectedItem={props.selectedItem} onPostSubmit={props.onPostSubmit} onEditPostUpdateSubmit={props.onEditPostUpdateSubmit}/></Route>
                    </Switch>
                </div>
            </div>
        </div>
        <Sidebar links={props.blog.links} items={props.blog.items}/>
        </BrowserRouter>
        <Footer/>
      </div>
    );

}

export default Main;

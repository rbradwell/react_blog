import React from 'react';
import Main from './Main';
import './style.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPost:0,
            title: "Ajax Demo Blog",
            description: "Demonstration of an Ajaxian Blog",
            links: [{ id:1, title: "BBC", link: "https://www.bbc.co.uk" },
                { id:2, title: "Google", link: "https://www.google.com" },
                { id:3, title: "Youtube", link: "https://www.youtube.com" }
            ],
            items: [{
                id:1,
                title: "Ajax Pages released!",
                body: "Ajax Pages is a scripting template engine that enables rapid development of Ajax Web-based Applications, just like GMail, Google Maps, Bloglines, A9 (www.a9.com), but without having to deal with complicated and boring browser's DOM (Document Object Model). <br/><br/>Some examples:<br/>Traditional Hello World of the template:<pre>&lt;% var hello = \"Hello World\"; %&gt;<br/>&lt;%=hello%&gt;</pre>A more complicated example:<pre>&lt;% for (i=0; i&lt;10; i++) { %&gt;<br/>Counting &lt;%=i%&gt; &lt;br /&gt;<br/>&lt;% } %&gt;</pre>",
                author: "Gustavo Amigo",
                permalink: "",
                time: "July 20th, 2005",
                comments: [{ id:1, dateTime: "10:53 7/20/2005", author: "Gustavo Amigo", comment: "Your comment won't live for long. This blog does not have a server side" }
                ]
            },
                {
                    id:2,
                    title: "Help wanted!",
                    body: "I need help, this blog doesn't have a server-side. We need a server side. Anyone?",
                    author: "Gustavo Amigo",
                    permalink: "",
                    time: "July 20th, 2005",
                    comments: [{ id: 2, dateTime: "10:53 7/20/2005", author: "Gustavo Amigo", comment: "Your comment won't live for long. This blog does not have a server side" }
                    ]
                }
            ]
        };
    }

    findItemById = (id) => {
        return this.state.items.filter(function(item) { return Number(item.id) === Number(id) });
    }

    findMaxId = (list) => {
        if (!list.length){
            return 1;
        }
        const entryWithMaxId = list.reduce(function(prev, current) {
            return (prev.id > current.id) ? prev : current;
        });
        return entryWithMaxId.id;
    }

    updateCommentsOnItem = (existing, id, newComment) => {
        let items = [];
        existing.forEach((current) => {
            if (current.id === id) {
                const comments = current.comments;
                const maxCommentId = this.findMaxId(comments);
                const updatedComments = [ ...current.comments,  { id:Number(maxCommentId)+1, ...newComment }];
                items.push({ ...current, comments: updatedComments })
            } else {
                items.push({ ...current})
            }
        });
        return items;
    }

    onCommentSubmit = (entry) => {
        const id = entry.postIndex;
        const newComment = {
            dateTime: entry.comment.dt,
            author: entry.comment.author,
            comment: entry.comment.text,
            permalink: entry.comment.website
        }
        const updatedItems = this.updateCommentsOnItem(this.state.items, id, newComment);
        this.setState({ ...this.state , items: updatedItems})
    }

    onPostSubmit = (entry) => {

        const title = entry.title;
        const text = entry.body;
        const id = Number(this.findMaxId(this.state.items)) + 1;
        const body = text.replace(String.fromCharCode(10),"<br/>" );

        const monthName = ["January", "February", "March", "April",
            "May", "June", "July", "August", "September",
            "October", "November", "December"];
        const today = new Date();
        const date =  monthName[today.getMonth()] + " " + today.getDay() + "th, " + today.getFullYear();

        const post = {
            id: id,
            title: title,
            body : body,
            author : "Gustavo Amigo",
            permalink : "perma",
            time: date,
            comments : []} ;

        this.setState({ ...this.state , items: [ ...this.state.items, post ] });

    }

    onEditSelectPostSubmit = (entry) => {
        const postIndex = entry.id;
        this.setState({...this.state, currentPost: postIndex});
    }

    updatePostDetails = (existing, id, title, text) => {
        let items = [];
        existing.forEach((current) => {
            if (Number(current.id) === Number(id)) {
                items.push({ ...current, title: title, body: text })
            } else {
                items.push({ ...current })
            }
        });
        return items;
    }

    onEditPostUpdateSubmit = (entry) => {
        const title = entry.title;
        const text = entry.body;
        const id = entry.id;
        const updatedItems = this.updatePostDetails(this.state.items, id, title, text);
        this.setState({...this.state, items: updatedItems});
    }

    deletePostDetails = (existing, id) => {
        let items = [];
        existing.forEach((current) => {
            if (Number(current.id) !== Number(id)) {
                items.push({ ...current });
            }
        });
        return items;
    }

    onDeletePostSubmit = (entry) => {
        const postIndex = entry.id;
        const updatedItems = this.deletePostDetails(this.state.items, postIndex);
        this.setState({...this.state, items: updatedItems});
    }

    render() {
        let selectedItem = null;
        if (this.state.currentPost) {
            selectedItem = this.findItemById(this.state.currentPost);
        }
        return (
            <Main blog={this.state}
                  selectedItem={selectedItem}
                  onCommentSubmit={this.onCommentSubmit}
                  onPostSubmit={this.onPostSubmit}
                  onEditSelectPostSubmit={this.onEditSelectPostSubmit}
                  onEditPostUpdateSubmit={this.onEditPostUpdateSubmit}
                  onDeletePostSubmit={this.onDeletePostSubmit}
            />
        );
    }

}

export default App;
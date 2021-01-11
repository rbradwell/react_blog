# Ajax Pages - Created With React.js

This project is a rewrite of the [Ajax Pages](http://ajax-pages.sourceforge.net/) Blog demonstration project using React.js.

Ajax pages was a forerunner to modern front-end templating solutions, used to implement Single Page Applications (SPA), in an 
era when frontend development was far less mature.

It was felt that reworking the Ajax Pages Blog project would provide a good way to demonstrate the basics of the React 
framework library within a small size project.

It should be noted that as a first effort this project has remained as faithful as possible to the initial code base.  
For example, the HTML presented as part of the project is showing its age.  Future effort would be directed to reworking the layout etc in 
Bootstap.  Even the use of modern CSS to present rounded corners etc would be appreciated.

That's an exercise for another time however ... :).

# Prerequisites 

It is assumed that a modern version of node is installed on your machine.  The software was developer using version 14.1.0.
# Getting Started

## Installation/Running

In the project directory, you can run:

### `npm install`

to download and install all third-party dependencies.

The command

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Using the application

It should be noted that the username/password for the admin section of the app is admin/admin.  
DISCLAIMER: Obviously this application is simply a demonstration and this does not represent a serious authentication 
mechanism etc to be used in production software.

# TODO

- Rework CSS to modernise the application e.g. rework the layout to present a modern, reactive UI.
- Implement a "backend" i.e. a set of REST services to allow persistence of the blog.
- Rework using more advanced React concepts such as stateless components, redux, hooks etc.
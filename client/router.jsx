import React from 'react'
import {mount} from 'react-mounter'

import MainLayout from './layouts/main.jsx'
import PostList from './containers/post_list'
import PostPage from './containers/post_page'
import BlogTitles from './containers/blog_titles'

/*
FlowRouter.route("/", {
  name: "home",
  action() {
    mount(BlogLayout, {
      content: <PostList />
    })
  }
})

FlowRouter.route('/post/:_id', {
  name: 'post',
  action(params) {
    mount(BlogLayout, {
      content: <PostPage _id={params._id} />
    })
  }
})
*/

FlowRouter.route('/', {
  name: "home",
  action() {
    mount(MainLayout, {
      content: <BlogTitlesContainer />
    });
  }
});

FlowRouter.route('/post/:postId', {
  action(params) {
    mount(MainLayout, {
      content: <BlogPostContainer {...params} />
    });
  }
});

FlowRouter.route('/add-post', {
  action() {
    mount(MainLayout, {
      content: <AddBlogPostContainer />
    });
  }
});


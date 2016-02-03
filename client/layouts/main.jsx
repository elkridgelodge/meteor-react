import BlogTitlesContainer from '../containers/blog_titles'
import React from 'react'

const resetBlog = () => {
  BlogSchema.mutate(`
    {reset}
  `)
  .then(() => {
    BlogSchema.refetchQuery(BlogTitlesContainer.query);
  })
  .catch(err =>{
    alert(err.message);
  });
};

MainLayout = ({content}) => (
  <div>
    <header>
      <h1>My Blog Post</h1>
      <div className="navigation">
        <a href='/'>Home</a>
        <a href='/add-post'>Add Post</a>
        <button onClick={resetBlog}>Reset Blog</button>
      </div>
    </header>
    <div>
      {content}
    </div>
    <footer>
      This blog is powered by GraphQL, Lokka & Meteor
    </footer>
  </div>
);
MainLayout.displayName = 'MainLayout';


export default MainLayout

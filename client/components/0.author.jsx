import BlogSchema from '../lib/0.start.js'
import React from 'react'

const Author = ({author}) => (
  <span>
    {author.name}
  </span>
);
Author.displayName = 'Author';

Author.fragment = BlogSchema.createFragment(`
  fragment on Author {
    _id,
    name
  }
`);

export default Author

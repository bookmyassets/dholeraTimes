// sanity/schemaTypes/index.js
import post from './post'; // Import the post schema
import author from './author'; // Import the author schema
import category from './category'; // Import the category schema
import blockContent from './blockContent';
import contact from './contact'; // Import the blockContent schema
import event from './event';

export const schema = {
  types: [post, author, category, blockContent, contact, event], // Add all schemas here
};
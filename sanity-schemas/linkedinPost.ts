import type { Rule } from 'sanity'

const linkedinPost = {
  name: 'linkedinPost',
  title: 'LinkedIn Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Post Content',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
      description: 'The main text content of the LinkedIn post'
    },
    {
      name: 'postUrl',
      title: 'LinkedIn Post URL',
      type: 'url',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
    },
    {
        name: 'date',
        title: 'Post Date',
        type: 'date'
    },
    {
      name: 'isActive',
      title: 'Show on Homepage',
      type: 'boolean',
      initialValue: true,
    }
  ],
};

export default linkedinPost;

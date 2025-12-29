import type { Rule } from 'sanity'

const keyword = {
  name: 'keyword',
  title: 'Keyword',
  type: 'document',
  fields: [
    {
      name: 'keyword',
      title: 'Keyword',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text',
      rows: 2,
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    },
  ],
}

export default keyword

import type { Rule } from 'sanity'

const productUpdate = {
  name: 'productUpdate',
  title: 'Product Update',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Feature', value: 'Feature' },
          { title: 'Improvement', value: 'Improvement' },
          { title: 'Fix', value: 'Fix' },
          { title: 'Announcement', value: 'Announcement' },
          { title: 'Product', value: 'Product' },
        ],
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'version',
      title: 'Version',
      type: 'string',
      description: 'e.g., v2.1.0 (Optional)',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
}

export default productUpdate

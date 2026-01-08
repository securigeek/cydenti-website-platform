import type { Rule } from 'sanity'

const resource = {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Video', value: 'video' },
          { title: 'Whitepaper', value: 'whitepaper' },
          { title: 'Webinar', value: 'webinar' },
        ],
        layout: 'radio'
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'url',
      title: 'External URL',
      type: 'url',
      description: 'For YouTube videos or external whitepapers/webinars',
    },
    {
      name: 'file',
      title: 'File Download',
      type: 'file',
      description: 'For PDF whitepapers',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Show this resource in featured sections',
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
      media: 'thumbnail',
    },
  },
}

export default resource

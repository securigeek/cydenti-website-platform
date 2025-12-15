export default {
  name: 'announcement',
  title: 'Announcement Strip',
  type: 'document',
  fields: [
    {
      name: 'message',
      title: 'Message',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
    },
    {
      name: 'linkUrl',
      title: 'Link URL',
      type: 'url',
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      initialValue: '#0A4CFF',
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      initialValue: '#FFFFFF',
    },
  ],
};

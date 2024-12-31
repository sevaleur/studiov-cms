export default {
  name: 'work',
  type: 'document', 
  title: 'Work', 
  fields: [
    {
      name: 'title', 
      type: 'string', 
      title: 'Titel'
    }, 
    {
      name: 'projects',
      type: 'array',
      title: 'Work links',
      validation: Rule => Rule.min(1).unique(),
      of: [
        {
          name: 'link',
          type: 'reference',
          title: 'Work link',
          to: [
            {
              type: 'project'
            },
          ]
        },
      ],
      options: {
        layout: 'list',
      },
    },
  ]
}
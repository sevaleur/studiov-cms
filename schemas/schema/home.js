export default {
  name: 'home',
  type: 'document', 
  title: 'Home', 
  fields: [
    {
      name: 'title', 
      type: 'string', 
      title: 'Titel'
    }, 
    {
      name: 'showcase',
      type: 'array',
      title: 'Showcase',
      validation: Rule => Rule.min(4).max(6).unique(),
      of: [
        {
          name: 'link',
          type: 'reference',
          title: 'Showcase link',
          to: [
            {
              type: 'selected'
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
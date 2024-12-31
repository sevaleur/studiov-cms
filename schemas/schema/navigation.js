export default {
  name: 'navigation', 
  type: 'document', 
  title: 'Navigation', 
  fields: [
    {
      name: 'title', 
      type: 'string', 
      title: 'Titel'
    }, 
    {
      name: 'contact', 
      type: 'object', 
      title: 'Contact info', 
      fields: [
        {
          name: 'street', 
          type: 'string', 
          title: 'Street'
        }, 
        {
          name: 'city', 
          type: 'string', 
          title: 'City'
        }, 
        {
          name: 'email', 
          type: 'string', 
          title: 'Email', 
          validation: Rule => Rule.email()
        }, 
        {
          name: 'phone', 
          type: 'number', 
          title: 'Phone Number', 
        }, 
      ]
    },
    {
      name: 'linkLeft', 
      type: 'reference',
      title: 'Link left', 
      to: [ 
        { 
          type: 'work'
        },
        { 
          type: 'info' 
        },
      ]
    }, 
    {
      name: 'linkRight', 
      type: 'reference',
      title: 'Link right', 
      to: [ 
        { 
          type: 'work'
        },
        { 
          type: 'info' 
        },
      ]
    }, 
  ]
}
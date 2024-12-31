export default {
  name: 'info',
  type: 'document', 
  title: 'Info', 
  fields: [
    {
      name: 'title', 
      type: 'string', 
      title: 'Titel'
    }, 
    {
      name: 'subtitle', 
      type: 'text', 
      title: 'subtitle'
    }, 
    {
      name: 'desc', 
      type: 'text', 
      title: 'Description'
    },
    {
      name: 'image', 
      type: 'image', 
      title: 'image', 
      fields: [
        {
          name: 'alt', 
          type: 'string', 
          title: 'alternative text'
        }
      ]
    }
  ]
}
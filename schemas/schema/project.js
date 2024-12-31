export default {
  name: 'project',
  type: 'document', 
  title: 'Project', 
  fields: [
    {
      name: 'title', 
      type: 'string', 
      title: 'Title'
    }, 
    {
      name: 'type', 
      type: 'string', 
      title: 'Type'
    },
    {
      name: 'location', 
      type: 'string', 
      title: 'Location',
      rows: 3
    }, 
    {
      name: 'area', 
      type: 'string', 
      title: 'Area'
    }, 
    {
      name: 'completion', 
      type: 'string', 
      title: 'Year of completion'
    },
    {
      name: 'description', 
      type: 'text', 
      title: 'Description'
    }, 
    {
      name: 'image', 
      type: 'image', 
      title: 'Big image', 
      fields: [
        {
          name: 'alt', 
          type: 'string', 
          title: 'Alternative text'
        }
      ]
    },
    {
      name: 'smImage', 
      type: 'image', 
      title: 'Small image', 
      fields: [
        {
          name: 'alt', 
          type: 'string', 
          title: 'Alternative text'
        }
      ]
    }
  ]
}
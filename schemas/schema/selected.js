export default {
  name: 'selected', 
  type: 'document', 
  title: 'Selected Work', 
  fields: [
    {
      name: 'slug', 
      type: 'slug', 
      title: 'Slug', 
      description: 'Add a custom URL'
    },
    {
      name: 'name', 
      type: 'string', 
      title: 'Name'
    },
    {
      name: 'title', 
      type: 'text', 
      title: 'Title', 
      rows: 4
    }, 
    {
      name: 'description', 
      type: 'text', 
      title: 'Article'
    }, 
    {
      name: 'linkText', 
      type: 'text', 
      title: 'Article link text', 
    },
    {
      name: 'link', 
      type: 'url', 
      title: 'Article link url'
    },
    {
      name: 'smImage', 
      type: 'image', 
      title: 'Small Image', 
      fields: [
        {
          name: 'alt', 
          type: 'string', 
          title: 'Alternative text'
        }
      ]
    },
    {
      name: 'image', 
      type: 'image', 
      title: 'Large Image', 
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
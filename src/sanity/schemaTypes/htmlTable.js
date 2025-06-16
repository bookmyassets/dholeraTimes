// schemas/htmlTable.js
export default {
  name: 'htmlTable',
  title: 'HTML Table',
  type: 'object',
  fields: [
    {
      name: 'html',
      title: 'HTML Code',
      type: 'text',
      rows: 10,
      description: 'Paste your raw HTML table code here',
    },
  ],
  preview: {
    select: {
      html: 'html'
    },
    prepare(selection) {
      const {html} = selection
      return {
        title: 'HTML Table',
        subtitle: html ? html.substring(0, 30) + '...' : 'No HTML provided'
      }
    }
  }
}
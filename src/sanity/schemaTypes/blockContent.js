const TextColorDecorator = (props) => (
  <span style={{ color: props.value?.color || "inherit" }}>
    {props.children}
  </span>
);

const TextBackgroundDecorator = (props) => (
  <span style={{ backgroundColor: props.value?.color || "transparent" }}>
    {props.children}
  </span>
);

export default {
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
        { title: "Quote", value: "blockquote" },
        { title: "Left Align", value: "leftAlign" },
        { title: "Center Align", value: "centerAlign" },
        { title: "Right Align", value: "rightAlign" },
        { title: "Justify", value: "justify" },
        { title: "Small", value: "small" },
        { title: "Medium", value: "medium" },
        { title: "Large", value: "large" },
        { title: "Extra Large", value: "xlarge" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Code", value: "code" },
          { title: "Strike-through", value: "strike-through" },
          {
            title: "Text Color",
            value: "textColor",
            component: TextColorDecorator,
          },
          {
            title: "Text Background",
            value: "textBackground",
            component: TextBackgroundDecorator,
          },
        ],
        annotations: [
          {
            name: "link",
            title: "Link",
            type: "object",
            fields: [
              {
                name: "href",
                title: "URL",
                type: "url",
                validation: Rule => Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel']
                })
              },
              {
                name: "anchor",
                title: "Anchor link (e.g., #section-id)",
                type: "string",
                description: "Link to a section on the same page"
              }
            ]
          },
          {
            name: "button",
            title: "Button",
            type: "object",
            fields: [
              {
                name: "text",
                title: "Button Text",
                type: "string",
              },
              {
                name: "href",
                title: "URL",
                type: "url",
              },
              {
                name: "style",
                title: "Button Style",
                type: "string",
                options: {
                  list: [
                    { title: "Primary", value: "primary" },
                    { title: "Secondary", value: "secondary" },
                    { title: "Outline", value: "outline" },
                  ],
                },
              },
            ],
          },
        ],
      },
      options: {
        spellCheck: true,
      },
    },
    {
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text'
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption'
        },
        {
          name: 'url',
          type: 'url',
          title: 'Link URL'
        }
      ]
    },
    {
      type: "code",
      title: "Code Block",
      options: {
        language: "javascript",
        languageAlternatives: [
          { title: "JavaScript", value: "javascript" },
          { title: "HTML", value: "html" },
          { title: "CSS", value: "css" },
        ],
        withFilename: true,
      },
    },
    {
      type: "table",
      title: "Table",
      options: {
        spellCheck: true,
      },
      fields: [
        {
          name: 'rows',
          type: 'array',
          of: [
            {
              type: 'array',
              of: [
                {
                  type: 'block',
                  marks: {
                    annotations: [
                      {
                        name: "link",
                        type: "object",
                        title: "Link",
                        fields: [
                          {
                            name: "href",
                            type: "url",
                            title: "URL"
                          },
                          {
                            name: "anchor",
                            title: "Anchor link (e.g., #section-id)",
                            type: "string"
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    // Table of Contents block
    {
      type: "object",
      name: "toc",
      title: "Table of Contents",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
          initialValue: "Table of Contents"
        },
        {
          name: "depth",
          type: "number",
          title: "Heading Depth",
          description: "Maximum heading level to include (e.g., 2 for h1 and h2)",
          initialValue: 2,
          options: {
            list: [1, 2, 3, 4, 5, 6]
          }
        }
      ],
      preview: {
        select: {
          title: "title",
          depth: "depth"
        },
        prepare({ title, depth }) {
          return {
            title: title || "Table of Contents",
            subtitle: `Includes headings up to h${depth}`
          }
        }
      }
    },
    // Mux video integration
    {
      type: "mux.video",
      title: "Mux Video",
      options: {
        hotspot: true
      }
    }
  ],
};
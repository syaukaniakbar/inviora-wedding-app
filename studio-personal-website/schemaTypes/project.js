import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'stacks',
      title: 'Stacks',
      type: 'array',
      of: [{type: 'reference', to: {type: 'stack'}}],
    }),
    defineField({
      name: 'url',
      title: 'Project URL',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      stacks: 'stacks', // ambil array of references
      url: 'url',
    },
    prepare({title, media, stacks, url}) {
      return {
        title,
        media,
        subtitle: [
          url ? `🔗 ${url}` : null,
          stacks && stacks.length > 0 ? stacks.map((stack) => stack.title).join(', ') : 'No stacks',
        ]
          .filter(Boolean) // buang null
          .join(' | '),
      }
    },
  },
})

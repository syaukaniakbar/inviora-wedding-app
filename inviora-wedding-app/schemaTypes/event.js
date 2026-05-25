import { defineField, defineType } from 'sanity'

export const commentType = defineType({
    name: 'comment',
    title: 'Comments',
    type: 'document',

    fields: [
        defineField({
            name: 'name',
            title: 'Guest Name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: 'message',
            title: 'Message',
            type: 'text',
            rows: 4,
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: 'attendance',
            title: 'Attendance',
            type: 'string',
            options: {
                list: [
                    { title: 'Hadir', value: 'hadir' },
                    { title: 'Tidak Hadir', value: 'tidak_hadir' },
                ],
            },
        }),

        // REPLY SYSTEM
        defineField({
            name: 'parentId',
            title: 'Parent Comment ID',
            type: 'string',
        }),

        defineField({
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
})
import { field, member, type } from '../../helpers';

export default type.document({
  name: 'characterClass',
  title: 'Class',
  fields: [
    field.string({
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    field.array({
      name: 'availableSubclasses',
      title: 'Available Subclasses',
      of: [
        member(
          field.reference({
            name: 'characterSubclass',
            title: 'Subclass',
            to: [{ type: 'characterSubclass' }],
          }),
        ),
      ],
      validation: (Rule) => Rule.unique(),
    }),
  ],
});

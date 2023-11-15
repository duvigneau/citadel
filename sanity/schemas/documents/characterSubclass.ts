import { field, type } from '../../helpers';

export default type.document({
  name: 'characterSubclass',
  title: 'Subclass',
  fields: [
    field.string({
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
  ],
});

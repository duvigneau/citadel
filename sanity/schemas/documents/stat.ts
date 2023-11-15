import { field, type } from '../../helpers';

export default type.document({
  name: 'stat',
  title: 'Stat',
  fields: [
    field.string({
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    field.string({
      name: 'description',
      title: 'Description',
    }),
  ],
});

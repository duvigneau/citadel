import { field, type } from '../helpers';

export default type.document({
  name: 'character',
  title: 'Character',
  fields: [
    field.string({
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
  ],
});

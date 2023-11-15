import { field, member, type } from '../../helpers';
import statWithValue from '../objects/statWithValue';
import classWithSubclass from '../objects/classWithSubclass';

export default type.document({
  name: 'character',
  title: 'Character',
  fields: [
    field.string({
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    classWithSubclass,
    field.array({
      name: 'primaryStats',
      title: 'Primary Stats',
      of: [member(statWithValue)],
      validation: (Rule) => Rule.unique(),
    }),
  ],
});

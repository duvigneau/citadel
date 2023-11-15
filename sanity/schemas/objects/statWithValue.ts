import { field } from '../../helpers';

export default field.object({
  name: 'statWithValue',
  title: 'Stat',
  fields: [
    field.reference({
      name: 'stat',
      title: 'Stat',
      to: [{ type: 'stat' }],
    }),
    field.number({
      name: 'value',
      title: 'Value',
      initialValue: 1,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      statName: 'stat.name',
      value: 'value',
    },
    prepare({ statName, value }) {
      return {
        title: `${statName} (${value})`,
      };
    },
  },
});

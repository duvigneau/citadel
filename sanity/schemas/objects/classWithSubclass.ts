import { field } from '../../helpers';

export default field.object({
  name: 'classWithSubclass',
  title: 'Class & Subclass',
  fields: [
    field.reference({
      name: 'characterClass',
      title: 'Class',
      to: [{ type: 'characterClass' }],
    }),
    field.reference({
      name: 'characterSubclass',
      title: 'Subclass',
      to: [{ type: 'characterSubclass' }],
      hidden: ({ parent }) => !parent || !parent.characterClass,
    }),
  ],
  preview: {
    select: {
      characterClass: 'characterClass.name',
      characterSubclass: 'characterSubclass.name',
    },
    prepare({ characterClass, characterSubclass }) {
      return {
        title: `${characterClass} (${characterSubclass})`,
      };
    },
  },
});

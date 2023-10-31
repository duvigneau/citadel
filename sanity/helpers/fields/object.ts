import { ObjectDefinition, defineField } from 'sanity';

export type ObjectProps = Omit<ObjectDefinition, 'type'>;

export function object(props: ObjectProps) {
  return defineField({ type: 'object', ...props });
}

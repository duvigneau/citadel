import { ObjectDefinition, defineType } from 'sanity';

export type ObjectProps = Omit<ObjectDefinition, 'type'>;

export function object(props: ObjectProps) {
  return defineType({ type: 'object', ...props });
}

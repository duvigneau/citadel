import { ArrayDefinition, defineField } from 'sanity';

export type ArrayProps = Omit<ArrayDefinition, 'type'>;

export function array(props: ArrayProps) {
  return defineField({ type: 'array', ...props });
}

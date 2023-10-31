import { StringDefinition, defineField } from 'sanity';

export type StringProps = Omit<StringDefinition, 'type'>;

export function string(props: StringProps) {
  return defineField({ type: 'string', ...props });
}

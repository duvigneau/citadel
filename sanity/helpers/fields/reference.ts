import { ReferenceDefinition, defineField } from 'sanity';

export type ReferenceProps = Omit<ReferenceDefinition, 'type'>;

export function reference(props: ReferenceProps) {
  return defineField({ type: 'reference', ...props });
}

import { NumberDefinition, defineField } from 'sanity';

export type NumberProps = Omit<NumberDefinition, 'type'>;

export function number(props: NumberProps) {
  return defineField({ type: 'number', ...props });
}

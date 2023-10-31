import { TextDefinition, defineField } from 'sanity';

export type TextProps = Omit<TextDefinition, 'type'>;

export function text(props: TextProps) {
  return defineField({ type: 'text', ...props });
}

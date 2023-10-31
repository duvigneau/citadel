import { BooleanDefinition, defineField } from 'sanity';

export type BooleanProps = Omit<BooleanDefinition, 'type'>;

export function boolean(props: BooleanProps) {
  return defineField({ type: 'boolean', ...props });
}

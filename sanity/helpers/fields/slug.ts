import { SlugDefinition, defineField } from 'sanity';

export type SlugProps = Omit<SlugDefinition, 'type'>;

export function slug(props: SlugProps) {
  return defineField({ type: 'slug', ...props });
}

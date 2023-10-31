import { ImageDefinition, defineField } from 'sanity';

export type ImageProps = Omit<ImageDefinition, 'type'>;

export function image(props: ImageProps) {
  return defineField({ type: 'image', ...props });
}

import { UrlDefinition, defineField } from 'sanity';

export type UrlProps = Omit<UrlDefinition, 'type'>;

export function url(props: UrlProps) {
  return defineField({ type: 'url', ...props });
}

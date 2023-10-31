import { defineType, DocumentDefinition } from 'sanity';

export type DocumentProps = Omit<DocumentDefinition, 'type'>;

export function document(props: DocumentProps) {
  return defineType({ type: 'document', ...props });
}

import { defineType } from 'sanity';
import { document } from './types/document';
import { object } from './types/object';

export function type(...parameters: Parameters<typeof defineType>) {
  return defineType(...parameters);
}

type.document = document;
type.object = object;

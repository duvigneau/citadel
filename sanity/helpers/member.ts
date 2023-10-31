import { defineArrayMember } from 'sanity';

export function member(...parameters: Parameters<typeof defineArrayMember>) {
  return defineArrayMember(...parameters);
}

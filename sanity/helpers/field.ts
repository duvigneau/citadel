import { defineField } from 'sanity';
import { array } from './fields/array';
import { boolean } from './fields/boolean';
import { image } from './fields/image';
import { number } from './fields/number';
import { object } from './fields/object';
import { reference } from './fields/reference';
import { slug } from './fields/slug';
import { string } from './fields/string';
import { text } from './fields/text';
import { url } from './fields/url';

export function field(...parameters: Parameters<typeof defineField>) {
  return defineField(...parameters);
}

field.array = array;
field.boolean = boolean;
field.image = image;
field.number = number;
field.object = object;
field.reference = reference;
field.slug = slug;
field.string = string;
field.text = text;
field.url = url;

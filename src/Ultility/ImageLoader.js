import { URL } from './Variable';
export const imageLoader = ({ src, width, quality }) => {
  return `${URL}${src}?w=${width}&q=${quality || 75}`;
};

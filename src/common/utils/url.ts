/**
 * Convert a string to search query, used to
 * perform searches for search engines (Google, Duckduckgo,...)
 */
export const stringToQuery = (str: string) => {
  return encodeURI(str.trim().replaceAll(' ', '+'));
};

export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

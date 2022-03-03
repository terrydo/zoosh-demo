import { MovieSocialInfo } from 'src/common/models/MovieSocialInfo';

export const fromDuckDuckGoApi = (ddgApiResponse: any): MovieSocialInfo => {
  const maybeImdbId = ddgApiResponse.Infobox?.content?.find(
    (record) => record.data_type === 'imdb_id'
  )?.value;

  return {
    wikiLink: ddgApiResponse.AbstractURL,
    summary: ddgApiResponse.AbstractText,
    imdbLink: maybeImdbId
      ? `https://www.imdb.com/title/${maybeImdbId}`
      : undefined,
  };
};

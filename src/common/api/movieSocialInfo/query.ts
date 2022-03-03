import axios from 'axios';
import { stringToQuery } from 'src/common/utils/url';

export const getMovieSocialByName = (name: string) => {
  return axios.get(
    `https://api.codetabs.com/v1/proxy/?quest=api.duckduckgo.com?q=${stringToQuery(
      name
    )}&format=json`
  );
};

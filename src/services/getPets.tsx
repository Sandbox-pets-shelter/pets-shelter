import { Category, Character, Gender, Med, Wool } from 'types/IPet';

import api from './interceptors';

const getPets = async (
  id: string,
  page?: number,
  size?: number,
  gender?: Gender,
  category?: Category,
  character?: Character,
  med?: Med,
  wool?: Wool
) => {
  api.interceptors.request.use((config) => {
    if (id !== '') {
      config.url = `${config.url}/${id}`;
    }
    return config;
  });

  const { data } = await api('pet', {
    params: {
      page: page,
      size: size,
      gender: gender,
      category: category,
      character: character,
      med: med,
      wool: wool
    }
  });
  return data;
};
export default getPets;

import api from './interceptors';

const getStories = async (page: number, size: number | undefined) => {
  const { data } = await api('story', {
    params: {
      page: page,
      size: size
    }
  });
  return data;
};
export default getStories;

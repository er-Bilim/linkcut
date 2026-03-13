import axiosApi from '../../../apiConfig/axiosApi';
import type { ILink, ISourceLink } from '../types/link.types';

export const postLink = async (link: ISourceLink): Promise<ILink> => {
  const { data } = await axiosApi.post(`/links/`, {
    originalUrl: link.originalUrl,
  });
  return data;
};
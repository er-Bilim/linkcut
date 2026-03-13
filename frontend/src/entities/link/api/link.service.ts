import axiosApi from '../../../apiConfig/axiosApi';
import type { ISourceLink } from '../types/link.types';

export const postLink = async (data: ISourceLink): Promise<void> => {
  await axiosApi.post(`/links/`, { originalUrl: data.originalUrl });
};

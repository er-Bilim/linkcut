import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { postLink } from '../api/link.service';
import type { ILink, ISourceLink } from '../types/link.types';

interface LinkState {
  linkData: ILink | null;
  loading: boolean;
  postLink: (data: ISourceLink) => Promise<ILink>;
}

export const useLinkStore = create<LinkState>()(
  devtools(
    (set) => ({
      linkData: null,
      loading: false,
      postLink: async (data) => {
        try {
          const linkData = await postLink(data);
          set({
            loading: true,
            linkData,
          });
        } catch (error) {
          console.error(error);
        } finally {
          set({
            loading: false,
          });
        }
      },
    }),
    {
      name: 'linkStore',
      enabled: true,
    },
  ),
);

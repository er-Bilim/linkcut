import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { postLink } from '../api/link.service';
import type { ISourceLink } from '../types/link.types';

interface LinkState {
  loading: boolean;
  postLink: (link: ISourceLink) => Promise<void>;
}

export const useLinkStore = create<LinkState>()(
  devtools(
    (set) => ({
      postLink: async (link) => {
        try {
          set({
            loading: true,
          });
          await postLink(link);
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

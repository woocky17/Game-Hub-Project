import { create } from "zustand";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";

interface GameQuery {
  genre?: Genre | null;
  platform?: Platform | null;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrders: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrders) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrders } })),
}));

export default useGameQueryStore;

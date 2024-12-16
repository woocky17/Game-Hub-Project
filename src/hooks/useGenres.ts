import genre from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ data: genre, isLoading: null, error: null });

export default useGenres;

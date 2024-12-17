import { Heading, HStack, Image, List } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import GenreContainer from "./GenreContainer";
import { Button } from "./ui/button";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const selectGenre = useGameQueryStore((s) => s.gameQuery.genre);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  if (error) return null;

  //   if (isLoading) return <Spinner />;
  return (
    <>
      <Heading marginBottom={"5 "}>Genre</Heading>
      <List.Root>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GenreContainer key={skeleton}>
              <GenreSkeleton />
            </GenreContainer>
          ))}
        {data.map((genre) => (
          <GenreContainer key={genre.id}>
            <List.Item>
              <HStack>
                <Image
                  boxSize={"32px"}
                  borderRadius={8}
                  objectFit={"cover"}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  fontWeight={genre.id === selectGenre?.id ? "bold" : "normal"}
                  onClick={() => setGenreId(genre.id)}
                  variant={"ghost"}
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  fontSize={"lg"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </List.Item>
          </GenreContainer>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;

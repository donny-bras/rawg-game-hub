import {
  Alert,
  AlertIcon,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

import getCroppedImageUrl from "../services/image-url";

type GenresListProps = {
  selectedGenreId?: number;
  onSelectGenre: (genre: Genre) => void;
};

const GenresList = ({ selectedGenreId, onSelectGenre }: GenresListProps) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) {
    return (
      <Center alignItems={"center"} justifyContent={"center"}>
        <Spinner speed="0.65s" textAlign="center" />
      </Center>
    );
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error loading genres: {error.message}
      </Alert>
    );
  }

  return (
    <>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>
      <List spacing={3}>
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                textAlign="left"
                whiteSpace="normal"
                variant="link"
                fontSize="lg"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;

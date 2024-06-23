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
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
};

const GenresList = ({ selectedGenre, onSelectGenre }: GenresListProps) => {
  const { data: genres, error, status } = useGenres();

  if (status === "loading") {
    return (
      <Center alignItems={"center"} justifyContent={"center"}>
        <Spinner speed="0.65s" textAlign="center" />
      </Center>
    );
  }

  if (status === "fail") {
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error loading genres: {error}
      </Alert>
    );
  }

  return (
    <>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>
      <List spacing={3}>
        {genres.map((genre) => (
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
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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

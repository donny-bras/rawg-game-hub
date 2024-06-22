import {
  Alert,
  AlertIcon,
  Button,
  Center,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGeneres";

import getCroppedImageUrl from "../services/image-url";

type GenresListProps = {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
};

const GenresList = ({ selectedGenre, onSelectGenre }: GenresListProps) => {
  const { data: genres, error, isLoading } = useGenres();

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
        There was an error loading genres
      </Alert>
    );
  }

  return (
    <List spacing={3}>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
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
  );
};

export default GenresList;

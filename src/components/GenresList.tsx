import {
  Alert,
  AlertIcon,
  Center,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

import getCroppedImageUrl from "../services/image-url";
import useGenres from "../hooks/useGeneres";

const GenresList = () => {
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
            <Text fontSize="lg" fontWeight={600}>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;

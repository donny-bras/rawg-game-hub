import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useRef } from "react";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((store) => store.setSearchText);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputRef.current) {
      setSearchText(inputRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch />
        </InputLeftElement>
        <Input
          variant="filled"
          borderRadius={20}
          placeholder="Search games..."
          ref={inputRef}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

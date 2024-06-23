import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

type SearchInputProps = {
  onSearch: (searchText: string) => void;
};

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputRef.current) {
      onSearch(inputRef.current.value);
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

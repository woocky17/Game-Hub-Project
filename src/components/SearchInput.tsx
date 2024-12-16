import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup width={"full"} startElement={<BsSearch />}>
        <Input
          ref={ref}
          size={"lg"}
          borderRadius={20}
          placeholder="Search games..."
          variant={"subtle"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

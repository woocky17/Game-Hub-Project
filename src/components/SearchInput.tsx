import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
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

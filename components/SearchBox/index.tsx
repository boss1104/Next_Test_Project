import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";

const SearchBox = () => {
  return (
    <InputGroup>
      <InputLeftElement width="15.5rem">
        <Select variant="filled">
          <option value="https://www.amazon.com">https://www.amazon.com</option>
          <option value="https://www.target.com">https://www.target.com</option>
          <option value="https://www.johnlewis.com">
            https://www.johnlewis.com
          </option>
        </Select>
      </InputLeftElement>
      <Input pl="16rem" pr="7rem" />
      <InputRightElement width="6.5rem">
        <Button colorScheme="blue" leftIcon={<Search2Icon />}>
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBox;

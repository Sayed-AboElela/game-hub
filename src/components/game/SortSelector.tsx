import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant={"outline"} size="sm">
          Order by: Relevance
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="relevance">Relevance</MenuItem>
        <MenuItem value="date">Date added</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="release">Release date</MenuItem>
        <MenuItem value="popularity">Popularity</MenuItem>
        <MenuItem value="average">Average rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;

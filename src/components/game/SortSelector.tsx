import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sort: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant={"outline"} size="sm">
          Order by: {currentSortOrder?.label || "Relevance"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => {
              onSelectSortOrder(order.value);
            }}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;

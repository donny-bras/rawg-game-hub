import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Rating" },
];

type SortSelectorProps = {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
};

const SortSelector = ({ sortOrder, onSelectSortOrder }: SortSelectorProps) => {
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Ordered by: {currentSortOrder?.label ?? "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders?.map((sortOrder) => (
          <MenuItem
            key={sortOrder.value}
            onClick={() => onSelectSortOrder(sortOrder.value)}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

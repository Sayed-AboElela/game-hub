import { MenuContent, MenuItem, MenuRoot, MenuTrigger, } from "@/components/ui/menu";
import usePlateform from "@/hooks/usePlateform";
import usePlatforms from "@/hooks/usePlatforms";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platformId: number) => void;
  selectedPlatformId?:number;
}

const PlatformSelector = ({selectedPlatformId, onSelectPlatform}: Props) => {
  const {data, error} = usePlatforms();
  const selectedPlatform = usePlateform(selectedPlatformId)

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant={"outline"} size="sm">
          {selectedPlatform?.name || "Platforms"}
          <BsChevronDown/>
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => {
              onSelectPlatform(platform.id);
            }}
            key={platform.id}
            value={platform.slug}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;

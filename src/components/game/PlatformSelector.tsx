import { MenuContent, MenuItem, MenuRoot, MenuTrigger, } from "@/components/ui/menu";
import usePlateform from "@/hooks/usePlateform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store/gameQueryStore";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


const PlatformSelector = () => {
  
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId)
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
  const selectedPlatform = usePlateform(selectedPlatformId)

  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant={"outline"} size="sm">
          {selectedPlatform?.name || "Platforms"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => {
              setSelectedPlatformId(platform.id);
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

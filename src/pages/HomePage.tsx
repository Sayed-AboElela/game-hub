import GameGrid from '@/components/game/GameGrid'
import GameHeading from '@/components/game/GameHeading'
import PlatformSelector from '@/components/game/PlatformSelector'
import SortSelector from '@/components/game/SortSelector'
import GenreList from '@/components/genre/GenreList'
import { Grid, GridItem, HStack } from '@chakra-ui/react'

const HomePage = () => {
    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
            <GridItem hideBelow="lg" area={"aside"} paddingX={5}>
                <GenreList />
            </GridItem>

            <GridItem area={"main"} paddingX={6}>
                <GameHeading />
                <HStack gap={5}>
                    <PlatformSelector />
                    <SortSelector />
                </HStack>
                <GameGrid />
            </GridItem>
        </Grid>
    )
}

export default HomePage
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router";
import useGames from "@/hooks/useGames.ts";
import Game from "@/entities/Game";
import React from "react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } = useGames();

  const gamesSkeletons = [1, 2, 3, 4, 5, 6];

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      hasMore={hasNextPage}
      dataLength={fetchedGamesCount}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        gap="2rem"
        marginTop={4}
      >
        {error && <Text>{error.message}</Text>}
        {isLoading &&
          gamesSkeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages?.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results?.map((game: Game) => (
              <Link to={`games/${game.slug}`} key={game.id}>
                <GameCardContainer>
                  <GameCard game={game} />
                </GameCardContainer>
              </Link>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;

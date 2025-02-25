import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "react-router";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box overflow="hidden" borderRadius="10px" _hover={{ scale:'1.03' }} _motionReduce={{ transition: "all 0.3s" }}>
        {children}
    </Box>
  );
};

export default GameCardContainer;

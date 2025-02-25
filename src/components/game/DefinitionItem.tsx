import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    term: string;
    children: ReactNode | ReactNode[]
}

const DefinitionItem = ({ term, children }: Props) => {
    return (
        <Box my='3'>
            <Heading as='dt' fontSize='md' color='gray.600' mb='1'>{term}</Heading>
            <dd>
                {children}
            </dd>
        </Box>
    )
}

export default DefinitionItem
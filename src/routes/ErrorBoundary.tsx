import NavBar from "@/components/navbar/NavBar";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import {
    isRouteErrorResponse,
    useRouteError,
} from "react-router";

const ErrorBoundary = () => {

    const error = useRouteError();

    return (
        <Box >
            <NavBar />
            <Stack padding={5} justifyContent={'center'} alignItems={'center'}>
                {isRouteErrorResponse(error) ? (
                    <>
                        <Heading fontSize={'2xl'}>{error.status} {error.statusText}</Heading>
                        <Text>{error.data}</Text>
                    </>

                ) :
                    error instanceof Error ? (
                        <>
                            <Heading>Error</Heading>
                            <Text>{error.message}</Text>
                            <p>The stack trace is:</p>
                            <pre>{error.stack}</pre>
                        </>
                    ) :
                        (<Heading>Unknown Error</Heading>)
                }
            </Stack>
        </Box>
    )
}

export default ErrorBoundary;
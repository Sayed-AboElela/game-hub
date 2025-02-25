import NavBar from '@/components/navbar/NavBar'
import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <>
            <NavBar />
            <Box padding={5}>
                <Outlet />
            </Box>
        </>
    )
}

export default Layout
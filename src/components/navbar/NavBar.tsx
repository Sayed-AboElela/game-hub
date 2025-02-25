import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router";


const NavBar = () => {

    return (
        <HStack padding="1rem">
            <Link to='/'>
                <Image src={logo} boxSize={"60px"} alt="logo" />
            </Link>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;

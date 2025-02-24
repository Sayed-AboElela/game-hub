import { Input } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group.tsx";
import { BsSearch } from "react-icons/bs";
import { FormEvent, useRef } from "react";
import useGameQueryStore from "@/store/gameQueryStore";


const SearchInput = () => {
    const setSearchText = useGameQueryStore(s => s.setSearchText)

    const searchRef = useRef<HTMLInputElement>(null);

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (searchRef.current) setSearchText(searchRef.current.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <InputGroup
                className={'input--group'}
                startElement={<BsSearch />}
            >
                <Input ref={searchRef} borderRadius={20} placeholder="Search games..." />
            </InputGroup>
        </form>
    )
};

export default SearchInput;

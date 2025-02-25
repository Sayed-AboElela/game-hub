import { useParams } from "react-router";

const GameDetailsPage = () => {
    let { id } = useParams();

    return (
        <div>GameDetailsPage {id}</div>
    )
}

export default GameDetailsPage
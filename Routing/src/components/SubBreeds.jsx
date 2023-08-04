import { useParams } from "react-router-dom";
import { useEffect } from "react";

const SubBreeds = () => {
    const {dogId} = useParams();
    useEffect(() => {
        // HTTP запрос, если нужно
    }, [])

    return (
        <div>
            SubBreeds: {dogId}
        </div>
    )
}

export default SubBreeds;
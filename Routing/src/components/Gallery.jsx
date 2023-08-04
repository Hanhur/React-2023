import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Gallery = () => {
    const {dogId} = useParams();
    useEffect(() => {
        // HTTP запрос, если нужно
    }, [])

    return (
        <div>
            Image Gallery: {dogId}
        </div>
    )
}

export default Gallery;
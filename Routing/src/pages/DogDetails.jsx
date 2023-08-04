import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";

const DogDetails = () => {
    const {dogId} = useParams();
    useEffect(() => {
        // HTTP запрос, если нужно
    }, [])

    return (
        <div>
           <h1>DogDetails: {dogId}</h1>
           <ul>
                <li>
                    <Link to="subbreeds">Подподроды</Link>
                </li>
                <li>
                    <Link to="gallery">Галерея</Link>
                </li>
           </ul>
           <Outlet />
        </div>
    );
}

export default DogDetails;
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useRef, Suspense } from "react";

const DogDetails = () => {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
    const { dogId } = useParams();
    useEffect(() => {
        // HTTP запрос, если нужно
    }, [])

    return (
        <div>
            <h1>DogDetails: {dogId}</h1>
            <Link to={backLinkLocationRef.current}>Назад к странице коллукции</Link>
            <ul>
                <li>
                    <Link to="subbreeds">Подподроды</Link>
                </li>
                <li>
                    <Link to="gallery">Галерея</Link>
                </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default DogDetails;
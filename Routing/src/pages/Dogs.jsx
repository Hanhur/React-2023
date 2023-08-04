import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Dogs = () => {
    const [dogs] = useState(['dog - 1', 'dog - 2', 'dog - 3', 'dog - 4', 'dog - 5']);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const dogId = searchParams.get('dogId') ?? '';
    const visibleDogs = dogs.filter(dog => dog.includes(dogId));

    useEffect(() => {
        // HTTP запрос, если нужно
    }, [])
    
    const updateQueryString = (event) => {
        if(event.target.value === "")
        {
            return setSearchParams({});
        }
        else 
        {
            setSearchParams({dogId: event.target.value});
        }
    }
    return (
        <div>
            <input type="text" value={dogId} onChange={updateQueryString} />
            {/* <button onClick={() => setSearchParams({c: "hello"})}>change sp</button> */}
            <ul>
                {visibleDogs.map(dog => {
                    return (
                        <li key={dog}>
                            <Link to={`${dog}`} state={{from: location}}>{dog}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Dogs;
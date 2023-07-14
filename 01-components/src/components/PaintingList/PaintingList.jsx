import Painting from "../Painting/Painting";
import PropTypes from 'prop-types';


export default function PaintinfList({items}) 
{
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <Painting
                        imageUrl={item.url}
                        title={item.title}
                        author={item.author.tag}
                        profileUrl={item.author.url}
                        price={item.price}
                        quantity={item.quantity}
                    />
                </li>
            ))}
        </ul>
    )
}

PaintinfList.propType = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}
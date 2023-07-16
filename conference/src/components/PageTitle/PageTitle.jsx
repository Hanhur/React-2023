import PropTypes from 'prop-types';
import { Title } from './PageTitle.styled';


export const PageTitle = ({text}) => {
    return (
        <div>
            <Title>{text}</Title>
        </div>
    )
}

PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
}
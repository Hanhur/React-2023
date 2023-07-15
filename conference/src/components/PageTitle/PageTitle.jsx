import PropTypes from 'prop-types';
import css from './PageTitle.module.css';


export const PageTitle = ({text}) => {
    return (
        <div>
            <h1 className={css.title}>{text}</h1>
        </div>
    )
}

PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
}
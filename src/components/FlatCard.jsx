/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

function FlatCard({ id, title, cover }) {
    return (
        <li key={id} className='card'>
            <Link to={`/flatform/${id}`}>
                <img className='card__cover' src={cover} alt={`${title} cover`} />
                <p className="card__text">
                    {title}
                </p>
            </Link>
        </li>
	)
}

export default FlatCard
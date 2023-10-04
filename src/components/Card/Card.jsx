import { Link } from 'react-router-dom'; //on importe le composant link

//le composant Card prend id, cover et title en tant que props
function Card({id, cover, title}) {
    return(
        <Link to={`/fiche-logement/${id}`} className="card">
            <img src={cover} alt={{title}} className="card-image" />
            <h3 className="card-title">{title}</h3>
        </Link>
    );
}

export default Card;
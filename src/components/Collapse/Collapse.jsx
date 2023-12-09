//components/Collapse/Collapse

//collapse est utilisé pour afficher un contenu dépliable et repbliable

import { useState } from 'react';
import Arrow from '../../assets/arrow.png'; //on importe l'image du logo

// le composant Collapse reçoit 3 props : title, content et customClass
function Collapse({ title, content, customClass }) {
    //on crée un état local isOpen pour le composant
    //qui détermine si le contenu est affiché (true) ou caché (false)
    //l'état initial est false, donc le contenu est caché au départ.
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`collapse ${customClass}`}>
            {/*lorsqu'on clique sur le bouton, la fonction setIsOpen est appelé*/}
            {/* la fonction setIsOpen est appelée pour changer l'état de isOpen */}
            <button className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <img 
                    src={Arrow}
                    alt="toggle" 
                    //la flèche pivote en fonction de l'état du collapse
                    className={`arrow-icon ${isOpen ? 'opened' : ''}`}
                />
            </button>
            {/* si isOpen est true, alors le contenu est affiché */}
            {isOpen && <div className="collapse-content opened">{content}</div>}
        </div>
    );
}

export default Collapse; 

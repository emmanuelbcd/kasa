//components/Collapse/Collapse

import { useState } from 'react';
import Arrow from '../../assets/arrow.png'; //on importe l'image du logo

function Collapse({ title, content, customClass }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`collapse ${customClass}`}>
            <button className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <img 
                    src={Arrow}
                    alt="toggle" 
                    className={`arrow-icon ${isOpen ? 'opened' : ''}`}
                />
            </button>
            {isOpen && <div className="collapse-content opened">{content}</div>}
        </div>
    );
}

export default Collapse; 

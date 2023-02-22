import React from 'react';
import './ButtonLink.css'

const ButtonLink = ({name, img}) => {
    
    return (
        <div className='ButtonLink'>

            <div className="ButtonLink-link">

                <img src={img} alt="" />

                <p>{name}</p>

            </div>
                
            {/* css beautiful gray line */}
            <span></span>

        </div>
    );
};

export default ButtonLink;
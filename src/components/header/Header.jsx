import React from 'react';
import './Header.css'
import images from '../../assets/index'

const Header = () => {
    return (
        <div className='Header'>

                <div className="Header-user">
                    
                    <div className="Header-user_img">

                        <img src={images.UserImage} alt="User" />

                    </div>

                    <div className="Header-user_wrapper">

                        <div className="Header-user_wraper-userName">

                            <p>{`ישראל אברמסון-לוי`}</p>

                            <img src={images.DropDownArrow} alt="drop dow arrow" />

                        </div>

                        <div className="Header-user_wraper-userJob">

                            <p>{`משתמש מערכת`}</p>
                            
                        </div>
                </div>

            </div>
            
        </div>
    );
};

export default Header;
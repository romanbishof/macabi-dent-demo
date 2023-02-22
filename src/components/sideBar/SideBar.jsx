import React from 'react';
import './SideBar.css'
import images from '../../assets/index' 
import ButtonLink from '../button_link/ButtonLink';

const SideBar = () => {
    return (
        <div className='SideBar'>

            <div className="SideBar-logo">

                <img src={images.Logo} alt="Makabi logo" />

            </div>

            <div className="SideBar-links">

                <ButtonLink name={`סטטוס מועמדים`} img={images.Status_candidate}/>
                
                <ButtonLink name={`שליחת ערכה חדשה`} img={images.Send_new_pack}/>
                
                <ButtonLink name={`מועמדים`} img={images.Candidents}/>
                
                <ButtonLink name={`הגדרות`} img={images.Settings}/>

                <ButtonLink name={`ניהול דף נחיתה`} img={images.Landing_page}/>

            </div>

            <div className="SideBar-singout">

                {/* css beautiful gray line */}
                <span></span>
                <ButtonLink name={`יציאה`} img={images.Exit}/>

            </div>
        </div>
    );
};

export default SideBar;
import React, { useContext } from 'react';
import "./Navbar.css";
import Facebook from "../../assets/logo/Facebook.svg";
import Instagram from "../../assets/logo/instagram.svg";
import Telegram from "../../assets/logo/telegram.svg";
import Whatsapp from "../../assets/logo/whatsapp.svg";
import Email from "../../assets/logo/mail.svg";
import Location from "../../assets/logo/map-pin.svg";
import Phone from "../../assets/logo/phone-incoming.svg";
import { Link } from 'react-router-dom';
import {authContext, useAuth } from '../../AuthContext'


const Navbar = () => {

    const {
        handleLogout,
        user: { email },
      } = useContext(authContext);

    return (
        <div>
        <div className="mainContacts">
            <div className="mainContacts_mail">
                <div className="mainContacts_email">
                    <img src={Email} alt="Email"/>
                    <p>KGtour@Gmail.com</p>
                </div>
                <div className="mainContacts_email">
                    <img src={Location} alt="Location"/>
                    <p>Bishkek, Kyrgyzstan</p>
                </div>
                <div className="mainContacts_email">
                    <img src={Phone} alt="Phone"/>
                    <p>+996555111555</p>
                </div>
            </div>
            <div className="mainContacts_logo">
                <img src={Facebook} alt="Facebook" />
                <img src={Instagram} alt="Instagram" />
                <img src={Telegram} alt="Telegram" />
                <img src={Whatsapp} alt="Whatsapp" />
            </div>
        </div>
        <div className="navbar">
            <Link to="/">
            <div className="navbar_right">
               <div className="navbar_text">KG<br/><p className="navbar_textTour">TOURS</p></div>
            </div>
            </Link>
            <div className="navbar_left">
               <div className="navbar_blocks">
                   <p className="navbar_textMenu">Типы<br/>отдыха</p> 
                </div>
                <div className="navbar_verticalLine"></div>
               <div className="navbar_blocks">
                   <p className="navbar_textMenu">Каталог<br/>отелей</p> 
                </div>
                <div className="navbar_verticalLine"></div>
               <div className="navbar_blocks">
                   <p className="navbar_textMenu">Акции и<br/>предложения</p> 
                </div>
                <div className="navbar_verticalLine"></div>
               <div className="navbar_blocks">
                   <p className="navbar_textMenu">О нас</p> 
                </div>
                <div className="navbar_verticalLine"></div>
               <Link to="/fav">
               <div className="navbar_blocks">
                   <p className="navbar_textMenu">Избранное</p>
                </div>   
                </Link>                     
                {email ? (
                            <Link to="/auth">
                                <button
                                    className="btn_login"
                                    variant="contained"
                                    disableElevation
                                    onClick={handleLogout}
                                    >
                                Logout
                               </button>
                            </Link>
                                    ) : null}

                            {email ? null : (
                              <Link to="/auth">
                                <button className="btn_login" variant="contained" disableElevation>
                                  Login
                                </button>
                              </Link>
                            )}
            </div>
        </div>
    </div>
    );
};

export default Navbar;
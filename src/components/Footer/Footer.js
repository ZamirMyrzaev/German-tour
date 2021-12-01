import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <section className="contacts">
                <div className="contact_text">
                    <div className="first_contacts">
                        <p className="about_shop">
                            О магазине 
                            <p className="about_shop_text">Lorem, velit consequatur excepturi odit magnam architecto aperiam blanditiis corporis, minus dolorem hic molestiae commodi.</p>
                        </p>
                    </div>
                    <div className="first_contacts">
                        <p className="about_shop">
                            Наши контакты 
                            <p className="about_shop_text">Lorem, velit consequatur excepturi odit magnam architecto aperiam blanditiis corporis, minus dolorem hic molestiae commodi.</p>
                        </p>
                    </div>
                    <div className="first_contacts">
                        <p className="about_shop">
                            Рассылка 
                            <p className="about_shop_text">Lorem, velit consequatur excepturi odit magnam architecto aperiam blanditiis corporis, minus dolorem hic molestiae commodi.</p>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import classnames from 'classnames';
import {Link} from 'react-router-dom'
import Sectiontitle from '../section-title'
import bride1 from '../../images/groomsmen-bridesmaid/1.jpg'
import bride2 from '../../images/groomsmen-bridesmaid/2.jpg'
import bride3 from '../../images/groomsmen-bridesmaid/3.jpg'
import bride4 from '../../images/groomsmen-bridesmaid/4.jpg'
import bride5 from '../../images/groomsmen-bridesmaid/5.jpg'
import bride6 from '../../images/groomsmen-bridesmaid/7.jpg'
import bride7 from '../../images/groomsmen-bridesmaid/6.jpg'
import bride8 from '../../images/groomsmen-bridesmaid/8.jpg'
import bride9 from '../../images/groomsmen-bridesmaid/9.jpg'
import bride10 from '../../images/groomsmen-bridesmaid/10.jpg'

import './style.css'

const People = (props) => {
    const [activeTab, setActiveTab] = useState('1');

        const toggle = tab => {
          if(activeTab !== tab) setActiveTab(tab);
        }
    return(

        <div id="people" className="person-area section-padding pb-70">
            <div className="container">
                <Sectiontitle section={'Svědek a svědkyně'}/>
                <div className="person-area-menu">
                <div className="Groomsman-wrap text-center">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride1} alt=""/>
                                                {/* <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-skype"></i></Link></li>
                                                    </ul>
                                                </div> */}
                                            </div>
                                            <div className="person-content">
                                                <h3>Ondřej Ling</h3>
                                                <span>Svědek</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride5} alt=""/>
                                                {/* <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-skype"></i></Link></li>
                                                    </ul>
                                                </div> */}
                                            </div>
                                            <div className="person-content">
                                                <h3>Tereza Václavičová</h3>
                                                <span>Svědkyně</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                V případě jakýchkoliv dotazů, o kterých bychom neměli vědět, se neváhejte obrátit na naše svědky (Ondra: 602 961 874, Terka: 776 077 161).
                            </div>
                </div>
            </div>
        </div>
        
    )
}

export default People;
import React from 'react'
import {Link} from 'react-router-dom'
import strory1 from '../../images/story/1.jpg'
import strory2 from '../../images/story/2.jpg'
import strory3 from '../../images/story/3.jpg'
import strory4 from '../../images/story/4.jpg'
import './style.css'


const Story = () =>{
    return(
        <div id="story" className="story-area section-padding">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title text-center">
                        <h2>Náš příběh</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="story clearfix">
                            <div className="story-top"></div>
                            <div className="content-wrapper">
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory1} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>První setkání</h2>
                                        <span className="date">21. srpna 2019</span>
                                        <p>Poprvé jsme se potkali na venkovním koncertě v Brně, kde nás seznámili Ondra s Anet. 
                                            Ten večer jsme si spolu povídali, možná jsme si na sebe zbyli, ale také jsme si naštěstí trochu rozuměli. 
                                            Kačka s humorem prohlásila, že si ráda zpívá vánoční koledy nezávisle na ročním období, toho Davča hned využil a zazpíval si s ní Nesem vám noviny uprostřed léta v karaoke baru.</p>
                                        {/* <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory2} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Naše první rande</h2>
                                        <span className="date">květen 2020</span>
                                        <p>Ačkoliv v karaoke baru se snažil Davča udělat na Kačku dojem, tak s pozvánkou na první rande už musela přijít Kačka. Tehdy začínal covid, tak jsme si koupili pivo a seděli jsme v Lužánkách na lavičce. Bydleli jsme tehdy od sebe 3 minuty pěšky a Lužánky jsme měli přes cestu, tak to bylo velmi praktické. Další rande bylo jak jinak než v Lužánkách na lavičce (teď už občas teda zajdeme na rande i jinam).</p>
                                        {/* <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory3} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Zasnoubení</h2>
                                        <span className="date">28. října 2023</span>
                                        <p>O ruku Davča požádal Kačku v lese u jeskyně Pekárna. Tam jsme už v roce 2020 přespali v hamakách, byla to velká romanťárna.</p>
                                        {/* <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory4} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our Engagement</h2>
                                        <span className="date">Jan 22, 2018</span>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,</p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="story-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Story;
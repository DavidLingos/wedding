import React from 'react'
import Sectiontitle from '../section-title'
import strory1 from '../../images/events/saumburk.jpg'

import './style.css'

const Location = () => {
    return(

        
    <div id="event" className="service-area section-padding">
        <div className="container">
            <Sectiontitle section={'Kdy a kde'}/>
            <div className="service-area-menu">
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ceromony-img">
                                <img src={strory1} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="ceromony-content">
                                <h3>Svatba</h3>
                                <span>Sobota, 2. září 2023, 13:00 - ?</span>
                                <span>Hotel Pod Šaumburkem, Rajnochovice 17, 768 71 Rajnochovice</span>
                                <p>Místo jsme vybrali hlavně kvůli tomu, že rekreační středisko je uprostřed krásné přírody Hostýnských vrchů.<br/>
                                    Obřad se bude konat přímo na zahradě hotelu pod širým nebem.<br/>
                                    V restauraci je dost místa pro všech 80 pozvaných svatebčanů a prostorná terasa nechť bude místem, kde veselka se bude odehrávati. </p>
                                <p>Obřad bude probíhat na zahradě a následně se přesuneme do vnitřních prostor restaurace na oběd. 
                                    Oblečení prosím volte formálnější, ale hlavně takové abyste se v něm cítili pohodlně a mohli si s námi užít oslav až do nočních hodin. 
                                    Večerní zábava bude probíhat na venkovní terase.</p>
                                <a target="_blank" href="https://www.google.com/maps/place/Hotel+Pod+%C5%A0aumburkem/@49.4173571,17.7733728,15.22z/data=!4m9!3m8!1s0x4713a27981b8990b:0xf51938e1a3189fe3!5m2!4m1!1i2!8m2!3d49.4175391!4d17.7734281!16s%2Fg%2F1tgfc2vh">Mapa</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="Ceremony-wrap">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="ceromony-content ceromony-content2">
                            <h3>Wedding Party</h3>
                            <span>Sunday, 25 July 18, 9.00 AM-5.00 PM</span>
                            <span>256 Apay Road,Califonia Bong, London</span>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                            <Link to="/">See Location</Link>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="ceromony-img">
                            <img src={strory2} alt=""/>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="Ceremony-wrap">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="ceromony-img">
                             <img src={strory3} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="ceromony-content">
                            <h3>Reception Party</h3>
                            <span>Sunday, 25 July 18, 9.00 AM-5.00 PM</span>
                            <span>256 Apay Road,Califonia Bong, London</span>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                            <Link to="/">See Location</Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
    )
}
export default Location;
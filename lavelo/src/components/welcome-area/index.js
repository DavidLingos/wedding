import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './style.css'


const Welcome = () =>{
    return(
        <div className="welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-content">
                            <h2>Vítejte na našich stránkách</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or less normal distribution of letters</p>
                            <div className="btn"><AnchorLink href="#event">Kdy a kde</AnchorLink></div>
                            <div className="btn"><AnchorLink href="#rsvp">Potvrzení účasti</AnchorLink></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Welcome;
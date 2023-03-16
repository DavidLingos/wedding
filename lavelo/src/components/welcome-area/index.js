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
                            <h2>Vítej na našich stránkách</h2>
                            <p>Tyto stránky jsme vytvořili jako doplněk k pozvánce na naši svatbu. Pokud jsi zde, tak se tu hezky porozhlédni a budeme se těšit na to, že tě na naší svatbě uvidíme.</p>
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
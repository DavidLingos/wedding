import React, { Component } from 'react';
import './style.css'

const Rsvp = () => {

    return <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                <div className="rsvp-wrap">
                    <div className="col-12">
                        <div className="section-title section-title4 text-center">
                            <h2>Potvrzení účasti</h2>
                            <p>Prosím, potvrďte nám svou účast do 15. května.</p>
                        </div>
                    </div>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfZwwUduu00ZjqfZhtV13ohQs0EyOrjX_7TCvBzwgUnEZ7y7g/viewform?embedded=true" width="640" height="1475" frameborder="0" marginheight="0" marginwidth="0">Načítání…</iframe>;
                </div>
            </div>
        </div>
    </div>
</div>
    
    
}

export default Rsvp;
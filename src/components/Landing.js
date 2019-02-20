import React from 'react';
import '../stylesheets/splash.css';
import me from '../images/me.jpg'

class Landing extends React.Component {
    render() {
        return(

            <div className="splash">
                <img className="personalIimage" src={me} alt="street" />;
                <strong><p>Student | Software Developer | Coffee Enthusiast </p></strong>
            </div>
        );
    }
}


export default Landing

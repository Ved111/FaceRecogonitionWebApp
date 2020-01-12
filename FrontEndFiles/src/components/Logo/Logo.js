import  React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './Jennifer-Heller-Calzada-Photo1--800x0-c-default.jpg'

const Logo = () =>
{
    return (
        <div className = 'ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner pa3">
                 <img style={{paddingTop: '5px'}} alt='logo' src = {brain}/> </div>
            </Tilt>
        </div>

    );
}

export default Logo;
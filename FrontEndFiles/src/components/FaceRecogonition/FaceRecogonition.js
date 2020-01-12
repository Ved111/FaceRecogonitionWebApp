import  React from 'react';
import './FaceRecogonition.css';

const FaceRecogonition = ({imageUrl, box}) =>
{
    return (
        <div className='center ma'>
            <div className = 'absolute'>
                <img id = 'inputImage' alt = '' src = {imageUrl} width='500px' height='auto'/>
                <div className = 'bounding-box' style = {{top: box.topRow, left: box.leftCol, right: box.rightCol, bottom: box.bottomRow }}></div>
            </div>
        </div>
    ); 
}

export default FaceRecogonition;
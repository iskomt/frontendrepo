import React from 'react'
import {Link} from 'react-router-dom'

const Actor = (props) => {
    return (
        <div className="main-content">
            <div><Link className="back" to="/actors"> Back</Link></div>
            <h2>{props.Name}</h2>
            <div className="container">
                <div className="image-profile" style={{backgroundImage: "url(" + props.image + ")"}}></div>
                <h2>{props.name}</h2>
                <p>{props.description}}</p>
            </div>

        </div>
    );
};

export default Actor;
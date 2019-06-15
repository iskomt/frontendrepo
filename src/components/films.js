import React from 'react'
import FilmsList from "../data/films"
import {Link} from 'react-router-dom'

const Films = (props) => {
    let films = FilmsList.map((person) => {
        return (
            <div className="actor-container">
                <a>
                    <div className="actor-image" style={{backgroundImage: "url(" + person.img_src + ")"}}></div>
                </a>
                <h3>{person.name}</h3>
            </div>
        );
    });

    return (
        <div className="main-content">
            <div><Link className="back" to="/"> Back</Link></div>
            <h2>{props.title}</h2>
            <div className="container">
                {films}
            </div>

        </div>
    );
};

export default Films;
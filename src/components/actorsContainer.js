import React from 'react';
import Actor from './actor';
import Actors from './actors';
import {Route} from 'react-router-dom';
import {ActorsList} from '../data/actors';

const ActorContainer = (props) => {
    let actorUrl = ActorsList.map((actor) => {
        return(
            <Route path={`/actors/${actor.url}`} render = {() => <Actor name={actor.name} description={actor.description} image={actor.profile_img} />}/>
        );
    });

    return (
        <React.Fragment>
            <Route exact path="/actors" render={() => <Actors title="Best Actors"/>}/>
            {actorUrl}
        </React.Fragment>
    );
};

export default ActorContainer;

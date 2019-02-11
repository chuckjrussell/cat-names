import React, { Component } from 'react';

const CatsList = function(props){
    var cats = Array.prototype
        .concat(...props.people
            .map(person => {
                return person.pets ? person.pets.filter(pet => pet.type === "Cat")
                    .map(cat => cat.name) : []
            }));
    
    return (
        <div className="col-sm-6">
            <div className="card w-45">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <ul className="list-group list-group-flush">
                        {
                            cats.map(cat => {return (
                                <li key={cat} className="list-group-item">{cat}</li>
                            )})
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CatsList;
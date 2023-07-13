import React from "react";

export function Project(props) {

    return (
        <div className="project">
            <img src={props.image} alt={props.title} />
            <div className="project-details">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <ul>
                    {props.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
                <div className="project-links">
                    <a href={props.link1}>{props.link1Text}</a>
                    <a href={props.link2}>{props.link2Text}</a>
                </div>
            </div>
        </div>
    );
}

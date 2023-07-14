import React from "react";

export function Project(props) {

    return (
        <div className="project">
            <img src={props.image} alt={props.title} />
            <div className="project-details">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                {props.tags.map((tag) => (
                    <span className="my-tag" key={tag}>{tag}</span>
                ))}
                <div className="project-links">
                    <a href={props.link1}>{props.link1Text}</a>
                    <a href={props.link2}>{props.link2Text}</a>
                </div>
            </div>
        </div>
    );
}

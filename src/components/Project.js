import React from "react";

export function Project(props) {
    let image1
    let image2
    if(props.imageLocation === "left") {
        image1 = <img src={props.image} alt={props.title}/>;
    } else {
        image2 = <img src={props.image} alt={props.title}/>;
    }
    return (
        <div className="project">
            {image1}
            <div className="project-details">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <section className="project-tags">
                {props.tags.map((tag) => (
                    <span className="my-tag" key={tag}>{tag}</span>
                ))}
                </section>
                <div className="project-links">
                    <a href={props.link1}>{props.link1Text}</a>
                    <a href={props.link2}>{props.link2Text}</a>
                </div>
            </div>
            {image2}
        </div>
    );
}

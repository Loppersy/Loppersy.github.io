import React from "react";

export function Project(props) {
    let image1
    let image2
    if(props.imageLocation === "left") {
        image1 = <a href={props.link1} target="_blank" rel="noreferrer"><video autoPlay loop muted src={props.videoDemo}/></a>;
    } else {
        image2 = <video autoPlay loop muted src={props.videoDemo}/>;
    }
    return (
        <div className="project">
            {image1}
            <div className="project-details">
                <h2 className={"funny-title"}><a href={props.link1} target="_blank" rel="noreferrer">{props.title}</a></h2>
                <p>{props.description}</p>
                <section className="project-tags">
                {props.tags.map((tag) => (
                    <span className="my-tag" key={tag}>{tag}</span>
                ))}
                </section>
                <div className="project-links">
                    <a href={props.link1} target="_blank" rel="noreferrer"><img src={props.link1Img} alt={"Github"}/></a>
                </div>
            </div>
            {image2}
        </div>
    );
}

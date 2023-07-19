import React from "react";

export function Project(props) {
    let image1
    let image2
    let link2
    if(props.imageLocation === "left") {
        image1 = <a className={"video-link"} href={props.link1} target="_blank" rel="noreferrer"><video autoPlay loop muted src={props.videoDemo}/></a>;
    } else {
        image2 =<a className={"video-link"} href={props.link1} target="_blank" rel="noreferrer"> <video autoPlay loop muted src={props.videoDemo}/></a>;
    }
    if(props.link2 !== "") {
      link2 =  <a href={props.link2 + '&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'} target="_blank" rel="noreferrer"><img className={"googleImg"} alt='Get it on Google Play' src={'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'}/></a>
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
                    {link2}
                </div>
            </div>
            {image2}
        </div>
    );
}

import React from "react";

export function Project(props) {
    let image1
    let image2
    let link2
    let demo
    if(props.videoDemo !== "") {
        demo = <video className={"demo"} controls={true} autoPlay={true} loop muted src={props.videoDemo}/>
    } else if (props.imageDemo !== "") {
        demo = <img className={"demo"} src={props.imgDemo} alt={"Demo"}/>
    }
    if(props.imageLocation === "left") {
        // image1 = <a className={"demo-link"} href={props.link1} target="_blank" rel="noreferrer">{demo}</a>;
        image1 = <div className={"demo-link"}>{demo}</div>;
    } else {
        // image2 =<a className={"demo-link"} href={props.link1} target="_blank" rel="noreferrer">{demo}</a>;
        image2 = <div className={"demo-link"}>{demo}</div>;
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

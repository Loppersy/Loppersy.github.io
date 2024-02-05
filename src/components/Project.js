import React from "react";

export function Project({ videoDemo, imageDemo, imgDemo, imageLocation, link1, link1Img, link2, link2Img, title, description, tags }) {
    let image1
    let image2
    let link1Element
    let link2Element
    let demo
    let titleLink // Variable for dynamically setting the title link

    if(videoDemo !== "") {
        demo = <video className={"demo"}  autoPlay={true} loop muted src={videoDemo}/>
    } else if (imageDemo !== "") {
        demo = <img className={"demo"} src={imgDemo} alt={"Demo"}/>
    }
    if(imageLocation === "left") {
        image1 = <div className={"demo-link"}>{demo}</div>;
    } else {
        image2 = <div className={"demo-link"}>{demo}</div>;
    }

    if(link1 !== "" && link1Img !== ""){
        link1Element = <a href={link1} target="_blank" rel="noreferrer"><img src={link1Img} alt={"Github"}/></a>
        titleLink = link1; // Use link1 if available
    }
    if(link2 !== "" && link2Img === ""){
        link2Element =  <a href={`${link2}&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1`} target="_blank" rel="noreferrer"><img className={"googleImg"} alt='Get it on Google Play' src={'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'}/></a>
        if (!link1Element) titleLink = link2; // Use link2 if link1 is not set
    } else if (link2 !== "" && link2Img !== "") {
        link2Element = <a href={link2} target="_blank" rel="noreferrer"><img src={link2Img} alt={"Link 2"}/></a>
        if (!link1Element) titleLink = link2; // Use link2 if link1 is not set
    }

    // Dynamically set the title link based on availability of link1 or fallback to link2
    const titleElement = titleLink ? (
        <h2 className={"funny-title"}><a href={titleLink} target="_blank" rel="noreferrer">{title}</a></h2>
    ) : (
        <h2 className={"funny-title"}>{title}</h2> // Render without link if neither is available
    );

    return (
        <div className="project">
            {image1}
            <div className="project-details">
                {titleElement}
                <p>{description}</p>
                <section className="project-tags">
                    {tags.map((tag) => (
                        <span className="my-tag" key={tag}>{tag}</span>
                    ))}
                </section>
                <div className="project-links">
                    {link1Element}
                    {link2Element}
                </div>
            </div>
            {image2}
        </div>
    );
}

import React from "react";
import facebook from "../facebook.svg";
import twitter from "../twitter.svg";
import linkedin from "../linkedin.svg";
import insta from "../insta.svg";

const Contact = () => { 
    return(
        <div className="contact">
            <a href="https://www.youtube.com/watch?v=Xx7sxWI9FNI" target="_blank"  rel="noreferrer"><img src={insta} alt="insta" title="Instagram" /></a>
            <a href="https://www.youtube.com/watch?v=Xx7sxWI9FNI" target="_blank"  rel="noreferrer"><img src={twitter} alt="twitter" title="Twitter" /></a>
            <a href="https://www.youtube.com/watch?v=Xx7sxWI9FNI" target="_blank"  rel="noreferrer"><img src={facebook} alt="facebook" title="Facebook" /></a>
            <a href="https://www.youtube.com/watch?v=Xx7sxWI9FNI" target="_blank"  rel="noreferrer"><img src={linkedin} alt="linkedin" title="LinkedIn" /></a>
        </div>
        )

}

export default Contact;
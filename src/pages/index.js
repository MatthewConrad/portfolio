import * as React from "react";
import SEO from "../components/seo";
import Blobs from "../components/blobs";

const IndexPage = () => (
  <>
    <div className="content-wrapper">
      <div className="hero-wrapper">
        <SEO title="Full-stack Developer" />
        <h1>Hi, I&rsquo;m Matthew.</h1>
        <h2>I&rsquo;m a full-stack developer.</h2>
        <p>
          In my 7 years of industry experience I've worked on everything from
          gamification platforms
          <br /> to self-service chatbots. I've got a passion for front-end
          development and design,
          <br /> picking up new technologies, and teaching others.
        </p>
        <p>
          When I'm not writing code, I'm a competitive marathoner with dreams of
          completing
          <br /> all six World Marathon Majors and making it to the Olympic
          Trials. I also love baking and <br />
          photography, and am currently learning Italian and French.
        </p>
      </div>
    </div>
    <Blobs />
  </>
);

export default IndexPage;

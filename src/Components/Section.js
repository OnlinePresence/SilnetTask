import React from "react";
import section_image from "../Resources/section_image.png";
import "./Section.css";

const Section = () => {
  return (
    <div className="left_section">
      <h3 className="left_title">Black Week</h3>
      <h3 className="left_subtitle">tylko do 30.11.2022</h3>
      <hr className="left_line" />
      <p className="left_text">
        Spośród 479 lokali mieszkalnych{" "}
        <a href="#">
          wyróżniliśmy 120 mieszkań oraz 5 domów w promocyjnej cenie
        </a>{" "}
        zlokalizowanych na 7 naszych inwestycjach: Katowice, Apatamenty Barbary,
        Katowice, ul. Asnyka. Katowice, ul. Kornasa, Chorzów, ul. 17-go
        sierpnia, Knurów Aleja Lipowa II, Chrzanów, ul. Śląska, Oświęcim, ul.
        Willowa.
      </p>
      <img src={section_image} className="left_section_image" />
    </div>
  );
};
export default Section;

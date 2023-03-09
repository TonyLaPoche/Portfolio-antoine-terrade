// == Import
import { useState } from "react";
import { Slider, Slide, Caption, Carousel } from "react-materialize";

// == Composant

export const SliderM = () => {
  return (
    <Slider
      fullscreen={false}
      options={{
        duration: 500,
        height: 300,
        indicators: true,
        interval: 6000,
      }}
      style={{
        maxWidth: "60vw",
        margin: "0 auto",
      }}
    >
      <Slide
        image={
          <img
            alt=""
            src="https://picsum.photos/300/300?image=0"
            className="responsive-img"
          />
        }
      >
        <Caption placement="center">
          <h3>This is our big Tagline!</h3>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src="https://picsum.photos/350/250?image=1" />}>
        <Caption placement="left">
          <h4>Nom du projet 1</h4>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src="https://picsum.photos/250/250?image=2" />}>
        <Caption placement="right">
          <h4>Nom du projet 2</h4>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src="https://picsum.photos/250/250?image=3" />}>
        <Caption placement="center">
          <h4>Nom du projet 3</h4>
        </Caption>
      </Slide>
    </Slider>
  );
};


// == Export
export default SliderM;

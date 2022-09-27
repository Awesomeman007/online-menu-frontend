import React from "react";
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "./index.css";
import "react-awesome-slider/dist/styles.css";

const StyledImage = styled.img`
  border-radius: 10px !important;
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
`;

const slideImages = [
  "https://lungyai.com/wp-content/uploads/2019/03/logo-lungyai.png",
  "https://lungyai.com/wp-content/uploads/2019/03/logo-lungyai.png",
  "https://lungyai.com/wp-content/uploads/2019/03/logo-lungyai.png",
];

const data = [
  {
    id: "1",
    title: "Web Design",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    img: "https://media2.miaminewtimes.com/mia/imager/u/original/8502165/lung_yai_thai_tapas1-credit_billwisserphoto.com.jpg",
  },
  {
    id: "2",
    title: "Mobile Application",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://media2.miaminewtimes.com/mia/imager/u/golden-s/8502166/lung_yai_thai_tapas2-credit_billwisserphoto.com.jpg?cb=1655595106",
  },
  {
    id: "3",
    title: "Branding",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6WAmGdvKRN6OlbWcligihgvuP0Dqb3lPIA&usqp=CAU",
  },
];

const SlideBar = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div style={{ paddingLeft: 10, paddingRight: 10 }}>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={2000}
        style={{ height: 200 }}
        mobileTouch
        infinite
      >
        {data.map((d) => (
          <div className="item" style={{ borderRadius: 10 }}>
            <div className="left">
              <div className="leftContainer">
                <h2>{d.title}</h2>
                <p>{d.desc} </p>
              </div>
            </div>

            <div className="right">
              <StyledImage src={d.img} />
            </div>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default SlideBar;

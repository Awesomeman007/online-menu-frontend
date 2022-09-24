import React from "react";
import styled from 'styled-components'
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const StyledImage = styled.img`
    border-radius: 10px !important;
`

const slideImages = [
  "https://lungyai.com/wp-content/uploads/2019/03/logo-lungyai.png",
  "https://lungyai.com/wp-content/uploads/2019/03/logo-lungyai.png",
  "https://lungyai.com/wp-content/uploads/2019/03/logo-lungyai.png",
];

const data = [
    {
      id: "1",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://media2.miaminewtimes.com/mia/imager/u/original/8502165/lung_yai_thai_tapas1-credit_billwisserphoto.com.jpg"
    },
    {
      id: "2",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg"
    },
    {
      id: "3",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg"
    }
  ];

const SlideBar = () => {
  return (
    <div style={{paddingLeft: 10, paddingRight: 10}}>
      <AwesomeSlider style={{height: 200}} >
        {data.map((d) => (
          <div className="item" style={{borderRadius: 10}}>
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
      </AwesomeSlider>
    </div>
  );
};

export default SlideBar;

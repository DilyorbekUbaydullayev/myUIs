import React from "react";
import img from "../../assets/home.jpg";
import { Bg,StyledImg,Title1 } from "../../styles/styles";
const HeaderImg = () => {
  return (
    <>
      <Bg>
        <StyledImg src={img} alt="" />
      </Bg>
      <Title1>
        <h2 style={{color:'#cc9900',fontFamily:'arial',fontWeight:'100',letterSpacing:2}}>Introduction</h2>
        <p style={{fontSize:23,lineHeight:2,fontWeight:100,color:'#8C8C8C'}}>
          Suspendisse ut magna vel velit cursus tempor ut nec nunc. Mauris
          vehicula, augue in tincidunt porta, purus ipsum blandit massa.
        </p>
      </Title1>
    </>
  );
};

export default HeaderImg;

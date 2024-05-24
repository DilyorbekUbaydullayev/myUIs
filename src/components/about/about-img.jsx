import React from 'react'
import styled from 'styled-components';
export const Bg = styled.div`
background-image: url(${props=>props.img});
background-repeat: no-repeat;
background-size: auto;
background-position: center;
height: 200px;
`;
const aboutimg = (props) => {
  return (
    <div>
      <Bg img={props.img}/>
    </div>
  )
}

export default aboutimg

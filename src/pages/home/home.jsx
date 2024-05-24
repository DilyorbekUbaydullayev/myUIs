import React from "react";
import Navbar from "../../components/home/home-nav";
import Headerimg from "../../components/home/header-img";
import HomeCards from "../../components/home/home-cards";
const home = () => {
  return (
    <div>
      <Navbar />
      <Headerimg />
     <div style={{paddingInline:30,marginTop:80}}>
     <HomeCards />
     </div>
    </div>
  );
};

export default home;

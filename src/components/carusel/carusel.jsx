import "./carusel.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/popular_item_1.jpg";
import img2 from "../../assets/popular_item_2.jpg"
import img3 from "../../assets/popular_item_3.jpg"
import img4 from "../../assets/popular_item_4.jpg"
import img5 from "../../assets/popular_item_5.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaPlus } from "react-icons/fa";
import { HiPlusSm } from "react-icons/hi";

const imgs=[img1,img2,img3,img4,img5,img1,img2,img3,img4,img5,img1,img2,img3,img4,img5]
export default({img})=> {
  return (
    <Swiper
  style={{ height: 350,width:'100%', marginTop: 50, }}
  // install Swiper modules
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={50}
  slidesPerView={5}
  slidesPerGroup={5}
  navigation
  pagination={{
    clickable: true,
  }}
  scrollbar={{ draggable: true }}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log("slide change")}
  breakpoints={{
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
     
      slidesPerGroup:1
    },
    // when window width is >= 480px
    260: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup:2
    },
    // when window width is >= 640px
   520: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup:3
    },
    780: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup:4
    },
    1100: {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup:5
    }

  }}
>
  {/* SwiperSlide components */}


     {imgs.map((e, i) =>{
      return (
        <SwiperSlide key={i}>
         
       <div style={{position:'relative'}}>
       <img src={e} alt="" style={{width:'100%', objectFit:'cover'  }} />
       <div style={{display:'flex',marginTop:-80,marginLeft:10,color:'#fff'}}>
        <div>
          <h5>Mauris tempus</h5>
          <p>
            76 listings
          </p>
        </div>
       <div>
       <button className="btn button"><HiPlusSm /></button>
       </div>
       </div>
       </div>
      
        </SwiperSlide>
      )
     })}
     
    </Swiper>
  );
}

;

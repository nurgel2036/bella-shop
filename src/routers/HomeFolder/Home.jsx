import "./Home.scss";
import React from "react";

import ControlledCarousel from "../../components/Carousel/ControlledCarousel";
import Blocks from "../../components/Blocks/Blocks";
import Words from "../../components/Words/Words";
import ColoredWords from "../../components/ColoredWords/ColoredWords";
import SingleWord from "../../components/SingleWord/SingleWord";
import ResentPosts from "../../components/RecentPosts/ResentPosts";
import Foursome from "../../components/Foursome/Foursome";
import TopSome from "../../components/Content/TopSome/TopSome";
import WordImage from "../../components/Content/WordImage/WordImage";
import ShortBreak from "../../components/shortBreak/ShortBreak";




import recentPostPhoto1 from "../../components/Foursome/FoursomeImg/recentpost1.jpg";
import recentPostPhoto2 from "../../components/Foursome/FoursomeImg/recentpost2.jpg";
import recentPostPhoto3 from "../../components/Foursome/FoursomeImg/recentpost3.jpg";
import recentPostPhoto4 from "../../components/Foursome/FoursomeImg/recentpost4.jpg";







function Home() {


  const shortBreak ="shortBreak-bgImg";
  const shortBreak2="shortBreak-bgImg2";
  const shortBreak3="shortBreak-bgImg3";
  const shortBreak4="shortBreak-bgImg4";

  const recentPostPhoto101= recentPostPhoto1
  const recentPostPhoto202=recentPostPhoto2
  const recentPostPhoto303=recentPostPhoto3
  const recentPostPhoto404=recentPostPhoto4
  const shoes = 'Shoes'
  const dress = 'Dress'
  const children ='Children '
  const kids = 'Kids'
  const wedding = 'Wedding'
  const meeting = 'Meeting'
  const man = 'Man'
  const accessories = 'Accessories'


  return (
    <div className="Home">
      <ControlledCarousel/>
      <Blocks />
      <Words />
      {/*          outShortBreak          */}
      <div className="outShortBreak ">
        <div className="shortBreakMain">
          <ShortBreak shortBreak={shortBreak}></ShortBreak>
          <ShortBreak shortBreak={shortBreak2}></ShortBreak>
          <ShortBreak shortBreak={shortBreak3}></ShortBreak>
          <ShortBreak shortBreak={shortBreak4}></ShortBreak>
        </div>
      </div>
      <ColoredWords />
      <SingleWord />
      <ResentPosts />
      {          /* outFoursome           */}
      <div className="outFoursome">
        <div className="foursome-main">
          <Foursome srca={recentPostPhoto101} span1={shoes} span2={dress}></Foursome>
          <Foursome srca={recentPostPhoto202} span1={children} span2={kids}></Foursome> 
          <Foursome srca={recentPostPhoto303} span1={wedding} span2={meeting}></Foursome>
          <Foursome srca={recentPostPhoto404} span1={man} span2={accessories}></Foursome>
        </div>
      </div>
      
      {/*            outTopSome            */}
      <div className="outTopSome">
        <div className="mainTopSome">
          <TopSome title={"top sellers"} pTitle={"see all"}></TopSome>
          <TopSome title={"top accessories"} pTitle={"see all"}></TopSome>
          <TopSome title={"top newest"} pTitle={"see all"}></TopSome>
        </div>
      </div>

      {/*     WordImage           */}

      
    </div>
    
  );
}

export default Home;

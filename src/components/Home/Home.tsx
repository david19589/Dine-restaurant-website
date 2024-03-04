import Styles from "./Home.module.css";
import Logo from "/src/assets/logo.svg";
import Img1 from "/src/assets/homepage/enjoyable-place-mobile.jpg";
import Img1Tablet from "/src/assets/homepage/enjoyable-place-tablet.jpg";
import Img1Desktop from "/src/assets/homepage/enjoyable-place-desktop.jpg";
import Img2 from "/src/assets/homepage/locally-sourced-mobile.jpg";
import Img2Tablet from "/src/assets/homepage/locally-sourced-tablet.jpg";
import Img2Desktop from "/src/assets/homepage/locally-sourced-desktop.jpg";
import Img3 from "/src/assets/homepage/salmon-mobile.jpg";
import Img3Tablet from "/src/assets/homepage/salmon-desktop-tablet.jpg";
import Img4 from "/src/assets/homepage/beef-mobile.jpg";
import Img4Tablet from "/src/assets/homepage/beef-desktop-tablet.jpg";
import Img5 from "/src/assets/homepage/chocolate-mobile.jpg";
import Img5Tablet from "/src/assets/homepage/chocolate-desktop-tablet.jpg";
import Img6 from "/src/assets/homepage/family-gathering-mobile.jpg";
import Img6Tablet from "/src/assets/homepage/family-gathering-tablet.jpg";
import Img6Desktop from "/src/assets/homepage/family-gathering-desktop.jpg";
import Line from "/src/assets/patterns/pattern-divide.svg";
import SecondLine from "/src/assets/icons/icon-minus.svg";
import CurveTopRight from "/src/assets/patterns/pattern-curve-top-right.svg";
import CurveTopLeft from "/src/assets/patterns/pattern-curve-top-left.svg";
import Lines from "/src/assets/patterns/pattern-lines.svg";
import { useState, useRef } from "react";

function Home(props) {
  const [classChanger, setClassChanger] = useState<number | null>(1);
  const Positions = useRef<HTMLImageElement>(null);

  const handleClick = (id: number) => {
    if (classChanger !== id) {
      setClassChanger(id);
    }
  };

  const PositionChanger = () => {
    if (Positions.current) {
      Positions.current.classList.remove(Styles.SecondLineActiveOne);
      Positions.current.classList.remove(Styles.SecondLineActiveTwo);
    }
  };
  const PositionChanger2 = () => {
    if (Positions.current) {
      Positions.current.classList.remove(Styles.SecondLineActiveTwo);
      Positions.current.classList.add(Styles.SecondLineActiveOne);
    }
  };
  const PositionChanger3 = () => {
    if (Positions.current) {
      Positions.current.classList.remove(Styles.SecondLineActiveOne);
      Positions.current.classList.add(Styles.SecondLineActiveTwo);
    }
  };

  const ChangeRefs = {
    h1Changer: useRef<HTMLInputElement>(null),
    pChanger: useRef<HTMLInputElement>(null),
    imgChanger: useRef<HTMLImageElement>(null),
    imgChanger2: useRef<HTMLImageElement>(null),
    imgChanger3: useRef<HTMLImageElement>(null),
  };

  const handleChanger = () => {
    if (ChangeRefs.h1Changer.current) {
      ChangeRefs.h1Changer.current.textContent = "Family Gathering";
    }
    if (ChangeRefs.pChanger.current) {
      ChangeRefs.pChanger.current.textContent =
        "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.";
    }
    if (ChangeRefs.imgChanger.current && ChangeRefs.imgChanger.current.src) {
      ChangeRefs.imgChanger.current.src =
        "/src/assets/homepage/family-gathering-mobile.jpg";
    }
    if (ChangeRefs.imgChanger2.current && ChangeRefs.imgChanger2.current.src) {
      ChangeRefs.imgChanger2.current.src =
        "/src/assets/homepage/family-gathering-tablet.jpg";
    }
    if (ChangeRefs.imgChanger3.current && ChangeRefs.imgChanger3.current.src) {
      ChangeRefs.imgChanger3.current.src =
        "/src/assets/homepage/family-gathering-desktop.jpg";
    }
  };

  const handleChanger2 = () => {
    if (ChangeRefs.h1Changer.current) {
      ChangeRefs.h1Changer.current.textContent = "Special Events"
    }
    if (ChangeRefs.pChanger.current) {
      ChangeRefs.pChanger.current.textContent =
        "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.";
    }
    if (ChangeRefs.imgChanger.current && ChangeRefs.imgChanger.current.src) {
      ChangeRefs.imgChanger.current.src =
        "/src/assets/homepage/special-events-mobile.jpg";
    }
    if (ChangeRefs.imgChanger2.current && ChangeRefs.imgChanger2.current.src) {
      ChangeRefs.imgChanger2.current.src =
        "/src/assets/homepage/special-events-tablet.jpg";
    }
    if (ChangeRefs.imgChanger3.current && ChangeRefs.imgChanger3.current.src) {
      ChangeRefs.imgChanger3.current.src =
        "/src/assets/homepage/special-events-desktop.jpg";
    }
  };

  const handleChanger3 = () => {
    if (ChangeRefs.h1Changer.current) {
      ChangeRefs.h1Changer.current.textContent = "Social Events";
    }
    if (ChangeRefs.pChanger.current) {
      ChangeRefs.pChanger.current.textContent =
        "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.";
    }
    if (ChangeRefs.imgChanger.current && ChangeRefs.imgChanger.current.src) {
      ChangeRefs.imgChanger.current.src =
        "/src/assets/homepage/social-events-mobile.jpg";
    }
    if (ChangeRefs.imgChanger2.current && ChangeRefs.imgChanger2.current.src) {
      ChangeRefs.imgChanger2.current.src =
        "/src/assets/homepage/social-events-tablet.jpg";
    }
    if (ChangeRefs.imgChanger3.current && ChangeRefs.imgChanger3.current.src) {
      ChangeRefs.imgChanger3.current.src =
        "/src/assets/homepage/social-events-desktop.jpg";
    }
  };

  return (
    <div className={`${props.isClicked ? Styles.mainDivNone : Styles.mainDiv}`}>
      <div className={Styles.upperDiv}>
        <img className={Styles.Logo} src={Logo} alt="logo" />
        <div className={Styles.FirstTitlePDiv}>
          <h1 className={Styles.FirstTitle}>Exquisite dining since 1989</h1>
          <p className={Styles.FirstP}>
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
        </div>
        <button onClick={props.setIsClicked} className={Styles.FirstButton}>
          Book a Table
        </button>
      </div>
      <div className={Styles.SecondDiv}>
        <img
          className={Styles.Img1}
          src={Img1}
          alt="Enjoyable place for all the family"
        />
        <img
          className={Styles.Img1Tablet}
          src={Img1Tablet}
          alt="Enjoyable place for all the family"
        />
        <img
          className={Styles.Img1Desktop}
          src={Img1Desktop}
          alt="Enjoyable place for all the family"
        />
        <img
          className={Styles.CurveTopRight}
          src={CurveTopRight}
          alt="CurveTopRight"
        />
        <div className={Styles.SecondTitlePDiv}>
          <img src={Line} alt="line" />
          <h1 className={Styles.SecondTitle}>
            Enjoyable place for all the family
          </h1>
          <p className={Styles.SecondP}>
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>
      <div className={Styles.ThirdDiv}>
        <img
          className={Styles.Img2}
          src={Img2}
          alt="The most locally sourced food"
        />
        <img
          className={Styles.Img2Tablet}
          src={Img2Tablet}
          alt="The most locally sourced food"
        />
        <img
          className={Styles.Img2Desktop}
          src={Img2Desktop}
          alt="The most locally sourced food"
        />
        <div className={Styles.ThirdTitlePDiv}>
          <img src={Line} alt="line" />
          <h1 className={Styles.ThirdTitle}>The most locally sourced food</h1>
          <p className={Styles.ThirdP}>
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </p>
        </div>
        <img className={Styles.Lines} src={Lines} alt="Lines" />
        <img
          className={Styles.CurveTopLeft}
          src={CurveTopLeft}
          alt="CurveTopLeft"
        />
      </div>
      <div className={Styles.FourthDiv}>
        <div className={Styles.FourthTitlePDiv}>
          <img src={Line} alt="line" />
          <h1 className={Styles.FourthTitle}>A few highlights from our menu</h1>
          <p className={Styles.FourthP}>
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favorites. Our menu is revamped every season.
          </p>
        </div>
        <div className={Styles.LongDiv}>
          <div className={Styles.FirstSmallDiv}>
            <img
              className={Styles.Img3}
              src={Img3}
              alt="Seared Salmon Fillet"
            />
            <img
              className={Styles.Img3Tablet}
              src={Img3Tablet}
              alt="Seared Salmon Fillet"
            />
            <img className={Styles.ThirdLine} src={SecondLine} alt="line" />
            <div className={Styles.FifthTitlePDiv}>
              <h1 className={Styles.FifthTitle}>Seared Salmon Fillet</h1>
              <p className={Styles.FifthP}>
                Our locally sourced salmon served with a refreshing buckwheat
                summer salad.
              </p>
            </div>
          </div>
          <div className={Styles.longLine}></div>
          <div className={Styles.SecondSmallDiv}>
            <img
              className={Styles.Img4}
              src={Img4}
              alt="Rosemary Filet Mignon"
            />
            <img
              className={Styles.Img4Tablet}
              src={Img4Tablet}
              alt="Rosemary Filet Mignon"
            />
            <img className={Styles.ThirdLine} src={SecondLine} alt="line" />
            <div className={Styles.SixthTitlePDiv}>
              <h1 className={Styles.SixthTitle}>Rosemary Filet Mignon</h1>
              <p className={Styles.SixthP}>
                Our prime beef served to your taste with a delicious choice of
                seasonal sides.
              </p>
            </div>
          </div>
          <div className={Styles.longLine}></div>
          <div className={Styles.ThirdSmallDiv}>
            <img
              className={Styles.Img5}
              src={Img5}
              alt="Summer Fruit Chocolate Mousse"
            />
            <img
              className={Styles.Img5Tablet}
              src={Img5Tablet}
              alt="Summer Fruit Chocolate Mousse"
            />
            <img className={Styles.ThirdLine} src={SecondLine} alt="line" />
            <div className={Styles.SeventhTitlePDiv}>
              <h1 className={Styles.SeventhTitle}>
                Summer Fruit Chocolate Mousse
              </h1>
              <p className={Styles.SeventhP}>
                Creamy mousse combined with summer fruits and dark chocolate
                shavings.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.FifthDiv}>
        <img
          ref={ChangeRefs.imgChanger}
          className={Styles.Img6}
          src={Img6}
          alt="Family Gathering"
        />
        <img
          ref={ChangeRefs.imgChanger2}
          className={Styles.Img6Tablet}
          src={Img6Tablet}
          alt="Family Gathering"
        />
        <img
          ref={ChangeRefs.imgChanger3}
          className={Styles.Img6Desktop}
          src={Img6Desktop}
          alt="Family Gathering"
        />
        <img
          className={Styles.SecondCurveTopRight}
          src={CurveTopRight}
          alt="CurveTopRight"
        />
        <img className={Styles.SecondLines} src={Lines} alt="Lines" />
        <div className={Styles.FromSlidesToButton}>
          <div className={Styles.SlidesDiv}>
            <h1
              className={
                classChanger === 1 ? Styles.SlideActive : Styles.SlideOne
              }
              onClick={() => {
                handleClick(1);
                handleChanger();
                PositionChanger();
              }}
            >
              FAMILY GATHERING
            </h1>
            <img
              ref={Positions}
              className={Styles.SecondLine}
              src={SecondLine}
              alt="line"
            />
            <h1
              className={
                classChanger === 2 ? Styles.SlideActive : Styles.SlideTwo
              }
              onClick={() => {
                handleClick(2);
                handleChanger2();
                PositionChanger2();
              }}
            >
              SPECIAL EVENTS
            </h1>
            <h1
              className={
                classChanger === 3 ? Styles.SlideActive : Styles.SlideThree
              }
              onClick={() => {
                handleClick(3);
                handleChanger3();
                PositionChanger3();
              }}
            >
              SOCIAL EVENTS
            </h1>
          </div>
          <div className={Styles.EighthTitlePDiv}>
            <h1 ref={ChangeRefs.h1Changer} className={Styles.EighthTitle}>
              Family Gathering
            </h1>
            <p ref={ChangeRefs.pChanger} className={Styles.EighthP}>
              We love catering for entire families. So please bring everyone
              along for a special meal with your loved ones. We’ll provide a
              memorable experience for all.
            </p>
            <button
              onClick={props.setIsClicked}
              className={Styles.SecondButton}
            >
              Book a Table
            </button>
          </div>
        </div>
      </div>
      <div className={Styles.SixthDiv}>
        <h1 className={Styles.NinthTitle}>Ready to make a reservation?</h1>
        <button onClick={props.setIsClicked} className={Styles.ThirdButton}>
          Book a Table
        </button>
      </div>
      <div className={Styles.SeventhDiv}>
        <img className={Styles.SecondLogo} src={Logo} alt="logo" />
        <div className={Styles.InfoDiv}>
          <div className={Styles.FirstSmallInfoDiv}>
            <span className={Styles.FirstInfo}>Marthwaite, Sedbergh</span>
            <span className={Styles.FirstInfo}>Cumbria</span>
            <span className={Styles.FirstInfo}>+00 44 123 4567</span>
          </div>
          <div className={Styles.SecondSmallInfoDiv}>
            <span className={Styles.SecondInfo}> OPEN TIMES</span>
            <span className={Styles.SecondInfo}>
              MON - FRI: 09:00 AM - 10:00 PM SAT - SUN: 09:00 AM - 11:30 PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

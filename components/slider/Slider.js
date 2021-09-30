import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import theme from "../../styles/Theme";

const Slider = (props) => {
  const { children, SperView, controls } = props;
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slidesPerView: SperView || 1,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {children}
        </div>
        {slider && (
          <>
            <ArrowLeft
              controls={controls}
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              controls={controls}
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></div>
            );
          })}
        </div>
      )}
      <style jsx>{`
        .navigation-wrapper {
          position: relative;
        }

        .dots {
          display: flex;
          padding: 10px 0;
          justify-content: center;
        }

        .dot {
          border: none;
          width: 7px;
          height: 7px;
          background: #c5c5c5;
          border-radius: 50%;
          margin: 0 5px;
          padding: 5px;
          cursor: pointer;
        }

        .dot:focus {
          outline: none;
        }

        .dot.active {
          background: ${theme.color.mainColor};
        }
      `}</style>
    </>
  );
};

export default Slider;

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  const { controls } = props;
  return (
    <>
      <svg
        onClick={props.onClick}
        className={"arrow arrow--left" + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>

      <style jsx>{`
        .arrow {
          width: 25px;
          height: 25px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
          fill: ${theme.color.mainColor};
          cursor: pointer;
          display: none;
        }

        .arrow--left {
          left: 5px;
        }

        .arrow--disabled {
          fill: rgba(0, 0, 0, 0.5);
        }
      `}</style>

      <style jsx>{`
        @media (min-width: 1280px) {
          .arrow {
            width: 25px;
            height: 25px;
            left: 0;

            display: ${!controls ? "none" : "initial"};
          }
        }
      `}</style>
    </>
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  const { controls } = props;
  return (
    <>
      <svg
        onClick={props.onClick}
        className={"arrow arrow--right" + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>

      <style jsx>{`
        .arrow {
          width: 25px;
          height: 25px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
          fill: ${theme.color.mainColor};
          cursor: pointer;
          display: none;
        }

        .arrow--right {
          left: auto;
          right: 5px;
        }

        .arrow--disabled {
          fill: rgba(0, 0, 0, 0.5);
        }
      `}</style>

      <style jsx>{`
        @media (min-width: 1280px) {
          .arrow {
            width: 25px;
            height: 25px;
            right: 0;

            display: ${!controls ? "none" : "initial"};
          }
        }
      `}</style>
    </>
  );
}

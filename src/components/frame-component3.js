import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[221.063rem] left-[-0.062rem] bg-gray-200 w-[90.063rem] h-[61.5rem] overflow-hidden text-left text-[1.75rem] text-black font-inter ${className}`}
      id="Six_Section"
    >
      <h1 className="m-0 absolute top-[4.313rem] left-[16.75rem] text-[4.375rem] [text-decoration:underline] font-bold font-inherit text-white">
        <span>{`Unlock The `}</span>
        <span className="text-orange">Power of Code</span>
      </h1>
      <div className="absolute top-[11.438rem] left-[26.563rem] text-[1.875rem] text-gainsboro">
        Learn to Build Anything You can Imagine
      </div>
      <div className="absolute top-[15.5rem] left-[8rem] rounded-11xl bg-white w-[75.688rem] h-[4.188rem]" />
      <div className="absolute top-[16.188rem] left-[10rem] rounded-11xl bg-orange w-[8.5rem] h-[2.813rem]" />
      <div className="absolute top-[16.188rem] left-[12.375rem] [text-decoration:underline] font-medium">
        Free
      </div>
      <div className="absolute top-[16.188rem] left-[22.438rem] [text-decoration:underline] font-medium">
        New to coding
      </div>
      <div className="absolute top-[16.188rem] left-[40.938rem] [text-decoration:underline] font-medium">
        Most popular
      </div>
      <div className="absolute top-[16.188rem] left-[57.938rem] [text-decoration:underline] font-medium">
        Skill paths
      </div>
      <div className="absolute top-[16.188rem] left-[71.125rem] [text-decoration:underline] font-medium">
        Career paths
      </div>
      <img
        className="absolute top-[32.063rem] left-[0rem] w-[90.063rem] h-[29.438rem] object-cover"
        alt=""
        src="/yellow-checks-1@2x.png"
      />
      <div className="absolute top-[23.813rem] left-[35.563rem] bg-black w-[24.188rem] h-[25.75rem]" />
      <div className="absolute top-[22.188rem] left-[33.75rem] bg-gold w-[24.188rem] h-[25.75rem]" />
      <div className="absolute top-[23.813rem] left-[62.875rem] bg-black w-[24.188rem] h-[25.75rem]" />
      <div className="absolute top-[22.188rem] left-[61.063rem] bg-gold w-[24.188rem] h-[25.75rem]" />
      <div className="absolute top-[23.813rem] left-[8rem] bg-black w-[24.188rem] h-[25.75rem]" />
      <div className="absolute top-[22.188rem] left-[6.438rem] bg-gold w-[24.188rem] h-[25.75rem]" />
      <b className="absolute top-[23rem] left-[7.188rem] inline-block w-[22.625rem] h-[17rem]">
        <p className="m-0">Learn HTML</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0 text-slategray">
          This course covers the basic concepts of HTML including creating and
          structuring web pages, adding text, links, images, and more.
        </p>
      </b>
      <b className="absolute top-[23rem] left-[34.563rem] inline-block w-[22.625rem] h-[17rem]">
        <p className="m-0">Learn CSS</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0 text-slategray">
          This course explores advanced topics in HTML5 and CSS3, including
          animations, transitions, and layout techniques
        </p>
      </b>
      <h3 className="m-0 absolute top-[23rem] left-[61.813rem] text-inherit font-bold font-inherit inline-block w-[22.625rem] h-[17rem]">
        <p className="m-0">Responsive Web design</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0 text-slategray">
          This course teaches responsive web design techniques, allowing web
          pages to adapt to different devices and screen sizes
        </p>
      </h3>
      <div className="absolute top-[52.875rem] left-[26.188rem] rounded-t-11xl rounded-br-11xl rounded-bl-none bg-gray-200 w-[16.875rem] h-[4.25rem]" />
      <h3 className="m-0 absolute top-[54rem] left-[27.25rem] text-inherit font-bold font-inherit text-white inline-block w-[16.75rem] h-[4.125rem]">
        <span className="[text-decoration:underline]">Try it Yourself</span>
        {` ->`}
      </h3>
      <div className="absolute top-[52.875rem] left-[45rem] rounded-t-11xl rounded-br-11xl rounded-bl-none bg-gold w-[14.438rem] h-[4.25rem]" />
      <h3 className="m-0 absolute top-[54.125rem] left-[47.125rem] text-inherit [text-decoration:underline] font-bold font-inherit inline-block w-[16.75rem] h-[4.125rem]">
        Learn More
      </h3>
      <b className="absolute top-[42.5rem] left-[6.438rem]">
        ------------------------------
      </b>
      <b className="absolute top-[44.625rem] left-[7.875rem] text-white whitespace-pre-wrap">
        Beginner 6 Lessons
      </b>
      <b className="absolute top-[44.625rem] left-[35.188rem] text-white whitespace-pre-wrap">
        Beginner 6 Lessons
      </b>
      <b className="absolute top-[44.625rem] left-[62.875rem] text-white whitespace-pre-wrap">
        Beginner 6 Lessons
      </b>
      <b className="absolute top-[42.5rem] left-[34.313rem]">
        ------------------------------
      </b>
      <b className="absolute top-[42.5rem] left-[61.063rem]">
        ------------------------------
      </b>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;

import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[183.563rem] left-[-0.125rem] bg-white w-[90.25rem] h-[37.5rem] overflow-hidden text-left text-[1.25rem] text-white font-inter ${className}`}
    >
      <img
        className="absolute top-[0rem] left-[0rem] w-[90.063rem] h-[37.5rem] object-contain"
        alt=""
        src="/blue-checks-2@2x.png"
      />
      <b className="absolute top-[8.125rem] left-[41.25rem] text-gray-200 text-[3.125rem]">
        <p className="m-0">{`Begin your coding journey in `}</p>
        <p className="m-0">
          <span className="whitespace-pre-wrap">{`     seconds With EduMeet   `}</span>
          <span className="text-[5rem]">🚀</span>
        </p>
      </b>
      <div className="absolute top-[7.063rem] left-[2.063rem] [backdrop-filter:blur(400px)] rounded-11xl bg-black w-[35.125rem] h-[25.188rem] overflow-hidden">
        <div className="absolute top-[1.063rem] left-[1.688rem] rounded-[50%] bg-red w-[1rem] h-[0.875rem]" />
        <div className="absolute top-[1.063rem] left-[3.063rem] rounded-[50%] bg-gold w-[1rem] h-[0.875rem]" />
        <div className="absolute top-[1.063rem] left-[4.438rem] rounded-[50%] bg-mediumseagreen w-[1rem] h-[0.875rem]" />
        <b className="absolute top-[4.625rem] left-[1.938rem] inline-block w-[1.5rem] h-[17.188rem]">
          <p className="m-0 whitespace-pre-wrap">{`1       `}</p>
          <p className="m-0">2</p>
          <p className="m-0">3</p>
          <p className="m-0">4</p>
          <p className="m-0">5</p>
          <p className="m-0">6</p>
          <p className="m-0">7</p>
          <p className="m-0">8</p>
          <p className="m-0">9</p>
          <p className="m-0">10</p>
          <p className="m-0">11</p>
        </b>
        <div className="absolute top-[3.938rem] left-[4.438rem] text-[1.313rem] font-medium text-gold">
          <p className="m-0">{`const generateOTP = () => { `}</p>
          <p className="m-0 whitespace-pre-wrap">
            {" "}
            const digits = “0123456789”;
          </p>
          <p className="m-0 whitespace-pre-wrap"> const length = 6;</p>
          <p className="m-0 whitespace-pre-wrap">{`   return Array.from({ length }, (_, i) => i + 1).`}</p>
          <p className="m-0 whitespace-pre-wrap">{`       reduce((initialValue) => {`}</p>
          <p className="m-0 whitespace-pre-wrap">
            {" "}
            const randomIndex = Math.floor(Math.random
          </p>
          <p className="m-0 whitespace-pre-wrap"> ()* digits.length);</p>
          <p className="m-0 whitespace-pre-wrap">
            {" "}
            return (initailValue += digits[randomIndex]);
          </p>
          <p className="m-0">{`}, “” );`}</p>
          <p className="m-0">{`};`}</p>
          <p className="m-0">console.log(generateOTP());</p>
        </div>
      </div>
      <div className="absolute top-[16.938rem] left-[43.688rem] font-medium text-black inline-block w-[39.875rem] h-[4.438rem]">
        Experience hands on coding from day one with EduMeet. Explore curated
        Courses, Personalised learning paths, Roadmaps and a supportive
        community for a seamless coding journey.
      </div>
      <div className="absolute top-[24.625rem] left-[44.813rem] rounded-t-11xl rounded-br-11xl rounded-bl-none bg-gray-200 w-[16.875rem] h-[4.25rem]" />
      <b className="absolute top-[25.75rem] left-[45.875rem] text-[1.75rem] inline-block w-[16.75rem] h-[4.125rem]">
        <span className="[text-decoration:underline]">Try it Yourself</span>
        {` ->`}
      </b>
      <div className="absolute top-[24.625rem] left-[63.625rem] rounded-t-11xl rounded-br-11xl rounded-bl-none bg-gold w-[14.438rem] h-[4.25rem]" />
      <b className="absolute top-[25.875rem] left-[65.75rem] text-[1.75rem] [text-decoration:underline] inline-block text-black w-[16.75rem] h-[4.125rem]">
        Learn More
      </b>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;

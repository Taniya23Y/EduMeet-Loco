import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[97.438rem] left-[0.063rem] bg-white w-[90rem] h-[37.5rem] overflow-hidden text-left text-[1.25rem] text-white font-inter ${className}`}
    >
      <img
        className="absolute top-[0rem] left-[0rem] rounded-sm w-[89.938rem] h-[37.5rem] object-contain"
        alt=""
        src="/blue-checks-1@2x.png"
      />
      <div className="absolute top-[5.625rem] left-[52.688rem] [backdrop-filter:blur(400px)] rounded-11xl bg-black w-[35.125rem] h-[25.188rem] overflow-hidden">
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
        <div className="absolute top-[4.563rem] left-[4.438rem] font-medium text-gold inline-block w-[30.125rem] h-[17.188rem]">
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
      <b className="absolute top-[7.125rem] left-[2.375rem] text-gray-200 text-[3.125rem]">
        <p className="m-0">Unlock Your Coding Potential</p>
        <p className="m-0">
          <span className="whitespace-pre-wrap">{`   With Free Online Courses `}</span>
          <span className="text-[6.25rem]">🪄</span>
          <span className="text-[3.125rem]">{` `}</span>
        </p>
      </b>
      <div className="absolute top-[17.313rem] left-[4.813rem] font-medium text-black inline-block w-[39.875rem] h-[4.438rem]">
        <p className="m-0 whitespace-pre-wrap">
          Discover Your Coding Potential With Curated Collection Of Free
        </p>
        <p className="m-0">Online Courses.</p>
        <p className="m-0">
          Unlock New Skills And Opportunities On Your Journey To Mastery.
        </p>
      </div>
      <div className="absolute top-[25rem] left-[5.938rem] rounded-t-11xl rounded-br-11xl rounded-bl-none bg-gray-200 w-[16.875rem] h-[4.25rem]" />
      <h3 className="m-0 absolute top-[26.125rem] left-[7rem] text-[1.75rem] font-bold font-inherit inline-block w-[16.75rem] h-[4.125rem]">
        <span className="[text-decoration:underline]">Try it Yourself</span>
        {` ->`}
      </h3>
      <div className="absolute top-[25rem] left-[24.75rem] rounded-t-11xl rounded-br-11xl rounded-bl-none bg-gold w-[14.438rem] h-[4.25rem]" />
      <h3 className="m-0 absolute top-[26.25rem] left-[26.875rem] text-[1.75rem] [text-decoration:underline] font-bold font-inherit text-black inline-block w-[16.75rem] h-[4.125rem]">
        Learn More
      </h3>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;

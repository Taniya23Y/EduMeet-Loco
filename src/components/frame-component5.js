import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0rem] left-[0rem] w-[90rem] h-[50.188rem] overflow-hidden text-left text-[1.438rem] text-white font-inter ${className}`}
    >
      <div className="absolute top-[2.063rem] left-[4.875rem] rounded-[50%] bg-orange w-[6rem] h-[6rem]" />
      <img
        className="absolute top-[2.563rem] left-[5.188rem] w-[5.438rem] h-[5.063rem] object-cover"
        alt=""
        src="/Logo@2x.png"
      />
      <div className="absolute top-[4.25rem] left-[25.438rem] font-medium">
        Home
      </div>
      <div className="absolute top-[4.25rem] left-[32.438rem] font-medium">{`Catelog >`}</div>
      <div className="absolute top-[4.25rem] left-[42.188rem] [text-decoration:underline] font-medium">
        About us
      </div>
      <div className="absolute top-[4.25rem] left-[51.813rem] font-medium">
        Contact
      </div>
      <img
        className="absolute top-[3.563rem] left-[63.813rem] rounded-xl w-[10rem] h-[3.063rem]"
        alt=""
        src="/login-button.svg"
      />
      <div className="absolute top-[4.125rem] left-[66.75rem] text-[1.688rem] text-black inline-block w-[6.313rem]">{`Login `}</div>
      <img
        className="absolute top-[3.563rem] left-[75rem] w-[10rem] h-[3.063rem]"
        alt=""
        src="/signup-button.svg"
      />
      <div className="absolute top-[4rem] left-[77rem] text-[1.688rem] text-black">
        Sign Up
      </div>
      <div className="absolute top-[24.188rem] left-[14.375rem] text-[1.875rem] font-light text-darkgray text-center inline-block w-[61.625rem] h-[9.563rem]">
        <p className="m-0">
          EduMeet is at the forefront of driving innovation in online education.
          We're passionate about creating a brighter future by offering
          cutting-edge courses, leveraging emerging technologies, and nurturing
          a vibrant learning community.
        </p>
      </div>
      <b className="absolute top-[13.875rem] left-[16.938rem] text-[2.688rem] inline-block w-[56.125rem] h-[3.638rem] [transform:_rotate(-0.1deg)] [transform-origin:0_0]">
        <p className="m-0">Driving Innovation in Online Education for a</p>
        <p className="m-0 whitespace-pre-wrap">{`                          `}</p>
      </b>
      <b className="absolute top-[17.5rem] left-[28.625rem] text-[4.375rem] inline-block text-gold w-[33.063rem] h-[5.188rem]">
        Brighter Future
      </b>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;

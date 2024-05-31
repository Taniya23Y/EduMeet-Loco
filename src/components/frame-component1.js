import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[134.938rem] left-[-0.062rem] bg-gray-200 w-[90.063rem] h-[48.625rem] overflow-hidden text-left text-[3.125rem] text-white font-inter ${className}`}
      id="four_section"
    >
      <h1 className="m-0 absolute top-[7.188rem] left-[5.063rem] text-inherit font-bold font-inherit text-gold">
        <p className="m-0">Your Free resources</p>
        <p className="m-0">{` Path -> EduMeet`}</p>
      </h1>
      <div className="absolute top-[16.75rem] left-[5.063rem] text-[1.375rem] font-medium whitespace-pre-wrap inline-block w-[33.875rem] h-[4.375rem]">
        EduMeet is an aggregator of multimedia educational materials form around
        the websites.
      </div>
      <div className="absolute top-[29.15rem] left-[5.063rem] text-[1.563rem] font-medium [transform:_rotate(-0.3deg)] [transform-origin:0_0]">
        Choose Your category:
      </div>
      <div className="absolute top-[31.75rem] left-[5.063rem] text-[1.125rem] font-medium">
        Documents
      </div>
      <div className="absolute top-[31.75rem] left-[16.063rem] text-[1.125rem] font-medium">
        Videos
      </div>
      <div className="absolute top-[31.75rem] left-[25.75rem] text-[1.125rem] font-medium">
        Tutorials
      </div>
      <div className="absolute top-[22.5rem] left-[10.063rem] rounded-t-11xl rounded-br-11xl rounded-bl-none bg-gold w-[14.438rem] h-[4.25rem]" />
      <div className="absolute top-[34.313rem] left-[6.188rem] rounded-[50%] bg-gold w-[4.188rem] h-[4.375rem]" />
      <div className="absolute top-[34.313rem] left-[15.813rem] rounded-[50%] bg-gold w-[4.188rem] h-[4.375rem]" />
      <div className="absolute top-[34.313rem] left-[26.25rem] rounded-[50%] bg-gold w-[4.188rem] h-[4.375rem]" />
      <b className="absolute top-[34.938rem] left-[26.75rem]">📝</b>
      <b className="absolute top-[34.813rem] left-[16.313rem]">📹</b>
      <b className="absolute top-[34.813rem] left-[6.75rem] inline-block w-[3.063rem] h-[3.438rem]">
        🗒️
      </b>
      <h3 className="m-0 absolute top-[23.75rem] left-[12.188rem] text-[1.75rem] font-bold font-inherit text-black inline-block w-[16.75rem] h-[4.125rem]">
        <span className="[text-decoration:underline]">Start Now</span>
        {` ->`}
      </h3>
      <div className="absolute top-[4.75rem] left-[45.063rem] rounded-[50%] bg-orange w-[2.375rem] h-[2.438rem]" />
      <div className="absolute top-[30.438rem] left-[46.25rem] rounded-[50%] bg-mediumseagreen w-[2.375rem] h-[2.438rem]" />
      <div className="absolute top-[19.813rem] left-[60.438rem] rounded-[50%] bg-lightslategray w-[2.375rem] h-[2.438rem]" />
      <div className="absolute top-[1.563rem] left-[85.375rem] rounded-[50%] bg-indianred w-[2.375rem] h-[2.438rem]" />
      <div className="absolute top-[36.25rem] left-[85.375rem] rounded-[50%] bg-powderblue w-[2.375rem] h-[2.438rem]" />
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;

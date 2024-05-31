import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[0rem] left-[0rem] rounded-tl-xl rounded-tr-none rounded-b-xl w-[90rem] h-[50.188rem] overflow-hidden text-left text-[1.375rem] text-white font-inter lg:w-[1440rem] lg:h-[803rem] ${className}`}
      id="Hero_section"
    >
      <div className="absolute top-[2.063rem] left-[4.125rem] rounded-[50%] bg-orange w-[6rem] h-[6rem]" />
      <img
        className="absolute top-[2.563rem] left-[4.438rem] w-[5.438rem] h-[5.063rem] object-cover"
        alt="logo"
        src="/Logo@2x.png"
      />
      <h4
        className="m-0 absolute top-[4.25rem] left-[24.688rem] text-inherit [text-decoration:underline] font-medium font-inherit"
        id="home"
      >
        Home
      </h4>
      <h4
        className="m-0 absolute top-[4.25rem] left-[31.688rem] text-inherit font-medium font-inherit"
        id="catelog"
      >{`Catelog >`}</h4>
      <h4
        className="m-0 absolute top-[4.25rem] left-[41.438rem] text-inherit font-medium font-inherit"
        id="about"
      >
        About us
      </h4>
      <h4
        className="m-0 absolute top-[4.25rem] left-[51.063rem] text-inherit font-medium font-inherit"
        id="contact"
      >
        Contact
      </h4>
      <img
        className="absolute top-[3.563rem] left-[63.063rem] rounded-xl w-[10rem] h-[3.063rem]"
        alt=""
        src="/login-button.svg"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[4.125rem] left-[66rem] text-[1.625rem] font-inter text-black text-left inline-block w-[6.313rem]">{`Login `}</button>
      <img
        className="absolute top-[3.563rem] left-[74.25rem] w-[10rem] h-[3.063rem]"
        alt=""
        src="/signup-button.svg"
      />
      <div className="absolute top-[4rem] left-[76.25rem] text-[1.625rem] text-black">
        Sign Up
      </div>
      <div className="absolute top-[14.438rem] left-[35.438rem] text-[1.313rem] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Streamline Your Coding Journey
      </div>
      <div className="absolute top-[17.938rem] left-[16.938rem] font-extrabold text-orange inline-block w-[59.125rem] h-[18.688rem] [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] text-[5.063rem]">
        <p className="m-0 whitespace-pre-wrap"> LEARN THE SKILL YOU</p>
        <p className="m-0 whitespace-pre-wrap">{`       NEED TO SUCEED      `}</p>
        <p className="m-0 text-[3.75rem]">
          <span className="text-[3.75rem] whitespace-pre-wrap">{`              `}</span>
          <span className="text-[5.063rem]">WITH</span>
          <span className="whitespace-pre-wrap">{`  `}</span>
        </p>
        <p className="m-0 text-[3.75rem] whitespace-pre-wrap">{`                         `}</p>
      </div>
      <img
        className="absolute top-[31rem] left-[45rem] rounded-11xl w-[11.313rem] h-[4.063rem] object-cover"
        alt=""
        src="/logo_img1@2x.png"
      />
      <h3 className="m-0 absolute top-[38.563rem] left-[20.188rem] text-[1.813rem] font-light font-inherit">
        🌟Now learning from anywhere, and build your bright career.🌟
      </h3>
      <div className="absolute top-[31.25rem] left-[58.313rem] rounded-11xl bg-plum w-[11.313rem] h-[4.063rem]" />
      <div className="absolute top-[31.625rem] left-[59.938rem] font-extrabold text-black inline-block w-[10.688rem] h-[4.563rem] text-[2.813rem]">
        <span>DEMO</span>
        <span className="text-[2.5rem]">{` `}</span>
        <span className="text-[2.188rem]">️</span>
      </div>
      <img
        className="absolute top-[31.625rem] left-[66.563rem] w-[21.075rem] h-[18.575rem] object-contain"
        alt=""
        src="/arrowpurple@2x.png"
      />
      <img
        className="absolute top-[40.356rem] left-[24.031rem] w-[45.45rem] h-[2.094rem] object-contain"
        alt=""
        src="/pinkline.svg"
      />
    </section>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;

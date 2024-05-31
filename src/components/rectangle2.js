import PropTypes from "prop-types";

const Rectangle2 = ({ className = "" }) => {
  return <div className={`w-[74px] bg-thistle-100 h-14 ${className}`} />;
};

Rectangle2.propTypes = {
  className: PropTypes.string,
};

export default Rectangle2;

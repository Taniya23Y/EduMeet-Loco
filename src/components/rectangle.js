import PropTypes from "prop-types";

const Rectangle = ({ className = "" }) => {
  return <div className={`w-[74px] bg-orange h-14 ${className}`} />;
};

Rectangle.propTypes = {
  className: PropTypes.string,
};

export default Rectangle;

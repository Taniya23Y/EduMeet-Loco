import PropTypes from "prop-types";

const Rectangle1 = ({ className = "" }) => {
  return <div className={`w-[74px] bg-plum h-14 ${className}`} />;
};

Rectangle1.propTypes = {
  className: PropTypes.string,
};

export default Rectangle1;

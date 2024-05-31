import PropTypes from "prop-types";

const FrameOutsider = ({ className = "" }) => {
  return (
    <div
      className={`w-[868px] bg-gray-400 max-w-full h-[670px] overflow-hidden ${className}`}
    />
  );
};

FrameOutsider.propTypes = {
  className: PropTypes.string,
};

export default FrameOutsider;

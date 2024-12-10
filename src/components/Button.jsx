import clsx from "clsx";

const Button = ({ onClick, children, className, color }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-4 py-2 rounded-md font-semibold transition-colors duration-200 border focus:outline-none focus:ring-2",
        color, // Apply the color class directly
        className // Merge any additional classes
      )}
    >
      {children}
    </button>
  );
};

export default Button;
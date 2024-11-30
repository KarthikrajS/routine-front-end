// components/Button.jsx

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-semibold transition-colors duration-200 
        bg-primary text-light dark:bg-secondary dark:text-dark 
        hover:bg-primary-dark dark:hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary 
        ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

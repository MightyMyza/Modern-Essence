const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`py-3 px-4 rounded-lg min-w-36 text-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

import "../index.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  color: "green" | "yellow" | "red" | "blue";
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, color, onClick, ...rest }) => {
  const colorStyles = {
    green:
      "bg-customGreen hover:bg-green-800 focus:ring-green-300",
    yellow:
      "bg-customYellow hover:bg-yellow-800 focus:ring-yellow-300",
    red: "bg-customRed hover:bg-red-800 focus:ring-red-300",
    blue: "bg-customBlue hover:bg-blue-800 focus:ring-blue-300",
  };

  return (
    <button
      className={`focus:outline-none text-white font-semibold rounded-lg text-sm p-4 me-2 mb-2 flex-grow mx-2 ${colorStyles[color]}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

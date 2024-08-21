import "../index.css";

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string;
  level: 1 | 2;
}

const Header: React.FC<HeaderProps> = ({ children, level, ...rest }) => {

  if (level === 1) {
    return (
      <h2 className="text-4xl font-bold text-customBlack" {...rest}>
        {children}
      </h2>
    );
  }

  return (
    <h4 className="text-2xl font-bold text-customBlack" {...rest}>
      {children}
    </h4>
  );
};

export default Header;

import "../index.css";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, ...rest }) => {
  return <div className="container p-2" {...rest}>{children}</div>;
}

export default Container;
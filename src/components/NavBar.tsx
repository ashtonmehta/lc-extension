import { useAppSelector } from "../app/hooks";

const NavBar: React.FC = () => {
  const username = useAppSelector((state) => state.authReducer.username);

  const handleCloseClick = () => {
    window.close();
  };

  return (
    <nav className="bg-customBlack p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-customWhite text-xl font-semibold">LeetCode Tracker</h1>
        <p className="text-customWhite text-l font-normal">{username}</p>
        <button className="text-customWhite text-xl font-semibold" onClick={() => handleCloseClick()}>X</button>
      </div>
    </nav>
  );
};

export default NavBar;

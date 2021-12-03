import pulogo from "../assets/images/pulogo.png"
const Header = () => {
  return (
    <div className="flex justify-between fixed w-1/2 z-50 left-3 mt-16">
      <img src={pulogo} alt="header logo" />
    </div>
  );
};

export default Header;

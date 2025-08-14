import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-black text-white">
      <p className="text-gray-400 text-[10px] md:text-[16px] p-4  text-center tracking-wider">
        © Developed by{" "}
        <span className="text-gray-100">Akhmad Syaukani Akbar</span> Powered by
        React
      </p>
    </footer>
  );
}

export default Footer;

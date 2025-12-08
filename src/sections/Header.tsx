import { FaXTwitter, FaGithub, FaLinkedin, FaHouse, FaRegFile } from "react-icons/fa6";

export const Header = () => {
  return (
    <div className="flex justify-center w-full fixed top-0 pt-4 z-20">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">

        {/* Home Icon (1st) */}
        <a
          href="#"
          className="nav-item flex items-center justify-center text-xl"
        >
          <FaHouse />
        </a>

        <a
          href="https://x.com/farukolawale3?s=11"
          target="_blank"
          className="nav-item flex items-center justify-center text-xl"
        >
          <FaXTwitter />
        </a>

        <a
          href="https://github.com/faruk-olawale"
          target="_blank"
          className="nav-item flex items-center justify-center text-xl"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/faruk-ismail-4812213a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          className="nav-item flex items-center justify-center text-xl"
        >
          <FaLinkedin />
        </a>

        <a
          href="/cv"
          target="_blank"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 flex items-center justify-center text-xl"
        >
          <FaRegFile className="text-black" />
        </a>

      </nav>
    </div>
  );
};

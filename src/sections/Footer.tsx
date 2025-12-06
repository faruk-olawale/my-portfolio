import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const footerLinks = [
  { icon: FaXTwitter, href: "https://x.com/farukolawale3?s=11" },
  { icon: FaGithub, href: "https://github.com/faruk-olawale " },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/faruk-ismail-4812213a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { icon: FaInstagram, href: "#" },
];

export const Footer = () => {
  return (
    <footer>
      <div className="container max-w-5xl mx-auto px-4">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex gap-6">
            {footerLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <a href={link.href} key={i} className="inline-flex items-center gap-1.5">
                  <Icon className="text-white size-5" />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
};

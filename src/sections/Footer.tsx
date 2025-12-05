import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"


const footerLinks = [
  {
    title:'X',
    href:'#',
  },
  {
    title:'Github',
    href:'#',
  },
  {
    title:'linkdIn',
    href:'#',
  },
  {
    title:'Instagram',
    href:'#',
  },
]
export const Footer = () => {
  return (
  <footer>
   <div className="container max-w-5xl mx-auto px-4">
    <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
      <div className="text-white/40">&copy; 2025. All rights reserved.</div>
      <nav className="flex gap-6">
        {footerLinks.map(link => (
          <a href="#" key={link.title} className="inline-flex items-center gap-1.5">
            <span className="font-semibold">{link.title}</span>
            <ArrowUpRightIcon className="size-4"/>
            </a>
        ))}
      </nav>
      <div></div>
    </div>

   </div>
  </footer>
  );
};

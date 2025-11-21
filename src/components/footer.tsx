import { Twitter, Instagram, Facebook, Github, Phone } from "lucide-react";
import Link from "next/link";
import { Container, MainLogo } from ".";

const socials = [
  { icon: <Twitter />, to: "https://x.com/" },
  { icon: <Instagram />, to: "https://www.instagram.com/" },
  { icon: <Facebook />, to: "https://www.facebook.com/" },
  { icon: <Github />, to: "https://github.com/" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F9F4E2] pt-10 pb-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center  justify-between gap-8">
          <MainLogo />

          <nav>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-10 text-center md:text-left">
              <li className="text-[#414141] text-[12px] hover:opacity-70 cursor-pointer">
                Contacts
              </li>
              <li className="text-[#414141] text-[12px] hover:opacity-70 cursor-pointer">
                Vacancies
              </li>
              <li className="text-[#414141] text-[12px] hover:opacity-70 cursor-pointer">
                Personal data processing policy
              </li>
            </ul>
          </nav>

          <ul className="flex gap-4">
            {socials.map((s, idx) => (
              <Link href={s.to} key={idx} target="_blank">
                <li className="hover:opacity-70">{s.icon}</li>
              </Link>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Phone />
            <p className="text-[#414141] hover:opacity-70">1 122 33 44 55</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

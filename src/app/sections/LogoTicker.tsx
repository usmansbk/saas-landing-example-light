import acmeLogo from "@/assets/logos/logo-acme.png";
import apexLogo from "@/assets/logos/logo-apex.png";
import celestialLogo from "@/assets/logos/logo-celestial.png";
import echoLogo from "@/assets/logos/logo-echo.png";
import pulseLogo from "@/assets/logos/logo-pulse.png";
import quantumLogo from "@/assets/logos/logo-quantum.png";
import Image from "next/image";

const logos = [
  {
    name: "Acme logo",
    image: acmeLogo,
  },
  {
    name: "Apex logo",
    image: apexLogo,
  },
  {
    name: "Celestial logo",
    image: celestialLogo,
  },
  {
    name: "Echo logo",
    image: echoLogo,
  },
  {
    name: "Pulse logo",
    image: pulseLogo,
  },
  {
    name: "Quantum logo",
    image: quantumLogo,
  },
];

export default function LogoTicker() {
  return (
    <div className="py-8 mb:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            {logos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.image}
                alt={logo.name}
                className="logo-ticker-image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

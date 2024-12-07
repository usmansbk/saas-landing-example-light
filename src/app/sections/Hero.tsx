import ArrowRight from "@/assets/icons/arrow-right.svg";
import cogImage from "@/assets/images/cog.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_66%)]">
      <div className="container">
        <div>
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            Version 2.0 is here
          </div>
          <h1 className="text-5xl tracking-tighter font-bold bg-gradient-to-b from-black to-[#001354] text-transparent bg-clip-text mt-6">
            Pathway to productivity
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text inline-flex items-center gap-1">
              <span>Learn more</span>
              <ArrowRight className="h-5 w-5 inline-flex justify-center items-center" />
            </button>
          </div>
        </div>
        <div className="mt-20">
          <Image src={cogImage} alt="Cog image" />
        </div>
      </div>
    </section>
  );
}

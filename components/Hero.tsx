import { Button } from "@/components/ui/button";
import Image from "next/image";
import communityIcon from "@/components/icons/hero.svg";

export default function Hero() {
  return (
    <div className="relative container mx-auto px-4 min-h-screen flex items-center">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={communityIcon}
          alt="Community Icon"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="opacity-90"
        />
      </div>

      <div className="relative flex flex-col md:grid md:grid-cols-2 gap-6 p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-lg">
        {/* Headline Section */}
        <div id="headline" className="flex flex-col p-2 md:p-6">
          <span className="text-2xl md:text-5xl font-semibold text-purple-700 py-2 text-center md:text-left">
            Wellness Programs<br />Made For YOU
          </span>
          <span className="text-base md:text-xl font-medium text-center md:text-left mb-4">
            Personalized Pathways to Your Best Self, Crafted By Our Experts<br />
            Just for You, Because Every Journey is Unique
          </span>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
            <Button className="shadow-2xl h-10 rounded-full bg-gradient-to-b from-purple-500 to-purple-700">
              <span className="whitespace-pre-wrap text-center text-sm font-medium text-white lg:text-lg">
                Join Now
              </span>
            </Button>
            <Button className="shadow-2xl h-10 rounded-full bg-white border border-gray-300">
              <span className="whitespace-pre-wrap text-center text-sm font-medium text-black lg:text-lg">
                Explore
              </span>
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div id="vsl" className="flex justify-center items-center px-2 md:pr-6">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 md:h-auto aspect-video rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

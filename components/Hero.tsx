import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="container mx-auto px-4 min-h-screen flex items-center">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6 py-6 md:py-10">
        {/* Headline Section */}
        <div id="headline" className="flex flex-col p-4 md:p-7">
          <span className="text-3xl md:text-5xl font-semibold text-purple-700 py-2">
            Wellness Programs<br />Made For YOU
          </span>
          <span className="text-lg md:text-xl font-medium subheadline mb-4">
            Personalized Pathways to Your Best Self, Crafted By Our Experts<br />
            Just for You, Because Every Journey is Unique
          </span>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5">
            <Button className="shadow-2xl h-10 rounded-full bg-gradient-to-b from-purple-500 to-purple-700">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                Join Now
              </span>
            </Button>
            <Button className="shadow-2xl h-10 rounded-full bg-white border border-gray-300">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black lg:text-lg">
                Explore
              </span>
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div id="vsl" className="flex justify-center items-center px-4 md:pr-8">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full md:h-auto aspect-video rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

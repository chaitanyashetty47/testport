import IntroCard from "@/components/IntroCard";
// import strength from "@/app/assets/strength-pic.jpg"
import communityIcon from "@/components/icons/hero.svg";
import Image from "next/image"


export default function Introduction() {
  // return (
  //   <section className="bg-white py-16 md:py-24">
  //     <div className="container mx-auto px-4">
  //       <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
  //         Unlock Your Full Potential with STRENTOR
  //       </h2>
  //       <p className="text-lg text-gray-600 mb-12 text-center">
  //         Welcome to STRENTOR, where physical fitness, psychological support, life coaching, and
  //         manifestation guidance converge to create a powerful journey toward self-transformation.
  //       </p>
  //       <div className="flex flex-col md:flex-row items-center justify-center gap-8">
  //         <div className="md:w-1/2">
  //           <img
  //             src={strength.src}
  //             alt="Wheelchair Person"
  //             className="w-full max-w-xl rounded-lg shadow-lg"
  //           />
  //         </div>
  //         <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
            // <IntroCard
            //   icon="holistic"
            //   title="Holistic Approach"
            //   description="To deliver a diverse range of services aimed at overall well-being"
            // />
            // <IntroCard
            //   icon="inclusivity"
            //   title="Inclusivity"
            //   description="Ensure the services are accessible and tailored to various individual needs"
            // />
            // <IntroCard
            //   icon="empowerment"
            //   title="Empowerment"
            //   description="Focus on breaking barriers and creating transformative experiences"
            // />
            // <IntroCard
            //   icon="community"
            //   title="Community"
            //   description="Ensure the services are accessible and tailored to various individual needs"
            // />
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <div className="container mx-auto px-4 py-12 ">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-purple-600 sm:text-5xl">
          Unlock Your Full Potential with STRENTOR
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Welcome to STRENTOR, where physical fitness, psychological support, life coaching, and
          manifestation guidance converge to create a powerful journey toward self-transformation
        </p>
      </div>

      <div className="grid gap-1 lg:grid-cols-2">
        <div className="space-y-9">
        <IntroCard
              icon="holistic"
              title="Holistic Approach"
              description="To deliver a diverse range of services aimed at overall well-being"
            />
            <IntroCard
              icon="inclusivity"
              title="Inclusivity"
              description="Ensure the services are accessible and tailored to various individual needs"
            />
            <IntroCard
              icon="empowerment"
              title="Empowerment"
              description="Focus on breaking barriers and creating transformative experiences"
            />
            <IntroCard
              icon="community"
              title="Community"
              description="Ensure the services are accessible and tailored to various individual needs"
            />
        </div>
        
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-lg overflow-hidden ">
            {/* <Image
              src={strength}
              alt="Person in wheelchair showing strength"
              className="object-cover w-full h-full"
              width={800}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            /> */}
            <Image
            src={communityIcon}
            alt="Community Icon"
            // layout="fill"
            width={800}
            height={800}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            objectFit="cover"
            objectPosition="top"
            className="opacity-90"
          />
          </div>
        
        </div>
      </div>
    </div>
  )
    
}
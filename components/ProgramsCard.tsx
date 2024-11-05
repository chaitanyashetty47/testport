import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Dumbbell, 
  Sparkles, 
  Brain, 
  Target,
} from 'lucide-react';

const ProgramsCard = () => {
  const programs = [
    {
      icon: Dumbbell,
      title: "Fitness Training",
      description: "Personalized workout plans and nutrition guidance to help you achieve your fitness goals",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Sparkles,
      title: "Manifesto Guidance",
      description: "Discover your purpose and create a powerful personal manifesto for success",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "Psychological Support",
      description: "Professional mental health support to enhance your emotional well-being",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "Life Coaching",
      description: "Strategic guidance to help you navigate life's challenges and achieve your dreams",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {programs.map((program, index) => {
        const IconComponent = program.icon;
        return (
          <Card 
            key={index} 
            className="group bg-white hover:shadow-xl transition-all duration-300 border-none overflow-hidden relative"
          >
            <CardContent className="p-6 flex flex-col items-center relative z-10">
              <div className={`mb-6 p-4 rounded-full bg-gradient-to-r ${program.gradient} 
                             transform group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-gray-900">
                {program.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center text-sm">
                {program.description}
              </p>
            </CardContent>
            <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} 
                           opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
          </Card>
        );
      })}
    </div>
  );
};

export default ProgramsCard;
import React, { FC } from "react";
import holisticApproachIcon from "@/components/icons/holistic.png";
import inclusivityIcon from "@/components/icons/inclusitivity.png";
import empowermentIcon from "@/components/icons/confidence.png";
import communityIcon from "@/components/icons/community.png";

type IntroCardProps = {
  icon: "holistic" | "inclusivity" | "empowerment" | "community";
  title: string;
  description: string;
};

const iconComponents: Record<IntroCardProps["icon"], React.FC> = {
  holistic: () => <img src={holisticApproachIcon.src} alt="Holistic Approach Icon" />,
  inclusivity: () => <img src={inclusivityIcon.src} alt="Inclusivity Icon" />,
  empowerment: () => <img src={empowermentIcon.src} alt="Empowerment Icon" />,
  community: () => <img src={communityIcon.src} alt="Community Icon" />,
};

const IntroCard: FC<IntroCardProps> = ({ icon, title, description }) => {
  const Icon = iconComponents[icon];

  return (
    <div className="flex items-start gap-4 rounded-lg border border-gray-900 p-4 transition-all hover:shadow-md max-w-sm mx-auto">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center">
        <Icon />
      </div>
      <div className="space-y-1 ">
        <h3 className="text-lg font-medium text-purple-600">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default IntroCard;
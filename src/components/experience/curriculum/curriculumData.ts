import { Keys } from '@/translations/Keys';

interface CurriculumData {
  title: keyof Keys;
  period: string;
  place: string;
  description: keyof Keys;
}

export const educationData: CurriculumData[] = [
  {
    title: "eduWebDevelopment",
    period: "2020 - 2021",
    place: "Academlo",
    description: "eduWebDevelopmentDescription",
  },
  {
    title: "eduComputersEngineering",
    period: "2021 - 2025",
    place: "UNIR",
    description: "eduComputersEngineeringDescription",
  },
]

export const experienceData: CurriculumData[] = [
  {
    title: "exAISD",
    period: "2021",
    place: "AISD",
    description: "exAISDDescription",
  },
  {
    title: "exAcademlo",
    period: "2022 - 2023",
    place: "Academlo",
    description: "exAcademloDescription",
  }
]

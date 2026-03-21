import BlockTitle from "@/components/_shared/block-title/block-title.component";
import useTranslate from "@/translations/useTranslate";
import { useEffect } from "react";
import TagCloud, { TagCloudOptions } from "TagCloud";

const container = "#tech-sphere";
const texts = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Angular",
  "Node",
  "Express",
  "Nest",
  "SQL",
  "MongoDB",
  "Docker",
  "AWS",
];
const options: TagCloudOptions = {
  radius: 300,
  maxSpeed: "fast",
  initSpeed: "fast",
  keep: true,
  containerClass: "sphere",

};

const TechSphere = () => {

  const translate = useTranslate();

  // to render wordcloud each time the page is reloaded
  useEffect(() => {
    if (typeof window === "undefined") return;

    // TagCloud typings expect an Element[] but this project uses a selector string.
    // Resolve the selector to elements and cast to satisfy the type checker.
    const els = Array.from(
      document.querySelectorAll(container),
    ) as unknown as Element[];
    if (els.length === 0) return;

    TagCloud(els, texts, options);
  }, []);

  return (
    <div className="main">
      <BlockTitle title={translate("myTechnologiesTitle")} />
      <span id="tech-sphere" className="sphere"></span>
    </div>
  );
};

export default TechSphere;

import { PROJECTS } from "@/constant";
import SingleCard from "./single-card";

const Card = () => {
  return (
    <div className="pt-12">
      <div
        id="projects"
        className="flex flex-col flex-wrap gap-4 px-4 md:px-8 py-16 font-sans max-w-screen-xl mx-auto "
      >
        <div>
          <h3 className="text-sm text-blue-700 font-medium">Datasets</h3>
          <h1 className="font-semibold text-2xl mt-4">
            Explore our Indigenous Language Datasets
          </h1>
          {/* <p className="text-gray-700 text-sm">subheading if availabe</p> */}
        </div>
        <h1></h1>
        <div className="flex flex-wrap gap-4">
          {PROJECTS.map((project, index) => (
            <SingleCard
              key={index}
              url={project.url}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

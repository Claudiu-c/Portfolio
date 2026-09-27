import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow, FaGithub } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(
          ({ id, title, des, img, liveLink, githubLink, iconLists }) => (
            <div
              key={id}
              className="sm:h-[41rem] h-[36rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            >
              <PinContainer title={title} href={liveLink}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[20vh] lg:h-[40vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                    <img src="/bg.png" alt="" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h2>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>

                <div className="flex items-center mt-7">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt="" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="relative z-50 flex flex-wrap gap-3 mt-6 mb-3">
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-purple px-4 py-2 text-sm text-purple hover:bg-purple hover:text-black transition-colors"
                  >
                    Check Live Site <FaLocationArrow aria-hidden="true" />
                  </a>
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                  >
                    Check GitHub Repo <FaGithub aria-hidden="true" />
                  </a>
                </div>
              </PinContainer>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default RecentProjects;

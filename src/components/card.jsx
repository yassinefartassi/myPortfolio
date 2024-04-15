import React from "react";

const projects = [
  {
    id: 1,
    imageUrl:
      "https://www.opendatasoft.com/wp-content/uploads/2023/03/Blog-thumbnail-1.png.webp",
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    link: "#",
  },
  {
    id: 2,
    imageUrl:
      "https://www.proofhub.com/articles/wp-content/uploads/2021/03/Instagantt-1024x492.png",
    title: "Inventory Dashboard",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    link: "#",
  },
  {
    id: 3,
    imageUrl:
      "https://www.netsuite.com/content/published/api/v1.1/assets/CONT64EDFE0482004E31AC7DADAFDB0A9D0F/native?cb=_cache_48ad&channelToken=6ccd9edd471f460cb6bcf3e2fe5d70a7",
    title: "Product Management systeme",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    link: "#",
  },
  // Add more project objects as needed
];

const Card = ({ project }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
      {/* Added mb-4 class for margin-bottom */}
      <a href={project.link}>
        <img className="rounded-t-lg" src={project.imageUrl} alt="" />
      </a>
      <div className="p-5">
        <a href={project.link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {project.description}
        </p>
        <a
          href={project.link}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-6">
      {/* Added gap-4, md:gap-8, lg:gap-12 classes for gap between cards */}
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;

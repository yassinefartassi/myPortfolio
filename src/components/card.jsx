import React, { useState } from "react";

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
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
      <a href={project.link}>
        <img
          className="rounded-t-lg h-40 w-full object-cover"
          src={project.imageUrl}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href={project.link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {showDetails
            ? project.description
            : project.description.slice(0, 50) + "..."}
        </p>
        <button
          onClick={toggleDetails}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {showDetails ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-6">
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;

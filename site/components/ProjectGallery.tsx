"use client";

import Image from "next/image";

import { useState } from "react";
import { PROJECTS, PROJECT_FILTERS, type ProjectCategory } from "@/lib/projects";

type Filter = "all" | ProjectCategory;

export default function ProjectGallery() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = PROJECTS.filter(
    (project) => filter === "all" || project.category.includes(filter)
  );

  return (
    <div className="gallery-block">
      <div className="filters" role="group" aria-label="Filter project gallery">
        {PROJECT_FILTERS.map((option) => (
          <button
            key={option.value}
            type="button"
            className={filter === option.value ? "filter is-active" : "filter"}
            aria-pressed={filter === option.value}
            onClick={() => setFilter(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <ul className="project-grid">
        {visible.map((project, index) => (
          <li
            key={project.id}
            className="project"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="project-media">
              <Image
                src={project.image}
                alt={project.alt}
                width={project.width}
                height={project.height}
                sizes="(max-width: 560px) calc(100vw - 40px), (max-width: 1080px) 46vw, 30vw"
                loading="lazy"
              />
            </div>
            <div className="project-meta">
              <span className="project-title">{project.title}</span>
              <span className="project-caption">{project.caption}</span>
            </div>
          </li>
        ))}
      </ul>

      <p className="gallery-note">
        {visible.length} visual concept{visible.length === 1 ? "" : "s"} shown. Verified
        TwinFinish project photography replaces these concept images before launch.
      </p>
    </div>
  );
}

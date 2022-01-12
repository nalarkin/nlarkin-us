import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'projects');

export function getSortedProjectsData() {
  // Get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the project metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as ProjectMetadata),
    };
  });
  // Sort projects by date
  return allProjectsData.sort((a, b) => {
    if (a.order < b.order) {
      return 1;
    }
    return -1;
  });
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getProjectData(id: string) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the project metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // process technlogies into a list
  const technologies = matterResult.data.technologies.split(',') as string[];
  const extraButtonHrefs = (matterResult.data.extraButtonHrefs?.split(',') ??
    []) as string[];
  const extraButtonText = (matterResult.data.extraButtonText?.split(',') ??
    []) as string[];

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as ProjectMetadata),
    technologies,
    extraButtonHrefs,
    extraButtonText,
  };
}

export interface ProjectMetadata {
  title: string;
  technologies: string;
  github: string;
  imageSrc: string;
  imageAlt: string;
  order: number;
  description: string;
  extraButtonHrefs?: string;
  extraButtonText?: string;
  belowButtonText?: string;
}

export interface ProjectData
  extends Omit<
    ProjectMetadata,
    'technologies' | 'extraButtonHrefs' | 'extraButtonText'
  > {
  id: string;
  contentHtml: string;
  technologies: string[];
  extraButtonHrefs: string[];
  extraButtonText: string[];
}

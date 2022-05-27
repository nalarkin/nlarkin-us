import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { getPlaiceholder, IGetPlaiceholderReturn } from 'plaiceholder';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'projects');

const newLineListRegex = new RegExp(/\r?\n- /);

// type ImageProps = Omit<IGetPlaiceholderReturn, 'blurhash' | 'css' | 'svg'>;
export type PlaiceholderImageProps = Omit<
  IGetPlaiceholderReturn['img'],
  'width' | 'height'
> & {
  blurDataURL: IGetPlaiceholderReturn['base64'];
};

export async function getSortedProjectsOrder(): Promise<QueryAllProjects> {
  // Get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      // Use gray-matter to parse the project metadata section
      const matterResult = matter(fileContents);
      const bullets = matterResult.content
        .split(/\r?\n- /)
        .filter((val) => val.trim().length > 0)
        .slice(0, 3);
      const technologies = matterResult.data.technologies.split(
        ','
      ) as string[];
      const extraButtonHrefs = (matterResult.data.extraButtonHrefs?.split(
        ','
      ) ?? []) as string[];
      const extraButtonText = (matterResult.data.extraButtonText?.split(',') ??
        []) as string[];

      // Combine the data with the id
      return {
        id,
        ...(matterResult.data as ProjectMetadata),
        bullets,
        technologies,
        extraButtonHrefs,
        extraButtonText,
      };
    })
    .filter((data) => data.omitFromHome !== true);

  const allProjectsWithPlaceholder: QueryAllProjects = await Promise.all(
    allProjectsData.map(async (data) => {
      const { base64, img } = await getPlaiceholder(data.imageSrc);
      const { width, height, ...rest } = img;
      return {
        ...data,
        imageProps: {
          ...rest,
          blurDataURL: base64,
        },
      };
    })
  );
  // get blur placeholder base64 url based off image

  // Sort projects by order of preference to display on home page
  return allProjectsWithPlaceholder.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    return 1;
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
    .use(remarkHtml)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // process technologies into a list
  const technologies = matterResult.data.technologies.split(',') as string[];
  const extraButtonHrefs = (matterResult.data.extraButtonHrefs?.split(',') ??
    []) as string[];
  const extraButtonText = (matterResult.data.extraButtonText?.split(',') ??
    []) as string[];

  const { base64, img } = await getPlaiceholder(matterResult.data.imageSrc);
  const { width, height, ...rest } = img;

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as ProjectMetadata),
    technologies,
    extraButtonHrefs,
    extraButtonText,
    imageProps: {
      ...rest,
      blurDataURL: base64,
    },
  };
}

// export async function getProjectDataTest(id: string) {
//   const fullPath = path.join(projectsDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');

//   // Use gray-matter to parse the project metadata section
//   const matterResult = matter(fileContents);

//   const bullets = matterResult.content
//     .split(newLineListRegex)
//     .filter((val) => val.trim().length > 0);
//   const processedContent = await remark()
//     .use(remarkHtml)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   // process technlogies into a list
//   const technologies = matterResult.data.technologies.split(',') as string[];
//   const extraButtonHrefs = (matterResult.data.extraButtonHrefs?.split(',') ??
//     []) as string[];
//   const extraButtonText = (matterResult.data.extraButtonText?.split(',') ??
//     []) as string[];

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...(matterResult.data as ProjectMetadata),
//     technologies,
//     extraButtonHrefs,
//     extraButtonText,
//     bullets,
//   };
// }

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
  omitFromHome?: boolean;
  dataTest: string;
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
  bullets: string[];
  imageProps: PlaiceholderImageProps;
}

export type QueryAllProjects = Array<Omit<ProjectData, 'contentHtml'>>;

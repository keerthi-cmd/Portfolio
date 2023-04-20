import { BreakpointType, ProjectType } from "@/types";
import tailwindConfig from '../../tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';

const fullConfig = resolveConfig(tailwindConfig);

export const getBreakpointsWidth = (breakpoint: BreakpointType) => {
    //@ts-ignore
    return fullConfig?.theme?.screens[breakpoint].slice(0, -2);
}

export const getId = () => `id${Math.random().toString(16).slice(2)}`;

export const sortByYear = (projects: ProjectType[]) => {
    return projects.sort((a, b) => b.year - a.year);
  };

  export const removeKeys = <T>(object: T, keys: Array<keyof T>) => {
    keys.forEach((field) => delete object[field]);
  };

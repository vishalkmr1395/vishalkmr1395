import { ProjectDetailInterface } from "./ProjectDetailInterface";

export interface WorkDetailInterface {
    timePeriod?: string,
    designation?: string,
    organization?: {
        name: string,
        website?: string,
        location?: string,
        logo?: string
    },
    projects?: Array<{
        name?: string,
        responsibilities?: Array<string>,
        technologies?: Array<string>,
        link?: string
    }>,
    show?: boolean
}
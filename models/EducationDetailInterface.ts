export interface EducationDetailInterface {
    graduation: string,
    specialization: string,
    year: string,
    school?: {
        name?: string,
        board?: string,
        location?: string
    },
    percentage: {
        score: number,
        units?: string
    }
}
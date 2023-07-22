import WorkExperienceData from '../../data/work-experience';

export default function handler(req, res) {
    res.status(200).json(WorkExperienceData)
}

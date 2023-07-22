import EducationData from '../../data/education';

export default function handler(req, res) {
    res.status(200).json(EducationData)
}

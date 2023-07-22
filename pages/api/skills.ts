import SkillsData from '../../data/skills';

export default function handler(req, res) {
    res.status(200).json(SkillsData)
}

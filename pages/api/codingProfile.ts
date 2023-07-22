import CodingProfileData from '../../data/codingProfile';

export default function handler(req, res) {
    res.status(200).json(CodingProfileData)
}

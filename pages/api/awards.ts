import AwardsData from '../../data/awards';

export default function handler(req, res) {
    res.status(200).json(AwardsData)
}

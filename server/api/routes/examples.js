import { Router } from 'express';
import { db } from '../../server';

const router = Router();

router.get('/', async (req, res) => {

  let equipment = await db.collection('equipment')
    .find({"examples": {$exists: true}})
    .project({
      _id: false,
      examples: true,
    })
    .toArray()

  equipment = equipment.reduce((acc, curr) => {
    return [
      ...acc,
      ...curr.examples.map(example => {
        return {
          thumb: example.thumb,
          name: example.name,
          image: example.image
        }
      })
    ]
  }, [])

  res.status(200).json(equipment)

});

export default router;
import { Router } from 'express';
import { db } from '../../server';
import { ObjectId } from 'mongodb';

const router = Router();


router.get('/', async (req, res) => {

  const equipment = await db.collection('equipment').find().project({
    name: true,
    thumb: true,
    slug: true
  }).toArray();

  res.status(200).json(equipment)
  
});


router.get('/:slug', async (req, res) => {

  const equipment = await db.collection('equipment')
    .find({ slug: req.params.slug })
    .project({
      thumb: false,
      slug: false
    })
    .toArray();

  res.status(200).json(equipment[0])

});

// router.post('/id', async (req, res) => {
//   console.log(req.body)
//   const equipment = await db.collection('equipment').findOne(ObjectId(req.body.equipment)
//     )

//   res.status(200).json(equipment)

// });


export default router;
import { Router } from 'express';
import { db } from '../../server';
import { ObjectId } from 'mongodb';
import auth from '../middlewares/auth';

const router = Router();

router.get('/', auth, async (req, res) => {

  const { email } = req.userData;

  const orders = await db.collection('orders').find({ email }).toArray();

  res.status(200).json(orders);

});


router.post('/', auth, async (req, res) => {

  const { email } = req.userData;
  const { equipment } = req.body;

  try {
    const emailCheck = await db.collection('users').findOne({email});
    if (!Object.keys(emailCheck).length) {
      return res.status(404).json({
        message: 'Нет пользователя с таким email'
      })
    }

    const equipmentCheck = await db.collection('equipment').findOne({
      _id: ObjectId(equipment)
    });
    if (!Object.keys(equipmentCheck).length) {
      return res.status(404).json({
        message: 'Нет такого оборудования'
      })
    }

    const order = await db.collection('orders').insertOne({
      email,
      equipment: equipmentCheck.name,
      slug: equipmentCheck.slug,
      date: new Date().toLocaleString({timeZone: 'Europe/Moscow', hour12: false})
    })

    res.status(201).json({
      message: 'Заказ создан',
      order: order.ops[0]
    });
  
  } catch (e) {
    res.status(500).json({
      message: e
    })
  }

});



router.delete('/', auth, async (req, res) => {

  const { id } = req.body;

  try {
    const orderCheck = await db.collection('orders').findOne({
      _id: new ObjectId(id)
    });
    if (!Object.keys(orderCheck).length) {
      return res.status(404).json({
        message: 'Такого заказа нет'
      })
    }

    await db.collection('orders').remove({
      _id: new ObjectId(id)
    })

    res.status(202).json({
      message: 'Заказ удалён'
    });
  
  } catch (e) {
    res.status(500).json({
      message: e
    })
  }

});

export default router;
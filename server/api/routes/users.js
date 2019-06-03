import { Router } from 'express';
import { db } from '../../server';
import bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../../config';
import auth from '../middlewares/auth';

const router = Router();



router.get('/', auth, async (req, res) => {

  try {
    const users = await db.collection('users').find().toArray()
    res.status(200).json(users)
  } catch(e) {
    res.status(500).json({
      error: e
    })
  }

});



router.post('/register', async (req, res) => {

  let duplicate, user, hash;

  try {
    duplicate = await db.collection('users').find({
      email: req.body.email
    }).toArray();
  } catch(e) {
    res.status(500).json({
      error: e
    })
  }

  if (duplicate.length) {
    return res.status(409).json({
      message: 'Email занят'
    })
  }

  try {
    hash = await bcrypt.hash(req.body.password, 10);
    user = await db.collection('users')
      .insertOne({
        email: req.body.email,
        password: hash,
        name: req.body.name
      })

    const token = jwt.sign(
      {
        email: user.ops[0].email,
        userId: user.ops[0]._id
      },
      JWT_KEY,
      {
        expiresIn: "1h"
      },
    )

    res.status(201).json({
      message: 'Пользователь добавлен',
      user: user.ops[0],
      token
    })

  } catch(e) {
    res.status(500).json({
      error: e
    })
  }

});



router.post('/login', async (req, res) => {

  try {
    const user = await db.collection('users').findOne({
      email: req.body.email
    })

    if (!user) {
      return res.status(401).json({
        message: 'Ошибка авторизации'
      })
    }

    const compare = await bcrypt.compare(req.body.password, user.password);

    if (!compare) {
      return res.status(401).json({
        message: 'Ошибка авторизации'
      })
    }

    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id
      },
      JWT_KEY,
      {
        expiresIn: "1h"
      },
    )
    res.status(200).json({
      message: 'Успешная авторизация',
      token: token
    })

  } catch(e) {
    res.status(500).json({
      error: e
    })
  }

  
});


router.delete('/:id', auth, async (req, res) => {

  try {
    await db.collection('users').deleteOne({
      _id: ObjectId(req.params.id)
    })
  } catch(e) {
    res.status(500).json({
      error: e
    })
  }

  res.status(200).json({
    message: 'Пользователь был удалён'
  })

});



router.get('/jwt_check', auth, async (req, res) => {

  res.status(200).json({
    message: 'Токен действителен'
  })

});



export default router;
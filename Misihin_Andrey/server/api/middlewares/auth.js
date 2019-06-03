import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../../config';

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, JWT_KEY);
    req.userData = decoded;
  } catch(e) {
    return res.status(401).json({
      message: 'Authorization failed'
    })
  }
  next();
}
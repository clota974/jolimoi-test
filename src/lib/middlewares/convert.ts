import { Application } from 'express';
import numberToRoman from '../utils/number-to-roman';

export default function convertMiddleware(app: Application) {
  app.post('/convert', (req, res) => {
    try {
      const romanNumeral = numberToRoman(req.body.value);
      return res.status(200).send({
        status: 'OK',
        payload: romanNumeral
      })
    } catch(err) {
      const message = err instanceof Error ? err.message : err;

      return res.status(400).send({
        status: 'ERROR',
        payload: message
      })
    }
  })
}
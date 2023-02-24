import { CryptoJSAesDecrypt } from '@/lib';
import axios from 'axios';

export default function handler(req, res) {
  const { type } = req.query;
  const replaceSpaceType = type.replaceAll(' ', '+');
  const splitType = replaceSpaceType.split('-');
  const secretType = {
    iv: splitType[0],
    s: splitType[1],
    ct: splitType[2],
  };

  axios
    .get(
      'v1/web/product' + CryptoJSAesDecrypt(JSON.stringify(secretType), true),
    )
    .then(response => {
      res.status(200).json(response.data.data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
}

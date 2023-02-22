import { CryptoJSAesDecrypt } from '@/lib/cryptoJS';
import axios from 'axios';

export default function handler(req, res) {
  const { zoneID } = req.query;
  const replaceSpaceZoneID = zoneID.replace(' ', '+');
  const splitZoneID = replaceSpaceZoneID.split('-');
  const secretZoneID = {
    iv: splitZoneID[0],
    s: splitZoneID[1],
    ct: splitZoneID[2],
  };

  axios
    .get(
      '/v1/web/cargo/zone/' +
        CryptoJSAesDecrypt(JSON.stringify(secretZoneID), true),
    )
    .then(response => {
      res.status(200).json(response.data.data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
}

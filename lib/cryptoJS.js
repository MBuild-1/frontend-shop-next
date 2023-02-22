/* eslint-disable @typescript-eslint/no-explicit-any */
import CryptoJS from 'crypto-js';

const CryptoJSAesJson = {
  stringify: function (cipherParams) {
    const j = {
      ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64),
    };

    if (cipherParams.iv) j.iv = cipherParams.iv.toString();
    if (cipherParams.salt) j.s = cipherParams.salt.toString();

    return JSON.stringify(j);
  },
  parse: function (jsonStr) {
    const j = JSON.parse(jsonStr);
    const cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(j.ct),
    });

    if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv);
    if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s);

    return cipherParams;
  },
};

export const CryptoJSAesDecrypt = (data, localEncrypt = false) => {
  if (process.env.NEXT_PUBLIC_APP_ENV === 'production') {
    return JSON.parse(
      CryptoJS.AES.decrypt(data, process.env.NEXT_PUBLIC_API_SECRET ?? '', {
        format: CryptoJSAesJson,
      }).toString(CryptoJS.enc.Utf8),
    );
  }

  if (localEncrypt) {
    return JSON.parse(
      CryptoJS.AES.decrypt(data, process.env.NEXT_PUBLIC_API_SECRET ?? '', {
        format: CryptoJSAesJson,
      }).toString(CryptoJS.enc.Utf8),
    );
  }

  return data;
};

export const CryptoJSAesEncrypt = data => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(data),
    process.env.NEXT_PUBLIC_API_SECRET ?? '',
    {
      format: CryptoJSAesJson,
    },
  ).toString();
};

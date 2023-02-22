import { CryptoJSAesDecrypt } from '@/lib/cryptoJS';
import { useState } from 'react';

export const useSelectCountry = () => {
  const [cargo, setCargo] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSelectChange = e => {
    const { value } = e.target;

    setLoading(true);

    fetch('/api/cargo/zone?zoneID=' + value)
      .then(res => res.json())
      .then(data => {
        setCargo(CryptoJSAesDecrypt(data));
        setLoading(false);
      });
  };

  return { cargo, handleSelectChange, loading };
};

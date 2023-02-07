import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CryptoJSAesDecrypt } from '@/lib/cryptoJS';
import jwt from 'jwt-decode';
import { addUser } from '@/redux/userSlice';
import nookies from 'nookies';
import validationLogin from './validation';
import Swal from 'sweetalert2';

export const useLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '' });
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors(validationLogin(form));
    setIsSubmit(true);

    if (Object.keys(validationLogin(form)).length === 0) {
      setIsSubmit(true);

      const formData = {
        email: form.email,
        password: form.password,
      };

      try {
        const res = await axios.post('/v1/web/auth/login', formData);
        const json = await res.data;

        const decryptData = CryptoJSAesDecrypt(await json.data);

        const jwtDecode = jwt(decryptData.access_token);

        if (decryptData.user.role !== 0) {
          setForm({ email: '', password: '' });
          return setErrors(validationLogin({ email: '', password: '' }));
        }

        nookies.set(null, 'token', decryptData.access_token, {
          maxAge: jwtDecode.exp,
          path: '/',
        });

        dispatch(addUser(decryptData.user));

        Swal.fire({
          icon: 'success',
          title: 'Login Success!',
        });

        if (decryptData.user.role === 0) {
          router.replace('/');
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          setForm({ email: '', password: '' });
          return setErrors(validationLogin({ email: '', password: '' }));
        }
      }
      setIsSubmit(false);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length !== 0 && isSubmit) {
      setIsSubmit(false);
    }
  }, [errors, isSubmit]);

  return { form, handleChange, handleSubmit, errors, isSubmit };
};

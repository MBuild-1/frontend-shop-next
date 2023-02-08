import { CryptoJSAesDecrypt } from '@/lib/cryptoJS';
import { addUser } from '@/redux/userSlice';
import axios, { AxiosError } from 'axios';
import jwt from 'jwt-decode';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import validationRegister from './validation';
import nookies from 'nookies';

export const useRegister = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors(validationRegister(form));
    setIsSubmit(true);

    if (Object.keys(validationRegister(form)).length === 0) {
      setIsSubmit(true);

      const formData = {
        name: form.name,
        email: form.email,
        password: form.password,
        password_confirmation: form.password_confirmation,
      };

      try {
        const res = await axios.post('/v1/web/auth/register', formData);
        const json = await res.data;

        const decryptData = CryptoJSAesDecrypt(await json.data);

        const jwtDecode = jwt(decryptData.access_token);

        if (decryptData.user.role !== 0) {
          setForm({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
          });
          return setErrors(
            validationRegister({
              name: '',
              email: '',
              password: '',
              password_confirmation: '',
            }),
          );
        }

        nookies.set(null, 'token', decryptData.access_token, {
          maxAge: jwtDecode.exp,
          path: '/',
        });

        dispatch(addUser(decryptData.user));

        Swal.fire({
          icon: 'success',
          title: 'Register Success!',
        });

        if (decryptData.user.role === 0) {
          router.replace('/');
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          setForm({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
          });
          return setErrors(
            validationRegister({
              name: '',
              email: '',
              password: '',
              password_confirmation: '',
            }),
          );
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

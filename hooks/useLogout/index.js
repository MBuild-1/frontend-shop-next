import axios from 'axios';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import Swal from 'sweetalert2';

export const useLogout = () => {
  const router = useRouter();

  const logout = async e => {
    e.preventDefault();

    const res = await axios.post('/v1/web/auth/logout');
    const json = await res.data;

    if ((await json.meta.code) === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Logout Success!',
      });

      destroyCookie(null, 'token');

      router.replace('/login');
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Logout Failed!',
      });
    }
  };
  return { logout };
};

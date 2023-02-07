const ValidationLogin = form => {
  const errors = {};

  if (!form.email) {
    errors.email = 'The email field is required.';
  }

  if (!form.password) {
    errors.password = 'The password field is required.';
  }

  return errors;
};

export default ValidationLogin;

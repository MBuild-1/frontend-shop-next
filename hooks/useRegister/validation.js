const validationRegister = form => {
  const errors = {};

  if (!form.name) {
    errors.name = 'The name field is required.';
  }

  if (!form.email) {
    errors.email = 'The email field is required.';
  }

  if (!form.password) {
    errors.password = 'The password field is required.';
  }

  if (!form.password_confirmation) {
    errors.password_confirmation =
      'The password confirmation field is required.';
  }

  return errors;
};

export default validationRegister;

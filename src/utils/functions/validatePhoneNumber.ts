const phoneRegex = /^(?:\+7|8)[\s\(]*9\d{2}[\)\s]*\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;

export const validatePhoneNumber = (input: string): string | undefined => {
  const digitsOnly = input.replace(/\D/g, '');
  let errorMessage;

  switch (true) {
    case digitsOnly.length !== 11:
      errorMessage = 'Номер должен содержать ровно 11 цифр';
      break;
    case !phoneRegex.test(input):
      errorMessage = 'Введите номер в формате +79XXXXXXXXX';
      break;
    default:
      return;
  }

  return errorMessage;
};

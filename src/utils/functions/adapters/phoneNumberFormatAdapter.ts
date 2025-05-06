const formattingSymbols = /[ \-\(\)]/g;

export const phoneNumberFormatAdapter = (phoneNumber: string): string | undefined => {
  if (!phoneNumber) {
    return;
  }

  let intermediateResult = phoneNumber;

  if (phoneNumber[0] === '8') {
    intermediateResult = phoneNumber.replace(/^8/, '+7');
  }

  const result = intermediateResult.replace(formattingSymbols, '');

  return result;
};

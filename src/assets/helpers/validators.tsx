export const validateInputWithNumbers = (ev: React.ChangeEvent<HTMLInputElement>) => {
  const notNumbers = /\D/g;
  const result = Number(ev.target.value.replace(notNumbers, ''));
  return result;
};

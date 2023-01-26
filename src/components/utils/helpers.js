export const experiencePeriod = (date1, date2) => {
  date1 = date1 ? new Date(date1.split('/').reverse().join('-')) : new Date();
  date2 = date2 ? new Date(date2.split('/').reverse().join('-')) : new Date();
  if (!date1.getTime()) {
    return 'Data inicial inválida';
  }
  if (date1.getTime() > date2.getTime()) {
    return 'Data final é menor que a data inicial';
  }
  let years = date2.getFullYear() - date1.getFullYear();
  let months = date2.getMonth() - date1.getMonth() + 12 * years;
  years = Math.floor(months / 12);
  months = months - years * 12;
  if (years > 0) {
    return `${date1.toLocaleString('pt-BR', { month: 'short' })} de ${date1.getFullYear()} - ${date2.toLocaleString(
      'pt-BR',
      { month: 'short' }
    )} de ${date2.getFullYear()} · ${years} ano${years > 1 ? 's' : ''} ${months} meses`;
  }
  return `${date1.toLocaleString('pt-BR', { month: 'short' })} de ${date1.getFullYear()} - ${date2.toLocaleString(
    'pt-BR',
    { month: 'short' }
  )} de ${date2.getFullYear()} · ${months} meses`;
};

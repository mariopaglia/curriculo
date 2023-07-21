const verifyMonths = (month) => {
  if (month > 1) {
    return month + ' meses';
  } else if (month === 1) {
    return month + ' mês';
  } else {
    return '';
  }
};

export const experiencePeriod = (date1, date2) => {
  date1 = date1 ? new Date(date1.split('/').reverse().join('-')) : new Date();
  let date2Text = 'Atualmente';

  if (date2) {
    date2 = new Date(date2.split('/').reverse().join('-'));
    date2Text = `${date2.toLocaleString('pt-BR', { month: 'short' })} de ${date2.getFullYear()}`;
  } else {
    date2 = new Date();
  }

  if (!date1.getTime()) {
    return 'Data inicial inválida';
  }
  if (date1.getTime() > date2.getTime()) {
    return 'Data final é menor que a data inicial';
  }

  let years = date2.getFullYear() - date1.getFullYear();
  let months = date2.getMonth() - date1.getMonth() + 12 * years + 1; // +1 para considerar o mês atual
  years = Math.floor(months / 12);
  months = Math.ceil(months - years * 12); // Use Math.ceil() para arredondar para cima

  return `${date1.toLocaleString('pt-BR', { month: 'short' })} de ${date1.getFullYear()} - ${date2Text} · ${years} ano${
    years > 1 ? 's' : ''
  } ${verifyMonths(months)}`;
};

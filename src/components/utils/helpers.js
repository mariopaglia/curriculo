const MONTHS_PER_YEAR = 12;

const formatMonths = (months) => {
  if (months > 1) {
    return `${months} meses`;
  }
  if (months === 1) {
    return '1 mês';
  }
  return '';
};

const formatYears = (years) => {
  if (years > 1) {
    return `${years} anos`;
  }
  if (years === 1) {
    return '1 ano';
  }
  return '';
};

// Builds the date in the local timezone: `new Date('YYYY-MM-DD')` is parsed as UTC
// and shifts to the previous day (and month) in Brazilian timezones.
const parseBrazilianDate = (date) => {
  const [day, month, year] = date.split('/').map(Number);
  return new Date(year, month - 1, day);
};

const formatMonthYear = (date) => `${date.toLocaleString('pt-BR', { month: 'short' })} de ${date.getFullYear()}`;

/**
 * @param {string} startDate dd/mm/yyyy
 * @param {string} [endDate] dd/mm/yyyy; empty means the position is current
 * @param {Date} [today] reference date for current positions
 */
export const experiencePeriod = (startDate, endDate, today = new Date()) => {
  const start = parseBrazilianDate(startDate);
  const end = endDate ? parseBrazilianDate(endDate) : today;

  if (Number.isNaN(start.getTime())) {
    return 'Data inicial inválida';
  }
  if (start.getTime() > end.getTime()) {
    return 'Data final é menor que a data inicial';
  }

  // Counts both the first and the last month, as LinkedIn does.
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * MONTHS_PER_YEAR + end.getMonth() - start.getMonth() + 1;
  const years = Math.floor(totalMonths / MONTHS_PER_YEAR);
  const months = totalMonths % MONTHS_PER_YEAR;

  const endText = endDate ? formatMonthYear(end) : 'o momento';
  const duration = [formatYears(years), formatMonths(months)].filter(Boolean).join(' ');

  return `${formatMonthYear(start)} - ${endText} · ${duration}`;
};

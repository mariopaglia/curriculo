/* eslint-env jest */
import { experiencePeriod } from './helpers';

describe('experiencePeriod', () => {
  it('shows the start month of the given date regardless of the timezone', () => {
    expect(experiencePeriod('01/09/2025', '31/12/2025')).toMatch(/^set\. de 2025/);
  });

  it('counts both the first and the last month, like LinkedIn', () => {
    expect(experiencePeriod('01/03/2022', '31/07/2025')).toBe('mar. de 2022 - jul. de 2025 · 3 anos 5 meses');
  });

  it('omits the months when the period is a whole number of years', () => {
    expect(experiencePeriod('01/01/2020', '31/12/2020')).toBe('jan. de 2020 - dez. de 2020 · 1 ano');
  });

  it('omits the years when the period is shorter than one year', () => {
    expect(experiencePeriod('01/01/2020', '28/02/2020')).toBe('jan. de 2020 - fev. de 2020 · 2 meses');
  });

  it('uses the reference date and "o momento" for current positions', () => {
    expect(experiencePeriod('01/09/2025', '', new Date(2026, 9, 2))).toBe('set. de 2025 - o momento · 1 ano 2 meses');
  });

  it('rejects an invalid start date', () => {
    expect(experiencePeriod('invalid', '')).toBe('Data inicial inválida');
  });

  it('rejects an end date before the start date', () => {
    expect(experiencePeriod('01/01/2025', '01/01/2024')).toBe('Data final é menor que a data inicial');
  });
});

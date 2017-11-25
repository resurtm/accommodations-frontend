export function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export function weekDay(day, month, year) {
  const weekDay = new Date(year, month - 1, day).getDay();
  return weekDay === 0 ? 7 : weekDay;
}

export function shortWeekDays() {
  return ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
}

export function monthNames() {
  return ['', 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
}

export function selectDayRange(days, day) {
  if (days.length === 0) {
    return [day]
  }
  return days[0][0] * 31 + days[0][1] < day[0] * 31 + day[1]
    ? selectDayRangeInternal(days[0], day)
    : selectDayRangeInternal(day, days[0]);
}

function selectDayRangeInternal([startMonth, startDay], [endMonth, endDay]) {
  const days = [];
  if (startMonth === endMonth) {
    for (let i = startDay; i <= endDay; i++) {
      days.push([startMonth, i]);
    }
  } else {
    for (let i = startDay; i <= 31; i++) {
      days.push([startMonth, i]);
    }
    if (Math.abs(startMonth - endMonth) > 1) {
      for (let i = startMonth + 1; i <= endMonth - 1; i++) {
        for (let j = 1; j <= 31; j++) {
          days.push([i, j]);
        }
      }
    }
    for (let i = 1; i <= endDay; i++) {
      days.push([endMonth, i]);
    }
  }
  return days;
}

/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDay {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURDAY,
  FRIDAY,
  SATURDAY,
}

function isWeekend(day: WeekDay): boolean {
  return day === WeekDay.SUNDAY || day === WeekDay.SATURDAY;
}

const getPreviousYearsInBangla = (numYears: number): string[] => {
  const currentYear = new Date().getFullYear();
  const previousYears: string[] = [];

  // Bangla numerals
  const banglaNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

  for (let i = 0; i < numYears; i++) {
    const year = currentYear - i;
    const banglaYear = year
      .toString()
      .split('')
      .map((digit) => banglaNumerals[parseInt(digit)])
      .join('');

    previousYears.push(banglaYear);
  }

  return previousYears;
};

export default getPreviousYearsInBangla;

export const convertDateFormat = (date: string | undefined | Date): string => {
  if (date === undefined) {
    return ''; // Handle the case where date is undefined
  }

  const dateObject = new Date(date);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate: string = dateObject.toLocaleDateString('en-US', options);
  return formattedDate;
};

export const convertDateFormat = (date: string | undefined | Date): string => {
  if (date === undefined) {
    return ''; // Handle the case where date is undefined
  }

  const dateObject = new Date(date);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate: string = dateObject.toLocaleDateString('en-US', options);
  return formattedDate;
};

export const convertNewDateToDbFormat = (date: any) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');

  // Create the formatted date string
  const formattedDate = year + '-' + month + '-' + day;
  return formattedDate;
};

export const getBanglaYear = (date: any) => {
  const dateObject = new Date(date);
  const year = new Intl.DateTimeFormat('bn-BD', { year: 'numeric' })?.format(dateObject);
  return year;
};

export const getBanglaMonth = (date: any) => {
  const dateObject = new Date(date);
  const month = new Intl.DateTimeFormat('bn-BD', { month: 'long' }).format(dateObject);
  return month;
};

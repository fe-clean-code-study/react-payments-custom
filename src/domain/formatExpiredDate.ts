const formatExpiredDate = (month: string, year: string) => {
  const formattedMonth = month.length === 2 ? month : "MM";
  const formattedYear = year.length === 2 ? year : "YY";

  return `${formattedMonth}/${formattedYear}`;
};

export default formatExpiredDate;

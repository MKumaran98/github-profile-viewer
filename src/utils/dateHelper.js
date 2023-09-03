export const getDateShort = ({ date, short = true, startWithDate = false }) => {
  const dateObj = new Date(date);
  if (startWithDate) {
    return `${dateObj.getDate()} ${dateObj.toLocaleString("default", {
      month: short ? "short" : "long",
    })}`;
  }
  return `${dateObj.toLocaleString("default", {
    month: short ? "short" : "long",
  })} ${dateObj.getDate()}`;
};
export const getYear = (date) => new Date(date).getFullYear();

export const getFullDate = (date) => {
  const dateObj = new Date(date);
  return `${getDateShort({ date: dateObj })}, ${getYear(dateObj)}`;
};

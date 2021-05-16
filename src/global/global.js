export const convertToDateBr = (date) => {
  if (date != null && date !== undefined) {
    const data = new Date(date);

    const day = data.getDate() < 10 ? `0${data.getDate()}` : data.getDate();
    const month =
      data.getMonth() < 9 ? `0${data.getMonth() + 1}` : data.getMonth() + 1;
    const year = data.getFullYear();

    return `${day}/${month}/${year}`;
  }
  return "-";
};

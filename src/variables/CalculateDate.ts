import moment from 'moment';

export const calculateDate = (startDate: string, endDate: string) => {
  const stringStartDate = moment(startDate).format().slice(0, 10);
  const stringEndDate = moment(endDate).format().slice(0, 10);
  const date1 = new Date(stringStartDate);
  const date2 = new Date(stringEndDate);
  const timeDifference = date2.getTime() - date1.getTime();
  const totalDays = timeDifference / (1000 * 3600 * 24);
  return {stringStartDate, stringEndDate, totalDays};
};

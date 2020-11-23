const DateFormater = (date) => {
  var date_split = new Date(date.split("/").reverse().join("-"));
  return new Date(
    date_split.getTime() + Math.abs(date_split.getTimezoneOffset() * 60000)
  );
};

export default {
  DateFormater,
};

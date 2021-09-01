import API from "../config/AxiosBase";

export const headers = () => {
  const token = localStorage.authToken;
  const bookingToken = localStorage.bookingToken;
  if (token) {
    API.defaults.headers.common["x-access-token"] = token;
    if (bookingToken) {
      API.defaults.headers.common["x-booking-token"] = bookingToken;
    }

    return API;
  } else {
    return API.defaults.headers;
  }
};

export const formatDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export function buildFormData(formData, data, parentKey) {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    Object.keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    const value = data == null ? "" : data;

    formData.append(parentKey, value);
  }
}

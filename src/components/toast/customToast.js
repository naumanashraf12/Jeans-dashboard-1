import { toast } from "react-toastify";
export const successToat = (
  message,
  closeTime = 5000,
  position = "top-right",
  hideProgressBar = false
) => {
  return toast.success(message, {
    position,
    autoClose: closeTime,
    hideProgressBar,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const infoToast = (
  message,
  closeTime = 5000,
  position = "top-right",
  hideProgressBar = false
) => {
  return toast.info(message, {
    position,
    autoClose: closeTime,
    hideProgressBar,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const ErrorToast = (
  message,
  closeTime = 5000,
  position = "top-right",
  hideProgressBar = false
) => {
  return toast.error(message, {
    position,
    autoClose: closeTime,
    hideProgressBar,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const WarningToast = (
  message,
  closeTime = 5000,
  position = "top-right",
  hideProgressBar = false
) => {
  return toast.warning(message, {
    position,
    autoClose: closeTime,
    hideProgressBar,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const DarkToast = (
  message,
  closeTime = 5000,
  position = "top-right",
  hideProgressBar = false
) => {
  return toast.dark(message, {
    position,
    autoClose: closeTime,
    hideProgressBar,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const DefaultToast = (
  message,
  closeTime = 5000,
  position = "top-right",
  hideProgressBar = false
) => {
  return toast(message, {
    position,
    autoClose: closeTime,
    hideProgressBar,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

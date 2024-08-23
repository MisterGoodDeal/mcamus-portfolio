import { GenericApiError } from "@/store/store.model";
import toast from "react-hot-toast";
import i18n from "i18next";

export const loginErrorsHandler = (error: GenericApiError) => {
  const { data } = error.error;
  switch (data.code) {
    case "ERROR_CODE_INPUT_ERROR":
      toast.error(i18n.t("login.errors.ERROR_CODE_INPUT_ERROR"));
      break;

    default:
      toast.error(i18n.t("login.errors.default"));
      break;
  }
};

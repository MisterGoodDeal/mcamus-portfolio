import { GenericApiError } from "@/store/store.model";
import toast from "react-hot-toast";
import i18n from "i18next";

export const skillsErrorsHandler = (error: GenericApiError) => {
  const { data } = error.error;
  switch (data.code) {
    default:
      toast.error(i18n.t("login.errors.default"));
      break;
  }
};

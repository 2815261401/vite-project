import axios from "axios";
import qs from "qs";

export const request = axios.create({
  baseURL: "/admin",
  paramsSerializer: function (parameters) {
    return qs.stringify(parameters, { arrayFormat: "repeat" });
  },
});

import axios from "axios";

const THREE_MINUTES = 3 * 60 * 1000;
export const baseURL = "http://127.0.0.1:8000/api";
export const BaseURL = "http://127.0.0.1:8000";

/**
 * Axios HTTP Client
 * {@link https://github.com/axios/axios#request-config Axios Request Config}
 */
const HttpClient = axios.create({
  baseURL,
  timeout: THREE_MINUTES,
});

/**
 * Pass Integito API Key in Header
 */

export { HttpClient };

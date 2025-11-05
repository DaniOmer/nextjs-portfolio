import axios from "axios";

const httpPublicClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  timeout: 4000,
});

export { httpPublicClient };

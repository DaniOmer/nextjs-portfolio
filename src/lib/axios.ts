import axios from "axios";

const httpPublicCLient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  timeout: 4000,
});

export { httpPublicCLient };

import axios from 'axios';

import { DOG_API_KEY } from "../constants/apiConstants";
import { noticeError } from "../util/reportingUtils";

const DOG_API_ROOT = 'https://api.thedogapi.com/';
const DOG_API_VERSION = 'v1';


const dogAPI = axios.create({
  baseURL: `${DOG_API_ROOT}/${DOG_API_VERSION}/`,
  headers: { 'x-api-key': DOG_API_KEY }
});


export const getDogs = async (count = 5) => {
  if (count <= 0 || count > 50) {
    noticeError('DogAPI:getDogs - Count must be between 0 and 50.');
  }

  const response = await dogAPI.get(`images/search?limit=${count}`);
  return response.data;
};

export default dogAPI;

import axios from 'axios';

import { DOG_API_KEY } from "../constants/apiConstants";
import { noticeError } from "../util/reportingUtils";

const DOG_API_ROOT = 'https://api.thedogapi.com/';
const DOG_API_VERSION = 'v1';


const dogAPI = axios.create({
  baseURL: `${DOG_API_ROOT}/${DOG_API_VERSION}/`,
  headers: { 'x-api-key': DOG_API_KEY }
});


export const getDogs = async (count = 5, breedId = null) => {
  if (count <= 0 || count > 50) {
    noticeError('DogAPI:getDogs - Count must be between 0 and 50.');
  }

  const params = [];
  params.push(`limit=${count}`);
  if (breedId) {
    params.push(`breed_id=${breedId}`);
  }

  const response = await dogAPI.get(`images/search?${params.join('&')}`);
  return response.data;
};

export const getBreeds = async (breedSearchStr = null) => {
  if (!breedSearchStr) {
    noticeError('DogAPI:getBreedId - Search string is required.');
  }

  const response = await dogAPI.get(`breeds/search?q=${breedSearchStr}`);
  return response.data;
};

export const getDogsByBreed = async (breedSearchStr = null) => {
  if (!breedSearchStr) {
    noticeError('DogAPI:getDogsByBreed - Search string is required.');
  }

  const breeds = await getBreeds(breedSearchStr);
  if (!breeds || !breeds.length) {
    return null;
  }

  // if multiple breeds, grab first assuming API returns most relevant first
  const breedId = breeds[0].id;


  const response = await getDogs(5, breedId);
  return response;
};

export default dogAPI;

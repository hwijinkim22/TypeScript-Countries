import axios from 'axios';
import { Country } from '../types/Country';

const baseUrl = "https://restcountries.com/v3.1/all";

export const getCountries = async (): Promise<Country[]> => {
  try {
    const res = await axios.get<Country[]>(baseUrl);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Axios Get Error:", error);
    throw error;
  }
};

export default getCountries;

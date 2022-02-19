import axios from 'axios';
import { API_URL } from 'constants/api';

export const fetchAllNumbers = async (url: string) => {
  try {
    const response = await axios.get(url);
    const numbers = response.data;
    return numbers;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

export const addNewNumber = async (value: string) => {
  const data = {
    id: Date.now(),
    number: value,
  };

  try {
    await axios.post(API_URL, data);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';
export const airBaseUrl = 'https://booking-com.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': '3bed496a49mshc772c975e0132e3p15fd27jsn86749bcd2c35'
    },
  });
    
  return data;
}

export const airFetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
        'X-RapidAPI-Key': '3bed496a49mshc772c975e0132e3p15fd27jsn86749bcd2c35'
    },
  });
    
  return data;
}
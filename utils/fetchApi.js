import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': '83789d048amsh2cf971a96733e64p112fa2jsn6080c82aeeb0'
    },
  });
    
  return data;
}
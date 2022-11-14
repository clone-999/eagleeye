import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': '56d48d89damsh9f502c530d7659dp1c5df5jsn7e7ba6d12a2d'
    },
  });
    
  return data;
}
import axios from 'axios';

axios.defaults.baseURL = 'https://64f4cc8c932537f4051ab678.mockapi.io';

export const fetchContacts = async () => {
  try {
    const response = await axios.get('/contacts');
    // console.log(response);
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
};

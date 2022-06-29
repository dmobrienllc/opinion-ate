import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/6ofGlxuLvchrpP6BnRyd35u47S1HUdHU',
});

const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
  },
};

export default api;

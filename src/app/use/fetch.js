import { ref } from 'vue';
import axios from 'axios';

export function useFetch(url) {
  const data = ref(null);

  axios
    .post(url)
    .then((response) => {
      if (response.data) {
        data.value = response.data;
      }
    })
    .catch(() => {});

  return data;
}

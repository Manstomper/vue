import { ref, unref } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';

export function usePostQuery(url, params = null) {
  const store = useStore();
  const data = ref(null);

  axios
    .post(unref(url), unref(params))
    .then((response) => {
      if (response.data) {
        data.value = response.data;
      }
    })
    .catch(() => {
      store.commit('addNotification', {
        key: 'axios-error',
        type: 'error',
        message: 'Failed to fetch items.',
      });
    });

  return data;
}

export function useGetQuery(url) {
  const store = useStore();
  const data = ref(null);

  axios
    .get(unref(url))
    .then((response) => {
      if (response.data) {
        data.value = response.data;
      }
    })
    .catch(() => {
      store.commit('addNotification', {
        key: 'axios-error',
        type: 'error',
        message: 'Failed to fetch items.',
      });
    });

  return data;
}

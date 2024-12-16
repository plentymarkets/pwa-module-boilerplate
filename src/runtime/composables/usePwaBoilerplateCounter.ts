import { toRefs } from 'vue';
import { useState } from '#imports';

export const usePwaBoilerplateCounter = () => {
  const state = useState('usePwaBoilerplateCounter', () => ({
    counter: 0,
  }));

  const addCounter = () => {
    state.value.counter++;
  };

  return {
    ...toRefs(state.value),
    addCounter,
  };
};

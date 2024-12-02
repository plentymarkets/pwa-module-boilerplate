<template>
  <div class="my-5">
    <UiButton @click="addCounter()">{{ $t('moduleBoilerplate.button') }}</UiButton>
    <div>Composable useCart().data.sessionId: {{ cart.sessionId }}</div>
    <div>Counter: {{ counter }}</div>
  </div>
</template>
<script setup lang="ts">
import { useCart } from '~/composables/useCart';
import { usePwaBoilerplateCounter } from '../composables/usePwaBoilerplateCounter';

const { data: cart } = useCart();
const { counter, addCounter } = usePwaBoilerplateCounter();
</script>

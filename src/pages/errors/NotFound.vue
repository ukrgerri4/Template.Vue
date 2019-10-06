<template>
	<div id="not-found">
		<h3>Are you lost?</h3>
		<span> The page you are trying to show could not be found.</span>
		<button @click="$router.push('/')">Take me back</button>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
  export default class NotFound extends Vue {}
</script>

<style scoped>
#not-found {
	display: flex;
  flex: auto;
  flex-direction: column;
}
</style>

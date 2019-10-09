<template>
  <button id="t-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TButton extends Vue {

}
</script>

<style lang="scss" scoped>
#t-button {
	box-shadow:inset 0px 0px 0px 0px #ffffff;
	background-color:transparent;
	border-radius:5px;
	border:2px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:10px 50px;
	text-decoration:none;
	text-shadow:0px 0px 50px #ffffff;
}

#t-button:hover {
	background-color:black;
}
#t-button:active {
	position:relative;
	top:1px;
}
</style>
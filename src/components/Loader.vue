<template>
  <transition name="fade-out">
    <div
      v-if="loading"
      class="loader"
    >
      <div class="loader__modal">
        <div class="loader__title">
          Loading Information
        </div>
        <v-progress-linear
          color="#707070"
          indeterminate
          rounded
          height="7"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
 .loader {
	padding: 30px;
  position: absolute;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: var(--color_white);
		opacity: 0.75;
	}

	&__modal {
		background: var(--color_white);
		box-shadow: var(--medium_shadow);
		padding: 30px;
		position: relative;
		z-index: 1;
	}

	&__title {
		color: #707070;
		margin-bottom: 20px;
		font-size: 32px;
		font-weight: 300;
    text-align: center;
	}
 }
</style>

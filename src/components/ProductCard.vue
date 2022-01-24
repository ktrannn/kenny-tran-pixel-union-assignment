<template>
  <div class="product-card inline-flex items-center gap-4 p-4 lg:p-6">
      <div class="inline-flex w-full flex-col flex-wrap">
          <div class="inline-flex flex-col">
            <div class="product-card__image-container">
              <img
                :src="getImgPath(product.imageUrl)"
                alt="Shirt"
                class="product-card__image"
              />
              <div class="product-card__button" @click="$emit('addToCart', product)">Add to cart</div>
            </div>
            <div class="text-center">{{ product.name }}</div>
            <div class="text-center">${{ product.price.toFixed(2) }}</div>
            <div class="inline-flex gap-1 justify-center mt-2">
                <!-- Img tag w/ vue kind of funky without using webpack -->
                <svg
                  class="star-rating"
                  v-for="n in 5"
                  :class="n <= product.rating ? 'star-rating--filled': 'star-rating--unfilled'"
                  :key="n"
                  @click="$emit('updateRating', n)"
                  width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <polygon id="star" points="6.91773333 6.1328 10 3.75 6.25 3.75 5 0 3.75 3.75 0 3.75 3.086 6.12293333 1.87493333 10 5.00466667 7.6 8.1276 10"></polygon>
                </svg>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImgPath( imageUrl ) {
      return require( `@/assets/images/${imageUrl}` );
    },
  },
};
</script>

<style lang="scss">
.product-card {
  background-color: var(--color_white);
  box-shadow: var(--medium_shadow);
  padding: 24px 16px;
	$root: &;

  .product-card__button {
    border-radius: 5px;
    padding: 8px 14px;
    text-align: center;
    color: var(--color_white);
    background-color: #3944bc;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: 1;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: lighten(#3944bc, 10%);
    }
  }

  &__image-container {
    position: relative;

    &:hover {

      .product-card__image {
        opacity: 0.75;
      }

      .product-card__button {
        opacity: 1;
      }
    }
  }

  &__image {
    max-width: 250px;
    transition: opacity 0.3s ease-in-out;
    will-change: opacity;
  }

  .star-rating {
    width: 15px;
    height: 15px;
    cursor: pointer;
    transition: fill 0.3s ease-in-out;
    will-change: fill;

    &--filled {
      fill: var(--color_black);

      &:hover {
        fill: lighten(#000, 50%);
      }
    }

    &--unfilled {
      fill: var(--color_light_grey_2);

      &:hover {
        fill: darken(#ececec, 20%);
      }
    }
  }
}
</style>

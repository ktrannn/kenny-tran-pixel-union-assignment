<template>
<div class="w-full inline-flex justify-center items-center mb-auto">
	<div class="wrapper p-4">
      <product-card
        v-for="(product, index) in products" :key="index"
        :product="product"
        @addToCart="cart.push( $event )"
        @updateRating="product.rating = $event"
      />
	</div>
</div>
</template>

<script>
// import axios from 'axios';
import ProductCard from '../components/ProductCard.vue';

export default {
  name: 'Home',
  components: { ProductCard },
  data() {
    return {
      products: [
        {
          name: 'Ultrafine Merino T-Shirt',
          price: 80.00,
          rating: 4,
          imageUrl: 'shirt-1.jpg',
        },
      ],
      cart: [],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.v-main__wrap {
	display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 120px 0;
}
</style>

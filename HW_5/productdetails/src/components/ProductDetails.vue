<template>
    <div>
        <img :src="product.image" />
        <p>name: {{ product.name }}</p>
        <p>price: {{ formattedPrice }}</p>
        <p v-if="product.available">Available</p>
        <p v-else>Out of stock</p>
    </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  data () {
    return {
      product:
      {
        image: require('../assets/Rexy.jpg'),
        name: 'Porsche 911 RSR 1/18',
        price: 99.99,
        available: true
      }
    }
  },
  computed: {
    formattedPrice: function () {
      return `$${this.product.price}`
    }
  }
}
</script>

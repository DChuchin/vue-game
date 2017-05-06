<template>
  <div class="admin">
    <button type="button" v-for="button in this.buttons" :id=button>{{button}}</button>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data() {
    return {
      buttons: [
        'play',
        'pause',
        'stop',
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

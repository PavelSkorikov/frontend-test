<template>
  <nuxt-link :to="to">
    <div class="aside_item">
        <i :class="icon"></i>
        <span>
          {{ text }}
        </span>
    </div>
  </nuxt-link>
</template>

<script>
    export default {
        name: "AsideItem",
      props: {
        'text': String,
        'icon': String,
        'to': String
      }
    }
</script>

<style scoped lang="scss">
  .aside_item {
    width: 100px;
    height: 80px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 24px;
  }
  .aside_item:hover {
    border: 1px solid #9AC283;
    border-radius: 5px;
    color: #9AC283;
    font-weight: bold;
  }
  i {
    font-size: 32px;
  }

</style>

<template>
    <div class="aside_bar">
        <CircleButton />
        <AsideItem v-for="item in items" :key="item.to" :text="item.text" :icon="item.icon" :to="item.to" />
      <HelpButton />
    </div>
</template>

<script>
  import AsideItem from "./Elements/AsideItem";
  import CircleButton from "./Elements/CircleButton";
  import HelpButton from "./Elements/HelpButton";
    export default {
        name: "AsideBar",
      components: {
        AsideItem,
        CircleButton,
        HelpButton
      },
      data() {
          return {
            items: [
              {text: "Опросы", icon: "fa fa-file-text-o fa-2x", isActive: false, to: '/surveys'},
              {text: "Пользователи", icon: "fa fa-user-o fa-2x", isActive: false, to: '/users'},
              {text: "Черные списки", icon: "fa fa-flag-o fa-2x", isActive: false, to: '/blacklist'},
              {text: "Колл-центр", icon: "fa fa-phone fa-2x", isActive: false, to: '/Contacts'},
            ]
          }
      }
    }
</script>

<style scoped lang="scss">
  .aside_bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    height: 100%;
    padding: 20px 0 20px 0;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.07);
  }

</style>

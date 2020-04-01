<template>
  <div class="select-field">
    <div class="select-label">
      Условие {{numCondition}}
    </div>
    <div class="select-item">
      <select>
        <option selected="selected">Выберите условие</option>
        <option v-for="item of selectedFields" @click="setCondition(item)">{{item.label}}</option>
      </select>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SelectField",
      props: {
          "numCondition": Number
      },
      data() {
          return {
            selectedFields: [
              { name: 'old',
                label: 'Возраст респондента',
                component: 'OldRange',
                labelButton: 'Добавить диапазон'
              },
              {
                name: 'card-type',
                label:'Тип карты лояльности',
                component: 'CardType',
                labelButton: 'Добавить тип'
              },
              { name: 'card-status',
                label: 'Статус карты лояльности',
                component: 'CardStatus',
                labelButton: 'Добавить статус'
              },
            ]
          }
      },
      methods: {
          setCondition(item) {
            this.$emit('selected_condition', item)
          }
      }
    }
</script>

<style scoped lang="scss">
  .select-field {
    display: flex;
    align-items: center;
  }
  .select-label {
    width: 30%;
    font-weight: bold;
    font-size: 14px;
  }
  .select-item {
    position: relative;
    width: 70%;
    height: 3rem;
    & select{
      display: block;
      width: 100%;
      padding: .75rem 2.5rem .75rem 1rem;
      border: none;
      border-radius: 5px;
      box-shadow: 0 0 3px rgba(0,0,0,.3);
      -webkit-appearance: none;/* Chrome */
      -moz-appearance: none;/* Firefox */
      appearance: none;/* убираем дефолнтные стрелочки */
      cursor: pointer;
    }
  }
</style>

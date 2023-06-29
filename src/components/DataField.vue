<template>
  <div class="list-group-item">
    <div v-if="!isEditingDataField" class="dataField">
        <div class="dataField__name"> {{ dataField.name }} </div>
        <div class="dataField__value"> {{ dataField.value }} </div>
        <button type="button" class="btn btn-outline-primary" @click="editDataField">Редактировать</button>
    </div>
    <form v-else-if="isEditingDataField" class="dataField" onsubmit="return false;">
        <div class="dataField__name"> {{ dataField.name }} </div>
        <div class="dataField__value">
            <input ref="input" type="text" class="form-control" :value="dataField.value">
        </div>
        <button type="button" class="btn btn-outline-primary" @click="finishEditingDataField">Завершить</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IDataField } from '../utils/interfaces'
import { dataFieldsStore } from '../store/index'

@Component
export default class DataField extends Vue {
  @Prop() public dataField!: IDataField;
  @Prop() public index!: number;

  public isEditingDataField = false;

  public editDataField () {
    if (document.querySelector('input')) {
      return
    }
    this.isEditingDataField = true
  }

  public finishEditingDataField () {
    const inputElement: HTMLInputElement = this.$refs.input as HTMLInputElement
    dataFieldsStore.commit(
      'updateObject',
      { index: this.index, newObj: { name: this.dataField.name, value: inputElement.value } }
    )
    this.isEditingDataField = false
  }
}
</script>

<style scoped lang="scss">
.dataField {
    display: flex;
    min-width: 50vw;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &__name, &__value {
        width: 10vw;
        word-wrap: break-word;
        margin-right: 2vw;
    }

    .btn {
        width: 10vw;
    }
}
</style>

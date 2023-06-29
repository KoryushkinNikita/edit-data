<template>
  <div class="container d-flex justify-content-center">
    <div class="list-group my-5 mx-auto">
      <div v-for="(dataField, index) in dataFields" :key="dataField.name" class="list__dataFieldWrapper">
        <DataField :dataField="dataField" :index="index" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DataField from '@/components/DataField.vue'
import { IDataField } from '@/utils/interfaces'
import { dataFieldsStore } from '@/store/index'

@Component({
  components: {
    DataField
  }
})
export default class HomeView extends Vue {
  public get dataFields (): IDataField[] {
    return dataFieldsStore.state.dataFields
  }
}
</script>

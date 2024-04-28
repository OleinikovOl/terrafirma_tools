<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-select label="Alloy" variant="outlined" hide-details :items="alloysList" v-model="selectedAlloy" item-title="name" :item-value="(item) => item"></v-select>
        </v-col>
        <v-col cols="12">
          <p v-if="form?.isValid">{{sum}} mB = {{ Math.trunc(sum / 144) }} ingots + {{ sum % 144 }} mB</p>
          <p v-else-if="form && sum">Хуйню намешал</p>
        </v-col>
        <v-divider class="border-opacity-25"></v-divider>
        <v-col v-if="selectedAlloy" class="calculator__inputs-wrapper" cols="12">
          <v-form ref="form">
            <v-row>
              <v-col cols="12">
                <p class="mt-2 ml-1">Insert values in mB</p>
              </v-col>
                <v-col cols="6" v-for="(item, index) in selectedAlloy.components" :key="index">
                    <v-text-field
                      :label="`${item.name} (${item.minValue} - ${item.maxValue}%)`"
                      class="calculator__input"
                      variant="outlined"
                      hide-details
                      type="number"
                      :rules="[metalRule]"
                      :validation-value="item"
                      validate-on="lazy submit"
                      v-model="item.value"
                      @input="validate()"
                      min="0"
                    ></v-text-field>
                  <p class="mt-1 ml-1">{{ generateHint(item) }}</p>
                  <p class="mt-1 ml-1" v-if="item.value">{{ Math.trunc(item.value / 144) }} ingots + {{ item.value % 144 }} mB</p>
                </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
  import { Alloys } from '@/composables/alloys'

  const form = ref(null)

  const alloysList = new Alloys().getAlloys()
  const selectedAlloy = ref<Alloy>(null)
  const sum = computed(() => {
    let sumValue = 0
    if (!selectedAlloy.value) return sumValue
    selectedAlloy.value.components.forEach((item) => sumValue += item.value | 0)
    return sumValue
  })
  const metalRule = (item) => {
    item.percent = (item.value / sum.value * 100).toFixed(1)
    return item.percent >= item.minValue && item.percent <= item.maxValue;
  }

  const validate = () => {
    form.value.validate()
  }

  const generateHint = (item) => {
    return item.value && item.percent && Number(item.percent) ? `${item.percent}%` : 'Insert data in mB'
  }
</script>

<style lang="scss">
.calculator {
  &__inputs-wrapper {
    display: flex;
    gap: 15px;
  }

  &__input {
    flex: 1 !important;
    flex-basis: 50% !important;
  }
}
</style>

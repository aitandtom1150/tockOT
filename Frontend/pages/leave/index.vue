<template>
  <div
    class="box"
    :style="{ backgroundColor: BGisActive ? 'lightgrey' : 'red' }"
  >
    <!-- ไม่ใช้ : (string) -->
    <v-btn
      color="red"
      @click="increase"
      :color="isActive ? 'pink' : 'orange'"
    >
      Count: {{ number }}
    </v-btn>

    <!-- ใช้ : (ตัวแปร) -->
    <v-btn
      :color="isActive ? 'green' : 'blue'"
      @click="toggleColor"
    >
      Click</v-btn
    >
    <v-btn @click="toggleBG"> background </v-btn>
  </div>
</template>
<script>
  export default {
    name: 'LeavePage',

    data() {
      return {
        isActive: true,
        number: 0,
        BGisActive: false,
      }
    },
    methods: {
      toggleColor() {
        this.isActive = !this.isActive
      },
      increase() {
        this.number += 1
      },
      toggleBG() {
        this.BGisActive = !this.BGisActive
      },
    },
  }
</script>

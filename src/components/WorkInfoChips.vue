<template>
  <div class="works-info">
    <v-chip
      v-for="item in items" :key="item.id"
      :class="{'v-chip--label': label, 'v-chip--outlined': outlined}"
      :style="bgColor">
      <v-icon left v-if="item.icon">{{ item.icon }}</v-icon>
      {{ item.text }}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
    color: {
      type: String
    },
    background: {
      type: String
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    label: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    bgColor() {
      return {
        backgroundColor: this.background,
        color: this.color,
        borderColor: this.color,
      }
    }
  }
}
</script>

<style scoped>
.works-info{
  font-size: 22px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 0 12px 0px;
  line-height: 1.5rem;
}
.works-info .v-chip {
  padding: 0 8px;
  margin: 3px 6px 3px 0;
}
</style>
<template>
  <div>
    <component :is="'style'" type="text/css">
      .anim-border-container::before,
      .anim-border-container::after,
      .anim-border-container__inner::before,
      .anim-border-container__inner::after {
        background-color: {{ borderColor }};
        transition: all {{duration}} ease-in-out;
      }
      .anim-border-container.animating::before,
      .anim-border-container.animating::after {
        height: {{ borderWidth }}px;
      }
      .anim-border-container__inner.animating::before,
      .anim-border-container__inner.animating::after {
        width: {{ borderWidth }}px;
      }
    </component>
    <div class="anim-border-container"
      :class="{animating:doAnimation}">
      <div class="anim-border-container__inner"
        :class="{animating:doAnimation}"
        :style="{padding: paddingStyle}">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['doAnimation', 'borderWidth', 'borderColor', 'duration'],
  computed: {
    paddingStyle () {
      return this.borderWidth + "px"
    }
  }
}
</script>

<style scoped>
.anim-border-container {
  border-style: solid;
  border-width: 0px;
}
.anim-border-container::before,
.anim-border-container::after,
.anim-border-container__inner::before,
.anim-border-container__inner::after {
  content: "";
  display: block;
  position:absolute;
}
/* TopLeft */
.anim-border-container::before {
  top: 0;
  left: 0;
  width: 100%;
  height: 0px;
}
/* BottomRight */
.anim-border-container::after {
  bottom: 0;
  right: 0;
  width: 100%;
  height: 0px;
}
/* TopRight */
.anim-border-container__inner::before {
  top: 0;
  right: 0;
  height: 100%;
  width: 0px;
}
/* BottomLeft */
.anim-border-container__inner::after {
  bottom: 0;
  left: 0;
  height: 100%;
  width: 0px;
}

</style>
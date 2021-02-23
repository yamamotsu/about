<template>
  <div>
    <component :is="'style'" type="text/css">
      .anim-border-container::before,
      .anim-border-container::after,
      .anim-border-container__inner::before,
      .anim-border-container__inner::after {
        background-color: {{ borderColor }};
        transition-duration: {{duration}};
        transition-timing-function: ease-in-out;
      }
      .anim-border-container::before,
      .anim-border-container::after {
        transition-property: width;
        height: {{ borderWidth }}px;
      }
      .anim-border-container__inner::before,
      .anim-border-container__inner::after {
        transition-property: height;
        width: {{ borderWidth }}px;
      }
      .anim-border-container::before {
        left: unset;
        top: 0;
        right: 0;
        width: 0;
      }
      .anim-border-container::after {
        right: unset;
        bottom: 0;
        left: 0;
        width: 0;
      }
      .anim-border-container__inner::before {
        top: unset;
        right: 0;
        bottom: 0;
        height: 0;
      }
      .anim-border-container__inner::after {
        top: 0;
        left: 0;
        bottom: unset;
        height: 0;
      }

      .anim-border-container.animating::before{
        right: unset;
        left: 0;
        width: 100%;
      }
      .anim-border-container.animating::after {
        left: unset;
        right: 0;
        width: 100%;
      }
      .anim-border-container__inner.animating::before {
        top: 0;
        bottom: unset;
        height: 100%;
      }
      .anim-border-container__inner.animating::after {
        top: unset;
        bottom: 0;
        height: 100%;
      }
    </component>
    <transition name="border-transition">
      <div class="anim-border-container"
        :class="{animating:doAnimation}">
        <div class="anim-border-container__inner"
          :class="{animating:doAnimation}"
          :style="{padding: paddingStyle}">
          <slot/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  // props: ['doAnimation', 'borderWidth', 'borderColor', 'duration'],
  props: {
    doAnimation: {
      type: Boolean,
      required: true
    },
    borderWidth: {
      type: Number,
      required: false,
      default: 18,
    },
    borderColor: {
      type: String,
      required: false,
      default: "#000"
    },
    duration: {
      type: String,
      required: false,
      default: ".3s"
    },
    overlay: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    paddingStyle () {
      if (this.overlay) {
        return "0"
      }
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
/* .anim-border-container::before {
  top: 0;
  left: 0;
  width: 0px;
} */
/* BottomRight */
/* .anim-border-container::after {
  bottom: 0;
  right: 0;
  width: 0px;
} */
/* TopRight */
/* .anim-border-container__inner::before {
  top: 0;
  right: 0;
  height: 0px;
} */
/* BottomLeft */
/* .anim-border-container__inner::after {
  bottom: 0;
  left: 0;
  height: 0px;
} */

</style>
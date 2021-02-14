<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 63.435 60.873">
      <g id="Logo_Small" transform="translate(-202.733 -375.282)">
        <g id="M" transform="translate(-4)">
          <line id="線_18" class="color-transition" data-name="線 18" y2="14" transform="translate(238.5 391.5)" fill="none" :stroke="colors.primary" stroke-linecap="round" :stroke-width="strokeWidth"/>
          <line id="線_11" class="color-transition" data-name="線 11" x2="13" y2="7" transform="translate(238.5 391.5)" fill="none" :stroke="colors.primary" stroke-linecap="round" :stroke-width="strokeWidth"/>
          <line id="線_16" class="color-transition" data-name="線 16" y2="14" transform="translate(251.5 398.5)" fill="none" :stroke="colors.primary" stroke-linecap="round" :stroke-width="strokeWidth"/>
          <line id="線_17" class="color-transition" data-name="線 17" y2="14" transform="translate(225.5 398.5)" fill="none" :stroke="colors.primary" stroke-linecap="round" :stroke-width="strokeWidth"/>
          <line id="線_13" class="color-transition" data-name="線 13" y1="7" x2="13" transform="translate(225.5 391.5)" fill="none" :stroke="colors.primary" stroke-linecap="round" :stroke-width="strokeWidth"/>
        </g>
        <g id="Y" transform="translate(-4)">
          <line id="線_12" class="color-transition" data-name="線 12" x2="13" y2="7" transform="translate(225.5 398.5)" fill="none" :stroke="colors.secondary" stroke-linecap="round" :stroke-width="strokeWidth"/>
          <line id="線_14" class="color-transition" data-name="線 14" y1="7" x2="13" transform="translate(238.5 398.5)" fill="none" :stroke="colors.secondary" stroke-linecap="round" :stroke-width="strokeWidth"/>
          <line id="線_15" class="color-transition" data-name="線 15" y2="14" transform="translate(238.5 405.5)" fill="none" :stroke="colors.secondary" stroke-linecap="round" :stroke-width="strokeWidth"/>
        </g>
        <g id="outline_hex" data-name="outline_hex" transform="translate(223.733 375.282) rotate(30)" fill="none">
          <path class="color-transition" d="M 15.69622039794922 3.000003814697266 C 14.63336944580078 3.000003814697266 13.64043045043945 3.570320129394531 13.10488891601563 4.488380432128906 L 4.354888916015625 19.48838233947754 C 3.810989379882813 20.4207820892334 3.810989379882813 21.57922172546387 4.354888916015625 22.51162147521973 L 13.10488891601563 37.51162338256836 C 13.64043045043945 38.42969131469727 14.63336944580078 39 15.69622039794922 39 L 33.30377960205078 39 C 34.36663055419922 39 35.35956954956055 38.42969131469727 35.89511108398438 37.51162338256836 L 44.64511108398438 22.51162147521973 C 45.18901062011719 21.57922172546387 45.18901062011719 20.4207820892334 44.64511108398438 19.48838233947754 L 35.89511108398438 4.488380432128906 C 35.35956954956055 3.570320129394531 34.36663055419922 3.000003814697266 33.30377960205078 3.000003814697266 L 15.69622039794922 3.000003814697266 M 15.69622039794922 3.814697265625e-06 L 33.30377960205078 3.814697265625e-06 C 35.43778228759766 3.814697265625e-06 37.41119003295898 1.133472442626953 38.4864501953125 2.976772308349609 L 47.2364501953125 17.97677230834961 C 48.32622146606445 19.84495162963867 48.32622146606445 22.15505218505859 47.2364501953125 24.02323150634766 L 38.4864501953125 39.02323150634766 C 37.41119003295898 40.86654281616211 35.43778228759766 42 33.30377960205078 42 L 15.69622039794922 42 C 13.56222152709961 42 11.58880996704102 40.86654281616211 10.5135498046875 39.02323150634766 L 1.7635498046875 24.02323150634766 C 0.6737785339355469 22.15505218505859 0.6737785339355469 19.84495162963867 1.7635498046875 17.97677230834961 L 10.5135498046875 2.976772308349609 C 11.58880996704102 1.133472442626953 13.56222152709961 3.814697265625e-06 15.69622039794922 3.814697265625e-06 Z" stroke="none" :fill="colors.secondary"/>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    colorTheme: {
      type: String,
      default: "light"
    },
    width: {
      type: Number,
      default: 63,
    },
    height: {
      type: Number,
      default: 60,
    },
    strokeWidth: {
      type: Number,
      default: 4
    }
  },
  computed: {
    colors() {
      if (this.colorTheme === 'light'){
        return {
          primary: "#F84100",
          secondary: "#5A5A5A"
        }
      }
      else if (this.colorTheme === 'dark'){
        return {
          primary: "#5A5A5A",
          secondary: "#F84100"
        }
      }
      return {
        primary: "#F84100",
        secondary: "#5A5A5A"
      }
    }
  }
}
</script>

<style scoped>
.color-transition {
  transition: all 0.3s;
}
</style>
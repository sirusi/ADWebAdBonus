<script>
export default {
  name: "adBonusDisplay",
  props: {
  },
  data() {
    return {
      adtext: `Ad Bonus: ${AdBonus.getDisplay()}`
    };
  },
  computed: {
    baseText() {
      return this.adtext;
    }
  },
  methods: {
    update() {
      this.adtext = `Ad Bonus: ${AdBonus.getDisplay()}`;
    }
  }
};
</script>

<template>
  <span class="c-adbonus">
    <span>
      {{ baseText }}
    </span>
  </span>
</template>

<style scoped>
.c-adbonus {
  font-weight: normal;
  color: var(--color-text);
}
</style>

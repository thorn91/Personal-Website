<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <h1>EMERGENCY CONTACTS</h1>
      <h2>ALL CONTACTS HAVE COUNTRY CODE +1 (USA)</h2>
      <br />
      <br />
      <h2>{{ ANNIE }}</h2>
      <h2>{{ MOM }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  layout: "personal",
  head() {
    return {
      title: "THOMAS HORN's EMERGENCY CONTACTS",
    };
  },

  data() {
    return {
      ANNIE: "[Partner] Annie Paulukonis: (510) 846-2108",
      MOM: "[Mother] Jane Horn: (706) 254-1326",
    };
  },

  methods: {},

  components: {},
};
</script>

<style>
</style>

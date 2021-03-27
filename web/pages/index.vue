<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-personal-white overflow-hidden">
    <Decoration />
    <About />
    <ContentSelect
      @showEducation="onShowEducation()"
      @showWorkHistory="onShowWorkHistory()"
    />
    <Education v-show="activeEducation" class="mb-2" />
    <WorkHistory v-show="activeWork" class="mb-2" />
  </div>
</template>

<script>
import Decoration from "~/components/personal/Decoration.vue";
import About from "~/components/personal/About.vue";
import ContentSelect from "~/components/personal/ContentSelect.vue";
import Education from "~/components/personal/Education.vue";
import WorkHistory from "~/components/personal/WorkHistory.vue";

export default {
  layout: "personal",
  head() {
    return {
      title: "Thomas Horn",
    };
  },

  mounted() {
    // We want to load the main page from the top
    // window.scrollTo(0, 0);
  },

  data() {
    return {
      activeTabClass: "bg-indigo-100 text-indigo-700",
      activeEducation: false,
      activeWork: false,
    };
  },

  methods: {
    onShowEducation: function () {
      this.activeEducation = !this.activeEducation;
      this.activeWork = false;
    },
    onShowWorkHistory: function () {
      this.activeWork = !this.activeWork;
      this.activeEducation = false;
    },
  },

  components: {
    Decoration,
    About,
    ContentSelect,
    Education,
    WorkHistory,
  },
};
</script>

<style>
</style>

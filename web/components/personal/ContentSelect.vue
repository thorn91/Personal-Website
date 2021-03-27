<template>
  <div class="relative flex justify-center">
    <div class="block -mt-8 sm:mt-0">
      <nav class="flex space-x-4" aria-label="Tabs">
        <!-- Current: "bg-indigo-100 text-indigo-700", Default: "text-gray-500 hover:text-gray-700" -->
        <a
          href="#"
          class="text-gray-500 hover:text-gray-900 px-3 py-2 font-medium text-sm rounded-md hover:bg-gray-300"
					:class="highlightWorkHistoryClass"
					@click="onClickWorkHistory()"
        >
          Work History
        </a>

        <a
          href="#"
          class="text-gray-500 hover:text-gray-900 px-3 py-2 font-medium text-sm rounded-md hover:bg-gray-300"
					:class="highlightEducationClass"
					@click="onClickEducation()"
        >
          Education
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentSelect",
	data() {
		return {
			// Super hodgepodge, not sorry about it
			highlightClass: "bg-personal-main-accent-light text-personal-white",
			highlightWorkHistoryClass: "",
			highlightEducationClass: "",

			highlightWorkHistory: false,
			highlightEducation: false,
		}
	},

	methods: {
		onClickEducation: function(event) {
			this.highlightEducation = !this.highlightEducation;
			this.highlightWorkHistory = false;

			if (this.highlightEducation) { 
				this.highlightEducationClass = this.highlightClass;
				this.highlightWorkHistoryClass = ""
			} else {
				this.highlightEducationClass = "";
			}
			this.$emit('showEducation', true);
		},

		onClickWorkHistory: function(event) {
			this.highlightWorkHistory = !this.highlightWorkHistory;
			this.highlightEducation = false;

			if (this.highlightWorkHistory) { 
				this.highlightWorkHistoryClass = this.highlightClass;
				this.highlightEducationClass = ""
			} else {
				this.highlightWorkHistoryClass = "";
			}
			this.$emit('showWorkHistory', true);
		}
	}
};
</script>

<style>
</style>
<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-personal-white overflow-hidden">
    <div
      class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
      aria-hidden="true"
    >
      <div class="relative h-full max-w-7xl mx-auto">
        <svg
          class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
          />
        </svg>
        <svg
          class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
          />
        </svg>
      </div>
    </div>

    <!-- Main intro section` -->
    <div class="relative pt-6 pb-16 sm:pb-24 sm:pt-16">
      <div class="text-center"></div>
      <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div class="text-center">
          <h1
            class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span class="block xl:inline text-personal-main-accent"
              >Thomas <span class="text-personal-dark">Horn</span></span
            >
          </h1>
          <p
            class="mt-3 max-w-md mx-auto text-base text-gray-700 sm:text-lg md:mt-6 md:text-xl md:max-w-3xl"
          >
            Software Engineer | Bioinformatics Assistant
          </p>

          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
            <a href="https://www.github.com/thorn91/" target="_blank" class="">
              <font-awesome-icon
                :icon="['fab', 'github']"
                class="text-personal-dark text-xl sm:text-5xl hover:text-personal-main-accent"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/thomaswarrenhorn"
              target="_blank"
              class="pl-12"
            >
              <font-awesome-icon
                :icon="['fab', 'linkedin']"
                class="text-personal-dark text-xl sm:text-5xl hover:text-personal-main-accent"
              />
            </a>
            <a
              href="mailto:thomas@thomashorn.info"
              target="_blank"
              class="pl-12"
            >
              <font-awesome-icon
                :icon="['fas', 'envelope']"
                class="text-personal-dark text-xl sm:text-5xl hover:text-personal-main-accent"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- Choose content -->
      <div class="flex justify-center">
        <div class="hidden">
          <label for="tabs" class="sr-only">Select a tab</label>
          <select
            id="tabs"
            name="tabs"
            class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          >
            <option>Work History</option>

            <option>Education</option>
          </select>
        </div>
        <div class="block mt-6 sm:mt-16">
          <nav class="flex space-x-4" aria-label="Tabs">
            <!-- Current: "bg-indigo-100 text-indigo-700", Default: "text-gray-500 hover:text-gray-700" -->
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 px-3 py-2 font-medium text-sm rounded-md hover:bg-gray-300"
              :class="{ activeTabClass: activeWork }"
              @click="showHistory"
            >
              Work History
            </a>

            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 px-3 py-2 font-medium text-sm rounded-md hover:bg-gray-300"
              :class="{ [activeTabClass]: activeEducation }"
              @click="showEducation"
            >
              Education
            </a>
          </nav>
        </div>
      </div>

      <!-- Education section -->
        <div class="flow-root w-full mt-8 sm:max-w-2xl sm:m-auto">
          <ul class="-mb-8 ">
            <li class="">
              <div class="relative pb-8">
                <span
                  class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div class="relative flex items-start space-x-3">
                  <div class="relative">
                    <img
                      class="w-10 md:w-20 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                      src="../assets/images/uga_logo.png"
                      alt=""
                    />
                  </div>
                  <div class="min-w-0 flex-1">
                    <div>
                      <div class="text-sm">
                        <a href="#" class="font-medium text-gray-900"
                          >Eduardo Benz</a
                        >
                      </div>
                      <p class="mt-0.5 text-sm text-gray-500">
                        Commented 6d ago
                      </p>
                    </div>
                    <div class="mt-2 text-sm text-gray-700">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Tincidunt nunc ipsum tempor purus vitae id. Morbi in
                        vestibulum nec varius. Et diam cursus quis sed purus
                        nam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  layout: "personal",
  head() {
    return {
      title: "Thomas Horn",
    };
  },

  data() {
    return {
      activeTabClass: "bg-indigo-100 text-indigo-700",
      activeEducation: false,
      activeWork: false,
    };
  },

  methods: {
    showEducation: function () {
      this.activeEducation = !this.activeEducation;
      this.activeWork = false;
    },
  },
};
</script>

<style>
</style>

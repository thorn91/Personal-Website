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
            id="name"
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
              href="#name"
              class="text-gray-500 hover:text-gray-900 px-3 py-2 font-medium text-sm rounded-md hover:bg-gray-300"
              @click="showHistory"
            >
              Work History
            </a>

            <a
              href="#name"
              class="text-gray-500 hover:text-gray-900 px-3 py-2 font-medium text-sm rounded-md hover:bg-gray-300"
              @click="activeEducation = !activeEducation"
            >
              Education
            </a>
          </nav>
        </div>
      </div>

      <!-- Education section -->
      <div
        id="education-section"
        class="flow-root pl-6 pr-10 mt-8 sm:max-w-xl md:max-w-xl xl:max-w-3xl sm:m-auto sm:mt-12 sm:p-0"
        v-if="activeEducation"
      >
        <div class="pb-3 border-b border-gray-200 mb-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Education</h3>
        </div>
        <ul class="-mb-8">
          <!-- UGA -->
          <li class="">
            <div class="relative pb-8">
              <span
                class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                aria-hidden="true"
              ></span>
              <div class="relative flex items-start space-x-3">
                <div class="relative">
                  <img
                    class="w-10 md:w-20 rounded-full flex items-center justify-center ring-4 shadow-lg ring-personal-white"
                    src="../assets/images/uga_logo.png"
                    alt=""
                  />
                </div>
                <div class="min-w-0 flex-1">
                  <div>
                    <div class="text-md">
                      <a href="#" class="font-semibold text-gray-900"
                        >B.S. Computer Science</a
                      >
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">
                      <span class="font-semibold">University of Georgia</span
                      ><br />2021 (Expected)
                    </p>
                  </div>
                  <div class="mt-2 text-sm text-gray-700">
                    <p>
                      <span class="font-semibold">GPA:</span> 3.74
                      <br />
                      <span class="font-semibold">Major GPA:</span> 3.92
                    </p>
                  </div>
                  <div class="mt-2 text-sm text-gray-700">
                    <p>
                      <span class="font-semibold">Selected Electives: </span>
                      Database Management, Web Development, Computer Networks,
                      Scientific Computing, Human-Computer Interaction
                    </p>
                  </div>
                  <div class="mt-2 text-sm text-gray-700">
                    <p>
                      <span class="font-semibold">Organizations: </span>
                      Association for Computing Machinery, Data for Good
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <!-- Rhodes College -->
          <li class="">
            <div class="relative pb-8">
              <span
                class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-personal-white"
                aria-hidden="true"
              ></span>
              <div class="relative flex items-start space-x-3">
                <div class="relative">
                  <img
                    class="w-10 md:w-20 rounded-full flex items-center justify-center ring-4 shadow-lg ring-personal-white"
                    src="../assets/images/rhodes_logo.png"
                    alt=""
                  />
                </div>
                <div class="min-w-0 flex-1">
                  <div>
                    <div class="text-md">
                      <a href="#" class="font-semibold text-gray-900"
                        >B.S. Neuroscience</a
                      >
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">
                      <span class="font-semibold">Rhodes College</span
                      ><br />2014
                    </p>
                  </div>
                  <div class="mt-2 text-sm text-gray-700">
                    <p>
                      <span class="font-semibold">GPA:</span> 3.59
                      <br />
                      <span class="font-semibold">Major GPA:</span> 3.81
                    </p>
                  </div>
                  <div class="mt-2 text-sm text-gray-700">
                    <p>
                      <span class="font-semibold"
                        >Academic Honors Societies:
                      </span>
                      &Beta;&Beta;&Beta; (Biology),
                      &Gamma;&Sigma;&Epsilon;(Chemistry), &Nu;&Rho;&Psi;
                      (Neuroscience)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button @click="test=!test; ">Hello</button>
      <div :class="{ 'hidden' : !test }" v-show="test">
      <p v-show="test">HELLO!!!!!!!!!!!</p>
      </div>
    </div>

    <!-- Footer -->
    <!-- This example requires Tailwind CSS v2.0+ -->
    <footer class="bg-personal-white mt-12">
      <div
        class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="flex justify-center space-x-6 md:order-2">
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">GitHub</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div class="mt-8 md:mt-0 md:order-1">
          <p class="text-center text-base text-gray-400">
            &copy; 2020 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
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

  mounted() {
    // We want to load the main page from the top
    window.scrollTo(0, 0);
  },

  data() {
    return {
      activeTabClass: "bg-indigo-100 text-indigo-700",
      activeEducation: true,
      activeWork: false,
      test: true,
    };
  },

  methods: {
    showEducation: function () {
      this.activeEducation = !this.activeEducation;
      this.activeWork = false;
      console.log(this.activeEducation);
    },
  },
};
</script>

<style>
</style>

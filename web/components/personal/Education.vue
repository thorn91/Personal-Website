<template>
  <div
    id="education-section"
    class="flow-root pl-6 pr-10 mt-8 sm:max-w-xl md:max-w-xl xl:max-w-3xl sm:m-auto sm:mt-12 sm:p-0"
  >
    <div class="pb-3 border-b border-gray-200 mb-6">
      <h3 class="text-lg leading-6 font-medium text-personal-main-accent">
        <font-awesome-icon
          :icon="['fas', 'university']"
          class="text-personal-main-accent"
        />&nbsp;&nbsp;&nbsp;Education
      </h3>
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
                src="../../assets/images/uga_logo.png"
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
                src="../../assets/images/rhodes_logo.png"
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
                  <span class="font-semibold">Rhodes College</span><br />2014
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
                  <span class="font-semibold">Academic Honors Societies: </span>
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
</template>

<script>
export default {};
</script>

<style>
</style>
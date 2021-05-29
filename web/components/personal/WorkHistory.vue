<template>
  <div
    id="education-section"
    class="flow-root pl-6 pr-10 mt-8 sm:max-w-xl md:max-w-xl xl:max-w-3xl sm:m-auto sm:mt-12 sm:p-0"
  >
    <div class="pb-3 border-b border-gray-200 mb-6">
      <h3 class="text-lg leading-6 font-medium text-personal-main-accent">
        <font-awesome-icon
          :icon="['fas', 'briefcase']"
          class="text-personal-main-accent"
        />&nbsp;&nbsp;&nbsp;Work History
      </h3>
    </div>
    <ul class="-mb-8">
      <!-- Techport13 -->
      <li class="">
        <div class="relative pb-8">
          <span
            class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          ></span>
          <div class="relative flex items-start space-x-3">
            <div class="relative">
              <img
                id="techport13"
                class="w-10 rounded-full flex items-center justify-center ring-4 shadow-lg ring-personal-white"
                src="~/assets/images/techport13_logo.png"
                alt=""
              />
            </div>
            <div class="min-w-0 flex-1">
              <div>
                <div class="text-md">
                  <a href="#" class="font-semibold text-gray-900"
                    >Associate Consultant</a
                  >
                </div>
                <p class="mt-0.5 text-sm text-gray-500">
                  <span class="font-semibold"
                    >Techport13</span
                  ><br />2021 - Present
                </p>
              </div>
              <div class="mt-2 text-sm text-gray-700">
                <p>

                </p>
              </div>
              <div class="mt-2 text-sm text-gray-700">
                <p>
                  <span class="font-semibold">Technologies Used: </span>ServiceNow,
                  JavaScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>

      <!-- Tsai Lab UGA -->
      <li class="">
        <div class="relative pb-8">
          <span
            class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          ></span>
          <div class="relative flex items-start space-x-3">
            <div class="relative">
              <img
                class="w-10 rounded-full flex items-center justify-center ring-4 shadow-lg ring-personal-white"
                src="../../assets/images/uga_shield.png"
                alt=""
              />
            </div>
            <div class="min-w-0 flex-1">
              <div>
                <div class="text-md">
                  <a href="#" class="font-semibold text-gray-900"
                    >Tsai Lab (Dept. of Genetics)</a
                  >
                </div>
                <p class="mt-0.5 text-sm text-gray-500">
                  <span class="font-semibold"
                    >University of Georgia Dept. of Genetics</span
                  ><br />2019 - Present
                </p>
              </div>
              <div class="mt-2 text-sm text-gray-700">
                <p>
                  My primary duties were split between working, developing, and
                  improving WebApps hosted on the lab's local server, and
                  performing RNA sequencing on UGA's HPC Cluster Computer
                  (Sapelo2), allowing me to combine my Neuroscience background
                  with Computer Science to create practical tools used by
                  researchers around the world.
                  <br>
                  These projects included a new
                  Java-based variant Poplar BLAST search tool served with
                  Tomcat7 on the lab's in-house server, and a refactoring of one of the lab's primary tools
                  from Perl to Python with an HTML/JavaScript frontend, designed
                  with TailwindCSS. I was also responsible for maintaining the server, including standard updates, installation of
                  new packages, and webserver management.  Upon graduation, I recruited, interviewed, and trained my replacement.
                </p>
              </div>
              <div class="mt-2 text-sm text-gray-700">
                <p>
                  <span class="font-semibold">Technologies Used: </span>Python,
                  Java, Bash, JavaScript, Tomcat7, nginx, Docker
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

<style scoped>
  #techport13 {
    filter: invert(100%);
  }

</style>
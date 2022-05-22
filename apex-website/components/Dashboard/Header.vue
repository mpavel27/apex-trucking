<template>
  <div class="dashboard-header">
    <div class="flex justify-between items-center dashboard mt-6">
      <div>
        <h1 class="font-soulmaze text-xl">{{ title }}</h1>
        <h1 class="text-5xl font-soulmaze-outline under-title opacity-40">{{ title }}</h1>
      </div>
      <div class="flex gap-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="none" viewBox="0 0 20 19">
          <path fill="#000" d="M3.86 18.84h-.17c-.95-.05-1.84-.5-2.45-1.24-1.08-1.32-.94-3.35.33-4.61l1.95-1.95c-.53-1.51-.66-3.09-.35-4.63C3.81 3.25 6.37.74 9.53.17c1.01-.18 2.02-.18 3.01.02.55.11.99.51 1.16 1.05.17.54.02 1.13-.38 1.52l-1.97 1.97c-.43.43-.43 1.14 0 1.57l1.41 1.41c.42.42 1.15.42 1.57 0l1.97-1.97c.4-.4.99-.55 1.53-.38.54.16.94.61 1.04 1.16.19 1 .2 2.02 0 3.04-.57 3.08-3 5.61-6.06 6.29-1.45.32-2.94.25-4.32-.21l-2.24 2.22a3.4 3.4 0 0 1-2.39.99v-.01ZM11 2.03c-.37 0-.74.03-1.12.1-2.36.43-4.27 2.3-4.75 4.67-.24 1.18-.14 2.33.29 3.43.3.75.11 1.62-.49 2.22L2.98 14.4c-.55.55-.63 1.4-.19 1.93.25.31.61.49 1 .51.41.01.76-.12 1.04-.4l2.18-2.18c.56-.56 1.38-.77 2.11-.53 1.05.35 2.14.4 3.25.15 2.28-.51 4.1-2.4 4.53-4.7.08-.45.12-.89.1-1.34l-1.27 1.27c-1.18 1.18-3.22 1.17-4.4 0L9.92 7.7a3.12 3.12 0 0 1 0-4.4l1.27-1.28h-.21l.02.01Z"/>
        </svg>
        <NuxtLink data-tooltip-target="tooltip-dark" to="/logout">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path fill="#000" d="M10 20c-5.51 0-10-4.39-10-9.79 0-3 1.38-5.79 3.77-7.66a1 1 0 0 1 1.4.17A1 1 0 0 1 5 4.12C3.09 5.61 2 7.83 2 10.2c0 4.3 3.59 7.79 8 7.79s8-3.49 8-7.79c0-2.36-1.08-4.56-2.96-6.05a.99.99 0 0 1-.16-1.4.99.99 0 0 1 1.4-.16C18.64 4.46 20 7.24 20 10.21c0 5.4-4.49 9.79-10 9.79Z"/>
            <path fill="#000" d="M10 11.38c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v9.38c0 .55-.45 1-1 1Z"/>
          </svg>
        </NuxtLink>
        <div id="tooltip-dark" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Tooltip content
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
    <ul class="flex gap-2 mt-2">
      <li class="text-slate-600"><NuxtLink to="/dashboard">Apex Express</NuxtLink></li>
      <li>/</li>
      <li class="font-medium"><a href="#">{{ title }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ['title']
}
</script>

<style scoped>

</style>
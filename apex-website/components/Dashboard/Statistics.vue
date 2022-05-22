<template>
  <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-8">
    <div>
      <div class="bg-white pt-3">
        <div class="border-l-2 border-secondary">
          <h4 class="text-sm font-bold pl-5"><span class="text-secondary">Personal</span> stats</h4>
        </div>
        <div class="flex justify-between p-5 pt-4">
          <div class="text-center">
            <h2 class="text-sm font-semibold">€ 13,001,335</h2>
            <p class="text-xs font-normal" style="color: #A7A7A7;">Total EU Income</p>
          </div>
          <div class="text-center">
            <h2 class="text-sm font-semibold">€ 13,001,335</h2>
            <p class="text-xs font-normal" style="color: #A7A7A7;">Total EU Income</p>
          </div>
          <div class="text-center">
            <h2 class="text-sm font-semibold">€ 13,001,335</h2>
            <p class="text-xs font-normal" style="color: #A7A7A7;">Total EU Income</p>
          </div>
          <div class="text-center">
            <h2 class="text-sm font-semibold">€ 13,001,335</h2>
            <p class="text-xs font-normal" style="color: #A7A7A7;">Total EU Income</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="bg-white pt-3 pb-4">
        <div class="border-l-2 border-secondary mb-4">
          <h4 class="text-sm font-bold pl-5"><span class="text-secondary">Recent</span> activity</h4>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex gap-4 px-5 items-center">
            <div>
              <img class="rounded-full w-10 h-10 f" :src="require('assets/images/avatar-image.png')">
            </div>
            <div>
              <h3 class="text-sm">kraier just joined Apex Express</h3>
              <p class="text-xs" style="color: #9F9F9F;">Two hours ago</p>
            </div>
          </div>
          <div class="flex gap-4 px-5 items-center">
            <div>
              <img class="rounded-full w-10 h-10 f" :src="require('assets/images/avatar-image.png')">
            </div>
            <div>
              <h3 class="text-sm">kraier just joined Apex Express</h3>
              <p class="text-xs" style="color: #9F9F9F;">Two hours ago</p>
            </div>
          </div>
          <div class="flex gap-4 px-5 items-center">
            <div>
              <img class="rounded-full w-10 h-10 f" :src="require('assets/images/avatar-image.png')">
            </div>
            <div>
              <h3 class="text-sm">kraier just joined Apex Express</h3>
              <p class="text-xs" style="color: #9F9F9F;">Two hours ago</p>
            </div>
          </div>
          <div class="flex gap-4 px-5 items-center">
            <div>
              <img class="rounded-full w-10 h-10 f" :src="require('assets/images/avatar-image.png')">
            </div>
            <div>
              <h3 class="text-sm">kraier just joined Apex Express</h3>
              <p class="text-xs" style="color: #9F9F9F;">Two hours ago</p>
            </div>
          </div>
          <div class="flex gap-4 px-5 items-center">
            <div>
              <img class="rounded-full w-10 h-10 f" :src="require('assets/images/avatar-image.png')">
            </div>
            <div>
              <h3 class="text-sm">kraier just joined Apex Express</h3>
              <p class="text-xs" style="color: #9F9F9F;">Two hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statistics"
}
</script>

<style scoped>

</style>
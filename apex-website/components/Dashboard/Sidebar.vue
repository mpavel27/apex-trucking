<template>
  <div>
    <div class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen w-64 shrink-0 bg-white transition-all duration-200 ease-in-out -translate-x-56 m-8 sidebar">
      <div class="space-y-8">
        <div>
          <div class="flex justify-between items-center p-6">
            <img :src="require('~/assets/images/logo.svg')" width="100">
            <div class="lg:block hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="#9261F8" d="M2.03 12.01c-.01.36.11.73.39 1l6.77 6.75a.996.996 0 1 0 1.41-1.41L5.23 13h15.78c.55 0 1-.44 1-1s-.45-1-1-1H5.33l5.26-5.24a.996.996 0 0 0-.71-1.7c-.26 0-.51.1-.71.29L2.4 11.1a1.3 1.3 0 0 0-.31.51c-.05.12-.08.25-.08.39l.02.01Z"/>
              </svg>
            </div>
            <div class="lg:hidden block">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="#9261F8" d="M21.97 11.99c.01-.36-.11-.73-.39-1l-6.77-6.75a.996.996 0 1 0-1.41 1.41L18.77 11H2.99c-.55 0-1 .44-1 1s.45 1 1 1h15.68l-5.26 5.24a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l6.77-6.75c.15-.15.25-.33.31-.51.05-.12.08-.25.08-.39l-.02-.01Z"/>
              </svg>
            </div>
          </div>
          <ul class="mt-5">
            <li class="px-6 py-3 rounded-sm mb-2 bg-primary ml-8 rounded-l-full">
              <a aria-current="page" class="block text-slate-200 hover:text-white truncate transition duration-150 hover:text-slate-200 active" href="/">
                <div class="flex justify-between items-center">
                  <span class="text-sm font-bold text-black">
                    Dashboard
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
                    <path fill="#000" d="M12.686 15.583h-.9a1.868 1.868 0 0 1-1.87-1.87v-2.38c0-.39-.155-.758-.439-1.027a1.43 1.43 0 0 0-1.055-.39c-.737.036-1.339.73-1.339 1.538v2.26c0 1.034-.836 1.87-1.87 1.87h-.9c-1.21 0-2.188-1.006-2.188-2.239V7.19c0-.893.425-1.757 1.133-2.295l4.01-3.082c.75-.517 1.72-.517 2.436-.02l4.038 3.102a2.917 2.917 0 0 1 1.133 2.295v6.155c0 1.232-.985 2.238-2.189 2.238ZM8.5 8.5c.73 0 1.417.276 1.948.78.56.53.885 1.281.885 2.053v2.38c0 .248.206.454.454.454h.9c.424 0 .771-.369.771-.822V7.19c0-.46-.212-.9-.58-1.176l-4.01-3.082c-.205-.141-.53-.141-.772.022L4.123 6.007a1.49 1.49 0 0 0-.581 1.176v6.155c0 .453.347.822.772.822h.9a.457.457 0 0 0 .453-.454v-2.26c0-1.572 1.175-2.868 2.684-2.946h.156H8.5Z"/>
                  </svg>
                </div>
              </a>
            </li>
            <li class="px-6 py-3 rounded-sm mb-2 ml-8 rounded-l-full">
              <a aria-current="page" class="block text-slate-200 hover:text-white truncate transition duration-150 hover:text-slate-200 active" href="/">
                <div class="flex justify-between items-center">
                  <span class="text-sm font-medium text-black">
                    Dashboard
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
                    <path fill="#000" d="M12.686 15.583h-.9a1.868 1.868 0 0 1-1.87-1.87v-2.38c0-.39-.155-.758-.439-1.027a1.43 1.43 0 0 0-1.055-.39c-.737.036-1.339.73-1.339 1.538v2.26c0 1.034-.836 1.87-1.87 1.87h-.9c-1.21 0-2.188-1.006-2.188-2.239V7.19c0-.893.425-1.757 1.133-2.295l4.01-3.082c.75-.517 1.72-.517 2.436-.02l4.038 3.102a2.917 2.917 0 0 1 1.133 2.295v6.155c0 1.232-.985 2.238-2.189 2.238ZM8.5 8.5c.73 0 1.417.276 1.948.78.56.53.885 1.281.885 2.053v2.38c0 .248.206.454.454.454h.9c.424 0 .771-.369.771-.822V7.19c0-.46-.212-.9-.58-1.176l-4.01-3.082c-.205-.141-.53-.141-.772.022L4.123 6.007a1.49 1.49 0 0 0-.581 1.176v6.155c0 .453.347.822.772.822h.9a.457.457 0 0 0 .453-.454v-2.26c0-1.572 1.175-2.868 2.684-2.946h.156H8.5Z"/>
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>

</style>
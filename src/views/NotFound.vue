<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-indigo-600">404</h1>
      <p class="text-2xl font-semibold text-gray-700">Page Not Found</p>
      <p class="mt-4 text-lg text-gray-500">
        The page you're looking for could not be found. Try searching or check
        the URL for errors.
      </p>
      <router-link
        to="/"
        class="mt-8 inline-block px-6 py-2 text-lg font-semibold leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
      >
        Go back home
      </router-link>
    </div>
  </div>
</template>

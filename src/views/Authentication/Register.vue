<template>
  <div class="flex min-h-full flex-1">
    <div
      class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24 w-1/2"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <h2
            class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900"
          >
            Create your account
          </h2>
          <p class="mt-2 text-sm leading-6 text-gray-500">
            Already have an account?
            {{ " " }}
            <router-link
              to="/login"
              class="font-semibold text-indigo-600 hover:text-indigo-500"
              >Sign in here</router-link
            >
          </p>
        </div>

        <div class="mt-10">
          <div>
            <form action="#" method="POST" class="space-y-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Full Name</label
                >
                <div class="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autocomplete="name"
                    required
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Email address</label
                >
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Password</label
                >
                <div class="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="new-password"
                    required
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  for="confirm-password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Confirm Password</label
                >
                <div class="mt-2">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    required
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>

          <div class="mt-10">
            <div class="relative">
              <div
                class="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div class="w-full border-t border-gray-200" />
              </div>
              <div
                class="relative flex justify-center text-sm font-medium leading-6"
              >
                <span class="bg-white px-6 text-gray-900">Or sign up with</span>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-2 gap-4">
              <a
                href="#"
                class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
              >
                <svg class="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                  <!-- Google Icon Paths -->
                </svg>
                <span class="text-sm font-semibold leading-6">Google</span>
              </a>

              <a
                href="#"
                class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
              >
                <svg
                  class="h-5 w-5 fill-[#24292F]"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <!-- GitHub Icon Paths -->
                </svg>
                <span class="text-sm font-semibold leading-6">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative hidden w-1/2 lg:block">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt=""
      />
    </div>
  </div>
</template>

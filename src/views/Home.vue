<template>
  <div class="bg-white">
    <main>
      <!-- Hero section -->
      <div class="relative">
        <!-- Background image and overlap -->
        <div
          aria-hidden="true"
          class="absolute inset-0 hidden sm:flex sm:flex-col"
        >
          <div class="relative w-full flex-1 bg-gray-800">
            <div class="absolute inset-0 overflow-hidden">
              <img
                src="https://tailwindui.com/plus/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                alt=""
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div class="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div class="h-32 w-full bg-white md:h-40 lg:h-48" />
        </div>

        <div
          class="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8"
        >
          <!-- Background image and overlap -->
          <div
            aria-hidden="true"
            class="absolute inset-0 flex flex-col sm:hidden"
          >
            <div class="relative w-full flex-1 bg-gray-800">
              <div class="absolute inset-0 overflow-hidden">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                  alt=""
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <div class="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div class="h-48 w-full bg-white" />
          </div>
          <div class="relative py-32">
            <h1
              class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Mid-Season Sale
            </h1>
            <div class="mt-4 sm:mt-6">
              <a
                href="#"
                class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
                >Shop Collection</a
              >
            </div>
          </div>
        </div>

        <section
          aria-labelledby="collection-heading"
          class="relative -mt-96 sm:mt-0"
        >
          <h2 id="collection-heading" class="sr-only">Collections</h2>
          <div
            class="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 md:grid-cols-3 lg:max-w-7xl lg:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8"
          >
            <div
              v-for="collection in collections"
              :key="collection.name"
              class="group relative h-96 rounded-lg bg-white shadow-xl sm:h-96 md:h-96 lg:h-96"
            >
              <div>
                <div
                  aria-hidden="true"
                  class="absolute inset-0 overflow-hidden rounded-lg"
                >
                  <div
                    class="absolute inset-0 overflow-hidden group-hover:opacity-75"
                  >
                    <img
                      :src="collection.imageSrc"
                      :alt="collection.imageAlt"
                      class="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div
                    class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
                  ></div>
                </div>
                <div class="absolute inset-0 flex items-end rounded-lg p-6">
                  <div>
                    <p aria-hidden="true" class="text-sm text-white">
                      Shop the collection
                    </p>
                    <h3 class="mt-1 font-semibold text-white">
                      <a :href="collection.href">
                        <span class="absolute inset-0"></span>
                        {{ collection.name }}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section aria-labelledby="trending-heading">
        <div
          class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32"
        >
          <div class="md:flex md:items-center md:justify-between">
            <h2
              id="favorites-heading"
              class="text-2xl font-bold tracking-tight text-gray-900"
            >
              Trending Products
            </h2>
            <a
              href="#"
              class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
            >
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div
            class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8"
          >
            <div
              v-for="product in trendingProducts"
              :key="product.id"
              class="group relative"
            >
              <div
                class="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80"
              >
                <img
                  :src="product.imageSrc"
                  :alt="product.imageAlt"
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">
                <a :href="product.href">
                  <span class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              <p class="mt-1 text-sm font-medium text-gray-900">
                {{ product.price }}
              </p>
            </div>
          </div>

          <div class="mt-8 text-sm md:hidden">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="perks-heading"
        class="border-t border-gray-200 bg-gray-50"
      >
        <h2 id="perks-heading" class="sr-only">Our perks</h2>

        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div
            class="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0"
          >
            <div
              v-for="perk in perks"
              :key="perk.name"
              class="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            >
              <div class="md:flex-shrink-0">
                <div class="flow-root">
                  <img
                    class="-my-1 mx-auto h-24 w-auto"
                    :src="perk.imageUrl"
                    alt=""
                  />
                </div>
              </div>
              <div class="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 class="text-base font-medium text-gray-900">
                  {{ perk.name }}
                </h3>
                <p class="mt-3 text-sm text-gray-500">{{ perk.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
const collections = [
  {
    name: "Women's",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-04-collection-01.jpg",
    imageAlt: "Woman wearing a comfortable cotton t-shirt.",
  },
  {
    name: "Men's",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-04-collection-02.jpg",
    imageAlt: "Man wearing a comfortable and casual cotton t-shirt.",
  },
  {
    name: "Desk Accessories",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-04-collection-03.jpg",
    imageAlt:
      "Person sitting at a wooden desk with paper note organizer, pencil and tablet.",
  },
];
const trendingProducts = [
  {
    id: 1,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-04-trending-product-01.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 2,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 3,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-04-trending-product-03.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 4,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-04-trending-product-04.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  // More products...
];
const perks = [
  {
    name: "Free returns",
    imageUrl:
      "https://tailwindui.com/plus/img/ecommerce/icons/icon-returns-light.svg",
    description:
      "Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.",
  },
  {
    name: "Same day delivery",
    imageUrl:
      "https://tailwindui.com/plus/img/ecommerce/icons/icon-calendar-light.svg",
    description:
      "We offer a delivery service that has never been done before. Checkout today and receive your products within hours.",
  },
  {
    name: "All year discount",
    imageUrl:
      "https://tailwindui.com/plus/img/ecommerce/icons/icon-gift-card-light.svg",
    description:
      'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: "For the planet",
    imageUrl:
      "https://tailwindui.com/plus/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "We’ve pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];
// Add other data like trendingProducts and perks as needed
</script>

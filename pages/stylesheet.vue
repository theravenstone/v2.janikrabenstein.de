<template>
    <div class="container mx-auto p-6">
        <h1>Stylesheet</h1>
        <hr>
        <h2>1. Cards</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-800">
                <img class="object-cover w-full h-64"
                    src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="Article">

                <div class="p-6">
                    <div>
                        <p class="preheader">Preheader</p>

                        <h3>Card Title</h3>
                        <p class="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam
                            mauris egestas
                            quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                    </div>

                    <a href="/" target="_blank" rel="noopener noreferrer"
                        class="group text-primary hover:text-primary-hover">Link</a>
                </div>
            </div>
            <div class="overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-800">
                <img class="object-cover w-full h-64"
                    src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="Article">

                <div class="p-6">
                    <div>
                        <div class="flex items-center justify-between">
                            <span class="text-sm font-light text-gray-600 dark:text-gray-400">06 Sep 2022</span>
                            <a
                                class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-primary rounded cursor-pointer hover:bg-primary-hover">Tag</a>
                        </div>

                        <h3>Card Title</h3>
                        <p class="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam
                            mauris egestas
                            quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                    </div>

                    <div class="flex items-center justify-between mt-4">
                    <a href="#" class="text-primary hover:text-primary-hover">Read more</a>

                    <div class="flex items-center">

                        <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Janik Rabenstein</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
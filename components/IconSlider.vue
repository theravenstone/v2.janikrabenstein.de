<template>
    <XContainer>
        <span class="preheader">Richtig gutes zeug</span>
        <h2>Damit arbeite ich täglich<span class="text-primary">.</span></h2>
        <div class="mb-6">
          <span class="inline-block w-40 h-1 mx-1 bg-primary rounded-full"></span>
          <span class="inline-block w-5 h-1 mx-1 bg-primary rounded-full"></span>
          <span class="inline-block w-1 h-1 mx-1 bg-primary rounded-full"></span>
        </div>
        <div class="splide">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide flex place-content-center items-center">
                        <div>
                            <i class="fa-brands fa-github h-24 w-24"></i>
                            <span class="block text-primary text-center">GitHub</span>
                        </div>

                    </li>
                    <li class="splide__slide flex place-content-center items-center">
                        <div>
                            <i class="fa-brands fa-vuejs h-24 w-24"></i>
                            <span class="block text-primary text-center">Vue.js</span>
                        </div>
                    </li>
                    <li class="splide__slide flex place-content-center items-center">
                        <div>
                            <i class="fa-brands fa-js-square h-24 w-24"></i>
                            <span class="block text-primary text-center">Javascript</span>
                        </div>
                    </li>
                    <li class="splide__slide flex place-content-center items-center">
                        <div>
                            <i class="fa-brands fa-php h-24 w-24"></i>
                            <span class="block text-primary text-center">PHP</span>
                        </div>
                    </li>
                    <li class="splide__slide flex place-content-center items-center">
                        <div>
                            <i class="fa-brands fa-python h-24 w-24"></i>
                            <span class="block text-primary text-center">Python</span>
                        </div>
                    </li>
                    <li class="splide__slide flex place-content-center items-center">
                        <div>
                            <i class="fa-solid fa-font-awesome h-24 w-24"></i>
                            <span class="block text-primary text-center">Fontawesome</span>
                        </div>
                    </li>
                    <li class="splide__slide flex place-content-center items-center">
                        <div>
                            <i class="fa-brands fa-discord h-24 w-24"></i>
                            <span class="block text-primary text-center">Discord</span>
                        </div>
                    </li>
                    <li class="splide__slide flex place-content-center items-center">
                        <div>
                            <i class="fa-brands fa-trello h-24 w-24"></i>
                            <span class="block text-primary text-center">Trello</span>
                        </div>
                    </li>
                    <li class="splide__slide flex place-content-center items-center">
                        <div>
                            <i class="fa-brands fa-spotify h-24 w-24"></i>
                            <span class="block text-primary text-center">Spotify</span>
                        </div>
                    </li>
                    <li class="splide__slide flex place-content-center items-center">
                        <div>
                            <i class="fa-brands fa-slack h-24 w-24"></i>
                            <span class="block text-primary text-center">Slack</span>
                        </div>
                    </li>
                    <li class="splide__slide flex place-content-center items-center">
                        <div>
                            <i class="fa-brands fa-wordpress h-24 w-24"></i>
                            <span class="block text-primary text-center">Wordpress</span>
                        </div>
                    </li>
                    <li class="splide__slide flex place-content-center items-center">
                        <div>
                            <i class="fa-brands fa-stack-overflow h-24 w-24"></i>
                            <span class="block text-primary text-center">Stack Overflow</span>
                        </div>
                    </li>
                    <li class="splide__slide flex place-content-center items-center">
                        <div>
                            <i class="fa-brands fa-node h-24 w-24"></i>
                            <span class="block text-primary text-center">Node.js</span>
                        </div>
                    </li>
                    <li class="splide__slide flex place-content-center items-center">
                        <div>
                            <i class="fa-brands fa-symfony h-24 w-24"></i>
                            <span class="block text-primary text-center">Symfony</span>
                        </div>
                    </li>
                    <li class="splide__slide flex place-content-center items-center">
                        <div>
                            <i class="fa-brands fa-npm h-24 w-24"></i>
                            <span class="block text-primary text-center">NPM</span>
                        </div>
                    </li>
                    <li class="splide__slide flex place-content-center items-center">
                        <div>
                            <i class="fa-brands fa-chrome h-24 w-24"></i>
                            <span class="block text-primary text-center">Chrome</span>
                        </div>
                    </li>
                    <li class="splide__slide flex place-content-center items-center">
                        <div>
                            <i class="fa-brands fa-cloudflare h-24 w-24"></i>
                            <span class="block text-primary text-center">Cloudflare</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </XContainer>
</template>

<script>
export default {
    methods: {
        initSlider(){
            const iconSlider = new Splide('.splide', {
            type: 'loop',
            drag: 'free',
            gap: '1rem',
            perPage: 6,
            autoplay: false,
            pagination: false,
            arrows: false,
            breakpoints: {
                424: {
                    perPage: 2,
                },
                639: {
                    perPage: 3,
                },
                767: {
                    perPage: 4,
                },
                1023: {
                    perPage: 5,
                }
            },
        });
        
        iconSlider.mount(window.splide.Extensions)
        }
    },
    mounted() {
        try {
            this.initSlider();
        }
        catch (e){
        }
    }
}
</script>

<style>

</style>
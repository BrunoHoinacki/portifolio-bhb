<template>
    <div>
        <h1 class="text-center my-10 text-xl md:text-3xl">Contact us</h1>
        <div class="lg:space-x-4 lg:flex pb-[200px]">
            <div class="px-20">
                <div class="text-sm md:text-lg bg-green-500 w-[400px]">
                    <div class="">
                        <p class="font-semibold text-md md:text-xl">Get in touch</p>
                    </div>
                </div>
                <div class="my-10">
                    <span class="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, in.</span>
                </div>
                <div class="text-sm md:text-lg bg-green-500 w-[400px]">
                    <div class="flex space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -5 24 24" width="24" height="24">
                            <path
                                d="m3.598 2 5.747 5.12a1 1 0 0 0 1.33 0L16.423 2H3.598zM18 3.273l-5.994 5.341a3 3 0 0 1-3.992 0L2 3.254V12h16V3.273zM2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                        </svg>
                        <p class="font-semibold text-md md:text-xl">Chat with us</p>
                    </div>
                </div>
                <div class="my-10 space-y-4 flex flex-col">
                    <span class="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, in.</span>
                    <span class="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, in.</span>
                </div>
                <div class="text-sm md:text-lg bg-green-500 w-[400px]">
                    <div class="flex space-x-4">
                        <img src="@/assets/icon/jam/phone.svg" alt="">
                        <p class="font-semibold text-md md:text-xl">Phone</p>
                    </div>
                </div>
                <div class="my-10">
                    <span class="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, in.</span>
                </div>
            </div>
            <!-- SEPARANDO -->
            <!-- bg-gradient-to-bl from-green-800/40 via-black/60 via-50% to-green-800/40 -->
            <div class="bg-black w-[650px] rounded-2xl px-4 pt-5 relative overflow-hidden pb-10">
                <div
                    class="absolute z-10 -top-40 -right-40 rounded-full h-[500px] w-[500px] bg-green-500 shadow-2xl opacity-15 shadow-green-500 blur-2xl">
                </div>
                <div
                    class="absolute z-10 -bottom-40 -left-40 rounded-full h-[500px] w-[500px] bg-green-500 shadow-2xl opacity-15 shadow-green-500 blur-2xl">
                </div>
                <div class="pb-10">
                    <p class="font-semibold text-md md:text-xl">Level up your brand!</p>
                    <span>You can reach us anytime via</span><span class="text-green-500">
                        brunohoinackib@gmail.com</span>
                </div>
                <div class="flex flex-col space-y-4 w-[400px] mx-auto">
                    <div class="flex flex-col space-y-2">
                        <label for="name">Name and Last name</label>
                        <input type="text" name="name" id="name" placeholder="Your name"
                            class="bg-transparent rounded-lg px-2 py-4 ring-2 ring-green-500/20 hover:ring-green-500 focus:outline-none focus:border-green-500">
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" placeholder="Your email"
                            class="bg-transparent rounded-lg px-2 py-4 ring-2 ring-green-500/20 hover:ring-green-500 focus:outline-none focus:border-green-500">
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="phone">Phone number</label>
                        <input type="text" name="phone" id="phone" placeholder="Your phone"
                            class="bg-transparent rounded-lg px-2 py-4 ring-2 ring-green-500/20 hover:ring-green-500 focus:outline-none focus:border-green-500">
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="message">How can we help?</label>
                        <textarea name="message" id="message" placeholder="Tell us about your project"
                            class="bg-transparent rounded-lg px-2 py-4 ring-2 ring-green-500/20 hover:ring-green-500 focus:outline-none focus:border-green-500 "
                            rows="7" cols="50"></textarea>
                    </div>
                    <button class="bg-green-500">
                        Get Started
                    </button>
                    <button
                        class="w-fit mx-auto p-3 rounded-xl bg-green-500 hover:bg-green-600 px-2 !my-10">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
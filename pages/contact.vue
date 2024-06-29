<template>
    <div class="px-4 pt-28 pb-20">
        <div class="container mx-auto flex flex-wrap justify-between items-start md:pt-2">
            <div class="rounded-lg w-full lg:w-1/2 mb-3 lg:mb-0">
                <h1 class="text-3xl font-semibold mb-6">Contate-me</h1>
                <p class="mb-4">Precisa de ajuda?</p>
                <p class="mb-4">Email: <a href="mailto:brunohoinackib@gmail.com"
                        class="hover:text-brand-blue">brunohoinackib@gmail.com</a></p>
                <p class="mb-4">Telefone: <a href="tel:+5551980456224" class="hover:text-brand-blue">(51)
                        9
                        8045-6224</a></p>
                <p class="mb-4">Endereço: Rua 15 de outubro, 100 - Vale dos pinheiros, Gramado - RS</p>
            </div>
            <div class="w-full md:w-1/2">
                <div class=" border border-brand-blue p-5 mb-4 mb:mb-0 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-3xl font-semibold mb-6">Aumente o nível da sua marca</h2>
                    <form class="space-y-4" action="https://formsubmit.co/brunohoinackib@gmail.com" method="POST">
                        <input type="hidden" name="_captcha" value="false">
                        <input type="hidden" name="_next" value="https://www.brunohoinacki.site/thanks">
                        <div>
                            <input type="text" name="text" id="text" placeholder="Nome e sobrenome" required
                                class="w-full p-2 rounded-md border border-brand-blue focus:outline-none focus:border-brand-blue bg-transparent hover:border-blue-500">
                        </div>
                        <div>
                            <input type="email" name="email" id="email" placeholder="Email" required
                                class="w-full p-2 rounded-md border border-brand-blue focus:outline-none focus:border-brand-blue bg-transparent hover:border-blue-500">
                        </div>
                        <div>
                            <input type="tel" name="tel" id="tel" placeholder="Número de telefone"
                                class="w-full p-2 rounded-md border border-brand-blue focus:outline-none focus:border-brand-blue bg-transparent hover:border-blue-500">
                        </div>
                        <div>
                            <textarea name="message" id="message" placeholder="Como posso te ajudar?"
                                class="w-full p-2 rounded-md border border-brand-blue focus:outline-none focus:border-brand-blue bg-transparent hover:border-blue-500"
                                rows="4"></textarea>
                        </div>
                        <button type="submit" class="w-full p-2 rounded-md bg-brand-blue hover:bg-white text-white hover:text-brand-blue transition ease-in-out duration-700 
                            ">Encaminhar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

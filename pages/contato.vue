<template>
    <div class="text-white p-8">
        <div class="container mx-auto flex flex-wrap justify-between items-start md:pt-2">
            <div class="bg-green-600 p-6 rounded-lg w-full lg:w-1/2 mb-3 lg:mb-0">
                <h2 class="text-3xl font-semibold mb-6">Contate-me</h2>
                <p class="mb-4">Precisa de ajuda?</p>
                <p class="mb-4">Email: <a href="mailto:brunohoinackib@gmail.com"
                        class="text-green-500 hover:text-green-300">brunohoinackib@gmail.com</a></p>
                <p class="mb-4">Telefone: <a href="tel:+5551980456224" class="text-green-500 hover:text-green-300">(51)
                        9
                        8045-6224</a></p>
                <p class="mb-4">Endereço: Rua 15 de outubro, 100 - Vale dos pinheiros, Gramado - RS</p>
            </div>
            <div class="w-full md:w-1/2 md:pl-10">
                <div class="bg-green-600 p-5 md:p-6 rounded-lg">
                    <h3 class="text-xl font-semibold mb-6">Aumente o nível da sua marca</h3>
                    <form class="space-y-4" action="https://formsubmit.co/brunohoinackib@gmail.com" method="POST">
                    <div>
                        <input type="text" name="text" placeholder="Nome e sobrenome"
                            class="w-full p-2 rounded-md bg-gray-800 border border-gray-700 text-white">
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Email"
                            class="w-full p-2 rounded-md bg-gray-800 border border-gray-700 text-white">
                    </div>
                    <div>
                        <input type="tel" name="tel" placeholder="Número de telefone"
                            class="w-full p-2 rounded-md bg-gray-800 border border-gray-700 text-white">
                    </div>
                    <div>
                        <textarea name="message" placeholder="Como posso te ajudar?"
                            class="w-full p-2 rounded-md bg-gray-800 border border-gray-700 text-white"
                            rows="4"></textarea>
                    </div>
                    <button type="submit"
                        class="w-full p-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white">Encaminhar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
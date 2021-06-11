<template>
    <div>
        <header class="text-center bg-blue-800 text-white p-4">
            <div class="text-3xl md:text-5xl font-bold mb-3">Covid-19 Tracker API</div>
        </header>
        <div class="container">
            <Home />
        </div>
        <br />
    </div>
</template>

<script>
export default {
    head() {
        return {
            meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }],
            title: 'Home',
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
        }
    },
}
</script>

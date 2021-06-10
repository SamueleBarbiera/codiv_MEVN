<template>
    <div class="container">
        <div class="relative inline-block w-full text-gray-700 md:w-1/4">
            <select v-model="selected" class="form-select mt-10 block w-full border p-3 rounded" @change="onChange()">
                <option value="0">Seleziona la Nazionalità</option>
                <option v-for="post in posts" :value="post.ID" v-bind:key="post.ID">{{ post.Country }}</option>
            </select>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$axios = window.axios
export default {
    name: 'Home',
    data() {
        return {
            posts: {},
            Global: {},
            Countries: [],
            Country: '',
            country: '',
            Date: '',
            NewDeaths: '',
            NewConfirmed: '',
            TotalDeaths: '',
            TotalConfirmed: '',
            countries: '',
            selected: 0,
            onChange() {},
        }
    },
    setup({ posts }, { emit }) {
        const selected = 0
        return {
            selected,
            onChange() {
                const country = posts.find((item) => item.ID === selected.value)
                emit('get-country', country)
                console.log(selected.value)
            },
        }
    },
    methods: {
        getCountries() {
            axios
                .get('https://api.covid19api.com/summary', {
                    Country: this.Country,
                    NewDeaths: this.NewDeaths,
                    NewConfirmed: this.NewConfirmed,
                    TotalDeaths: this.TotalDeaths,
                    TotalConfirmed: this.TotalConfirmed,
                })
                .then((res) => {
                    console.log((this.posts = res.data))
                    console.log((this.posts = res.data.Countries))
                    return JSON.stringify((this.posts = res.data.Countries))
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        /*
        getGlobal() {
            axios
                .get('https://api.covid19api.com/summary', {
                    NewDeaths: this.NewDeaths,
                })
                .then((res) => {
                    console.log((this.posts = res.data.Global))
                    return JSON.stringify((this.posts = res.data.Global))
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        */
    },
    mounted() {
        this.getCountries()
        // this.getGlobal()
    },
}
</script>

<style>
/*eslint-disable*/
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
}

.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
}

.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}
</style>

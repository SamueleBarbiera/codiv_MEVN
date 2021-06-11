<template>
    <div class="flex flex-col align-center justify-center text-center">
        <div class="form-select mt-6 block w-full border p-4 rounded">
            <select v-model="country" class="form-select block w-full border p-4 rounded" @change="getData">
                <option value="">Select the country</option>
                <option v-for="(list, index) in countryList" :value="list" v-bind:key="index">{{ list }}</option>
            </select>
        </div>
        <br />
        <div class="grid sm:grid-cols gap-8">
            <div class="shadow-md bg-blue-100 p-10 text-center p-4 rounded">
                <h3 class="text-3xl text-blue-900 font-bold mb-4">Current Date</h3>
                <div class="text-2xl mb-4">
                    <h3 v-if="dataTime == ''" class="font-bold">{{ currentDate() }}</h3>
                    <h3 v-else class="font-bold">{{ dataTime }}</h3>
                </div>
            </div>
        </div>
        <br />
        <div class="grid lg:grid-cols gap-8">
            <div class="shadow-md bg-blue-100 p-10 text-center rounded">
                <h3 class="text-3xl text-blue-900 font-bold mb-4">Global</h3>
                <div class="text-2xl mb-4">
                    <span class="font-bold">New deaths</span>
                    <h3>{{ NewDeaths }}</h3>
                </div>
                <div class="text-2xl mb-4">
                    <span class="font-bold">Total deaths</span>
                    <h3>{{ TotalDeaths }}</h3>
                </div>
            </div>
        </div>
        <br />
        <div class="grid md:grid-cols-2 gap-8">
            <div class="shadow-md bg-blue-100 p-10 text-center rounded">
                <h3 class="text-3xl text-blue-900 font-bold">Infected</h3>
                <h3 v-if="country == ''" class="text-3xl text-red-900 font-bold mb-4">Select the NATION first</h3>
                <h3 v-else class="text-3xl text-white-900 font-bold mb-4">in {{ country }}</h3>
                <div class="text-2xl mb-4">
                    <span class="font-bold">Current</span>
                    <h3 v-if="newCases == null">0</h3>
                    <h3 v-else>{{ newCases }}</h3>
                </div>
                <div class="text-2xl mb-4">
                    <span class="font-bold">Total</span>
                    <h3 v-if="cases == null && cases == 0">0</h3>
                    <h3 v-else>{{ cases }}</h3>
                </div>
            </div>
            <!-- Box 2 -->
            <div class="shadow-md bg-blue-200 p-10 text-center rounded">
                <h3 class="text-3xl text-blue-900 font-bold">Deaths</h3>
                <h3 v-if="country == ''" class="text-3xl text-red-900 font-bold mb-4">Select the NATION first</h3>
                <h3 v-else class="text-3xl text-white-900 font-bold mb-4">in {{ country }}</h3>
                <div class="text-2xl mb-4">
                    <span class="font-bold">Current</span>
                    <h3 v-if="newDeaths == null">0</h3>
                    <h3 v-else>{{ newDeaths }}</h3>
                </div>
                <div class="text-2xl mb-4">
                    <span class="font-bold">Total</span>
                    <h3 v-if="deaths == null">0</h3>
                    <h3 v-else>{{ deaths }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            posts: {},
            Global: {},
            Countries: [],
            country: '',
            countryList: '',
            Country: '',
            Date: '',
            deaths: 0,
            cases: 0,
            recovered: '',
            newDeaths: 0,
            NewDeaths: 0,
            NewConfirmed: '',
            TotalDeaths: 0,
            TotalConfirmed: '',
            total: '',
            newCases: 0,
            dataTime: '',
        }
    },
    methods: {
        currentDate() {
            const current = new Date()
            const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
            return date
        },
        getGlobal() {
            fetch('https://api.covid19api.com/summary')
                .then((response) => response.json())
                .then((data) => {
                    this.NewDeaths = data.Global.NewDeaths
                    this.TotalDeaths = data.Global.TotalDeaths
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getCountry() {
            fetch('https://covid-193.p.rapidapi.com/countries', {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '44058dce25msh3db8a329649904ap1c056ejsnd2c13f66af02',
                    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    this.countryList = data.response
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getData() {
            fetch('https://covid-193.p.rapidapi.com/statistics?country=' + this.country, {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '44058dce25msh3db8a329649904ap1c056ejsnd2c13f66af02',
                    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    data = data.response[0]
                    this.cases = data.cases.total
                    this.dataTime = data.day
                    this.country = data.country
                    this.newCases = data.cases.new
                    this.deaths = data.deaths.total
                    this.newDeaths = data.deaths.new
                    this.recovered = data.cases.recovered
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
    mounted() {
        this.getCountry()
        this.getData()
        this.getGlobal()
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

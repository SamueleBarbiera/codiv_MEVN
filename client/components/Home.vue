<template>
    <div class="container">
        <div class="relative inline-block w-full text-gray-700 md:w-1">
            <h3>new deaths GLOBALY</h3>
            <h3>{{ NewDeaths }}</h3>
            <h3>Total deaths GLOBALY</h3>
            <h3>{{ TotalDeaths }}</h3>
        </div>
        <div class="relative inline-block w-full text-gray-700 md:w-1">
            <select v-model="country" class="form-select mt-10 block w-full border p-3 rounded" @change="getData">
                <option value="">Seleziona la Nazionalità</option>
                <option v-for="(list, index) in countryList" :value="list" v-bind:key="index">{{ list }}</option>
            </select>
        </div>
        <br />
        <div class="relative inline-block w-full text-gray-700 md:w-1">
            <h3>casi totali</h3>
            <h3 v-if="cases == null && cases == 0">0</h3>
            <h3 v-else>{{ cases }}</h3>
        </div>
        <div>
            <h3>casi attuali</h3>
            <h3 v-if="newCases == null">0</h3>
            <h3 v-else>{{ newCases }}</h3>
        </div>
        <div>
            <h3>total deaths</h3>
            <h3 v-if="deaths == null">0</h3>
            <h3 v-else>{{ deaths }}</h3>
        </div>
        <div>
            <h3>new deaths</h3>
            <h3 v-if="newDeaths == null">0</h3>
            <h3 v-else>{{ newDeaths }}</h3>
        </div>
        <div>
            <h3>date</h3>
            <h3>{{ dataTime }}</h3>
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
            deaths: '',
            cases: '',
            recovered: '',
            newDeaths: '',
            NewDeaths: '',
            NewConfirmed: '',
            TotalDeaths: '',
            TotalConfirmed: '',
            total: '',
            newCases: '',
            dataTime: '',
        }
    },
    methods: {
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

<template>
    <div id="registration">
        <h3>Registration.vue</h3>
        <hr>
        <div class="row" v-for="(user,index) in users" v-bind:key="index">
            <h4>{{ user.name }}</h4>
            <button @click="registerUser(user)">Register</button>
        </div>
    </div>
</template>

<script>
    export default {
        computed : {
            users(){
                return this.$store.getters.unregisteredUser;
            }
        },
        methods : {
            registerUser(user) {
                const date = new Date; 
                this.$store.state.registrations.push({userId: user.id, name: user.name, date: date.getMonth() + '/' + date.getDay()})
                user.registered = true;
            }
        }
    }
</script>

<style scoped>
    #registration {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
    }
    .row h4 {
        display: inline-block;
        width: 70%;
        text-align: left;
        margin: 0 0 10px 0;
    }
    button {
        background-color: lightgreen;
        border: none;
        box-shadow: 1px 1px 1px black;
        font-size: inherit;
        text-align: right;
        cursor: pointer;
    }
    button:hover {
        background-color: green;
    }
</style>
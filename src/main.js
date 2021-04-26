import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

createApp(App).use(store).use(router).mount('#app')


axios.defaults.baseURL = 'http://httpbin.org';
axios.defaults.timeout = 5000;

axios({
    url: '/get'
}).then(resolve =>{
    console.log('simple get:');
    console.log(resolve);
})

axios({
    url: '/get',
    params: {
        name:'jack',
        page: 12
    }
}).then(resolve =>{
    console.log('with name:')
    console.log(resolve);
})


axios({
    url: '/post',
    method:'post'
}).then(resolve =>{
    console.log('simple post:');
    console.log(resolve);
})

axios.all([axios({
    url: '/post',
    method:'post'
}),
    axios({
    url: '/get',
    params: {
        name:'jack',
        page: 12
    }
})]).then(axios.spread((res1,res2) =>{
    console.log('axios all:');
     console.log(res1);
     console.log(res2);
}));
// then(resolve=>{
//     console.log('axios all:');
//     console.log(resolve[0]);
//     console.log(resolve[1]);
// })

const instance = axios.create({
    baseURL:'http://httpbin.org',
    timeout: 5000
});

instance({
    url: '/get'
}).then(resolve =>{
    console.log('instance get:');
    console.log(resolve);
})
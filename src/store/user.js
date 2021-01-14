import router from '@/router';


const state ={
    user:{},
    isLogin:false,
};

const getters ={
    isLogin:(state)=>state.isLogin
};

const actions = {
   async login ({commit},formData) {
       
   }
};
const mutations={
    
};

export default ={
    state,
    getters,
    actions,
    mutations
}
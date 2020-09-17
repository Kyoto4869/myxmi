const state={
	
	"name":"馒头"
	
	
};
const  mutations={
	
	changeName(state){
		state.name="jack"
	}
	
	
};
const actions={
	
	addNum({commit,dispatch,getters,rootGetters,state,rootState}){
		rootState.goods[0].num++;
		commit("changeName");
	}
	
	
};
const getters={
	nameLen(state){
		return state.name.length;
	}
};
export default {
	state,mutations,actions,getters
}
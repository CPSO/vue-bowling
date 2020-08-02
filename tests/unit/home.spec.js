import { mount } from '@vue/test-utils'
import { BootstrapVue} from 'bootstrap-vue'
import { createLocalVue } from '@vue/test-utils'
import Home from '@/components/Home.vue'
import store from '@/store/index.js'

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)

describe('Check for home render', () => {
    test('Check if home renders', () => {
        const wrapper = mount(Home,{localVue})
        expect(wrapper.exists()).toBe(true);
    })
})

describe('Points Algorithm test', () => {

  test('Ask for points [6,1]', () => {
    store.commit('UPDATE_BSCORES', [[6,1]])          
    let score = store.getters.getBScore   
    console.log(`Submitted Points: `)   
    console.log(store.getters.getBPointsRaw) 
    console.log(`Calculated Score: ${score}`)
    expect(score).toEqual([7]);
  })


  test('Ask for points [[3,5], [1,1], [7,1], [8,1], [1,3]]', () => {
    store.commit('UPDATE_BSCORES', [[3,5],[1,1],[7,1],[8,1],[1,3]])  
    let score = store.getters.getBScore 
    console.log(`Submitted Points: `)   
    console.log(store.getters.getBPointsRaw) 
    console.log(`Calculated Score: ${score}`)    
    expect(score).toEqual([8,10,18,27,31]);
  })

  test('Ask for points [[3,3]', () => {
    store.commit('UPDATE_BSCORES', [[3,3]])  
    let score = store.getters.getBScore 
    console.log(`Submitted Points: `)   
    console.log(store.getters.getBPointsRaw) 
    console.log(`Calculated Score: ${score}`)    
    expect(score).toEqual([6]);
  })
  
  test('Ask for points [[6,0],[1,2],[4,2],[4,5],[2,7],[8,1],[7,3],[8,1],[0,0],[9,0]]', () => {
    store.commit('UPDATE_BSCORES', [[6,0],[1,2],[4,2],[4,5],[2,7],[8,1],[7,3],[8,1],[0,0],[9,0]])  
    let score = store.getters.getBScore 
    console.log(`Submitted Points: `)   
    console.log(store.getters.getBPointsRaw) 
    console.log(`Calculated Score: ${score}`)    
    expect(score).toEqual([6,9,15,24,33,42,60,69,69,78]);
  })

  test('Ask for points [[3,1],[6,1],[2,4],[0,4],[8,0],[10,0],[4,1],[8,2],[4,6]]', () => {
    store.commit('UPDATE_BSCORES', [[3,1],[6,1],[2,4],[0,4],[8,0],[10,0],[4,1],[8,2],[4,6]])  
    let score = store.getters.getBScore 
    console.log(`Submitted Points: `)   
    console.log(store.getters.getBPointsRaw) 
    console.log(`Calculated Score: ${score}`)    
    expect(score).toEqual([4,11,17,21,29,44,49,63,73]);
  })

  test('Ask for points [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,10]]', () => {
    store.commit('UPDATE_BSCORES', [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,10]])  
    let score = store.getters.getBScore 
    console.log(`Submitted Points: `)   
    console.log(store.getters.getBPointsRaw) 
    console.log(`Calculated Score: ${score}`)    
    expect(score).toEqual([30,60,90,120,150,180,210,240,270,300]);
  })
  
  test('Ask for points [[4,2],[6,0],[10,0],[7,0],[0,9],[7,2],[2,4],[2,3]]', () => {
    store.commit('UPDATE_BSCORES', [[4,2],[6,0],[10,0],[7,0],[0,9],[7,2],[2,4],[2,3]])  
    let score = store.getters.getBScore 
    console.log(`Submitted Points: `)   
    console.log(store.getters.getBPointsRaw) 
    console.log(`Calculated Score: ${score}`)    
    expect(score).toEqual([6,12,29,36,45,54,60,65]);
  })
})
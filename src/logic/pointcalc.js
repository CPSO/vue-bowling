import store from '../store'

const pc = new class PC {
    constructor(){}

    calcPoints(){
        let a = store.getters.getBPointsRaw
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let scores = []
        let b = []

        for (let index = 0; index < a.length; index++) {
            const element = a[index];
            console.log(element.toString())
            console.log(element.reduce(reducer))
            scores.push(element.reduce(reducer))

          }
          for (let index = 0; index < scores.length; index++) {
              const element = scores[index];
              let value = 0
              if (index == 0) {
                value = element
              } else {
                value = element + b[index-1]

              }
             
              b.push(value)


              
          }
          console.log("scores" + scores) 
          console.log("b" + b)
    }
}

export {pc};
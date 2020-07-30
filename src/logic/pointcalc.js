import store from '../store'

const pc = new class PC {
    constructor(){}

    calcPoints(){
        let points = store.getters.getBPointsRaw
       //const reducer = (accumulator, currentValue) => accumulator + currentValue;

        //Contains the type of points. 0 = regular points, 1 = spare, 2 = strike
        let pointType = []
        let totalScore = []

        

        // Walk though the recived points
        for (let index = 0; index < points.length; index++) {
            //const element = points[index];
           // console.log(`Element: ${element.toString()}`)
            console.log(`First point Value: ${points[index][0]}`)
            if ( points[index][0] == 10 ){
              // We have a strike
              console.log('We have a strike')
              pointType.push(2)
            }
            else if ( points[index][0] + points[index][1] == 10 ) {
              // Not a strike, so check for spare
              console.log('We have a spare')
              pointType.push(1)
              
            } else {
              console.log('We have regular points')
              pointType.push(0)
             }

          }
          const length = pointType.length - 1 

          for (let index = 0; index < pointType.length; index++) {
            console.log(`Foreach on point ${pointType[index]}`)
            let score
            console.log(`length: ${length} and index: ${index}`)
            
            switch (pointType[index]) {
              case 0:
                //regular points
                score = points[index][0] + points[index][1]
                if (index == 0) {
                  totalScore.push(score)
                } else {
                  totalScore.push(score + totalScore[index - 1])
                }
                            
                break;
              case 1:
                //Spare
                if (index == length){
                  // Special case, since on last entry
                  score = 10
                } else {score = 10 + points[index + 1][0]}                
                if (index == 0) {
                  totalScore.push(score)
                } else {                  
                  totalScore.push(score + totalScore[index - 1])
                }
                break;
              case 2:
                if (index == length) {
                  // Special case, since last entry
                  score = 10
                } else {score = 10 + points[index + 1][0] + points[index + 1][1]}
                if (index == 0) {
                  totalScore.push(score)
                } else {
                  totalScore.push(score + totalScore[index - 1])
                }
                break;
              default:
                break;
            }
          }




          console.log(`Point Types: ${JSON.stringify( pointType )}`)
          console.log(`Points: ${JSON.stringify( points )}`)
          console.log(`Score: ${JSON.stringify( totalScore )}`)
    }
}

export {pc};
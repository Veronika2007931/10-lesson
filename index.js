
// const date = new Date("May 15, 2007, 14:45:37")

// console.log(date)

// const text = document.querySelector('.text')

// const date2 = new Date(2007, 05, 15)



// text.innerHTML = `Day ${date2.getDate()}, Month ${date2.getUTCMonth()}, Year ${date2.getUTCFullYear()}`


// function getYearr(){
//     const data = year.getFullYear()
//     console.log(data)
// }


// getYearr()
const  start = new Date('2007-05-15')
const  end =  new Date('2007-07-15')

// console.log(start.getTime())
// function getDayNow(){
//     const day = year.getDay()
//     console.log(day)

//     // if(day === ){

//     // }
// }

// getDayNow()

function calcTime(){
   return (start.getTime()- end.getTime())/24
}
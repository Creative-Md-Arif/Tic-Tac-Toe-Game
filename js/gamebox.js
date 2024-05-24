let box = document.querySelectorAll('.box');

console.log(box)


let WinPattern =[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

let turn = true

box.forEach((item)=>{
  item.addEventListener('click',()=>{
   if(turn){
    item.innerHTML = 'x'
    turn = false
    item.disabled = true
    item.style = 'color:red;'
   }else{
    item.innerHTML = '0'
    turn = true
    item.disabled = true
    item.style = 'color:blue;'
   }

   winner()

  })
})

restratbtn.addEventListener('click',(winner)=>{
    if(winner == ''){

    }
})


function winner(){
  for(pattern of WinPattern){
    let no1 = box[pattern[0]].innerHTML
    let no2 = box[pattern[1]].innerHTML
    let no3 = box[pattern[2]].innerHTML

    if(no1 != '' &&  no2 != '' && no3 != ''){
     if(no1 === no2 && no2 === no3){
     alert(`Winner is ${no1}`)
     stopgame()

     }

    }
    
  }

}

let stopgame =()=>{
  box.forEach((item)=>{
    item.disabled = true
  })
}

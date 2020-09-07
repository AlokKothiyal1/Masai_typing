btn_go = document.getElementById('btn_go')
inner_container = document.getElementById('inner_container')
user_time
initial_time =0
div_paragraph = document.getElementById('paragraph')
input_area = document.getElementById('input_area')
correct_count =0
incorrect_count=0
final_correct=0
final_incorrect=0



//Displays the hidden elements

btn_go.addEventListener('click',()=>{

    user_time = document.getElementById('user_time').value
    document.getElementById('timing').remove()
    initial_time=user_time
    inner_container.style.display="block"
    console.log(user_time)

    var x =setInterval(()=>{
        timer_div = document.getElementById('timer')
        timer_div.innerText= user_time+" Sec"
        user_time--

        if(user_time==-2){
            clearInterval(x)
            timer_div.innerText="Time Expired!"
            final_correct+=correct_count
            final_incorrect+=incorrect_count
            display_results()
           // console.log("final",final_correct,final_incorrect)
        }
        
    },1000)
    
})



//compares user input with given paragraph values
input_area.addEventListener('input',()=>{
    

    arrayQuote = div_paragraph.querySelectorAll('span')
    arrayValue = input_area.value.split('')

    if(arrayQuote.length==arrayValue.length){
        final_correct+=correct_count
        final_incorrect+=incorrect_count
        renderNewQuote()
        input_area.value=""
        console.log(final_correct,final_incorrect)
    }

    correct_count=0
    incorrect_count=0

    arrayQuote.forEach((characterSpan,index)=>{

        const character =arrayValue[index]
        if(character==null){
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
        }
        else if(character == characterSpan.innerText){
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect') 
            correct_count++   
        }
        else{
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            incorrect_count++
        }
    })
})

function getRandomQuote() {
    return fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => data.content)
}

async function renderNewQuote() {
    const quote = await getRandomQuote()
    div_paragraph.innerHTML = ''

    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        div_paragraph.append(characterSpan)
    })
}

function display_results(){
    container = document.getElementById('container')
    container.innerHTML=""

    accuracy =((final_correct/(final_incorrect+final_correct))*100).toFixed(2)
    speed_char =Math.floor((final_correct/initial_time)*60)
    speed_word = (speed_char/5).toFixed(2)

    document.getElementById('results').style.display='block'
    var rego =document.getElementById('rego')
    rego.addEventListener('click',()=>{window.location.href="typing_speed.html"})

    
   document.getElementById('accuracy').textContent =accuracy+" %"
   document.getElementById('char').textContent =speed_char+" CPM"
   document.getElementById('word').textContent =speed_word+" WPM"


    
}
renderNewQuote()


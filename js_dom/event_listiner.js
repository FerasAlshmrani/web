const target = document.querySelector('body')

function handle_click(){
    console.log("you clicked me >///<")
}

target.addEventListener('click',handle_click)
// ymdek b3d t36eh eventlistener bdal k4a

//<h2 onclick="hanle_click()> test </h2>"


//example task :

var h1 = document.querySelector('h1'); 

var arr = ['example domain','First Click','Second Click','Third Click']; 

function handleClicks(){

    switch(h1.innerText){
    case arr[0]:
            h1.innerText = arr[1]
            break;
    case arr[1]:
            h1.innerText = arr[2]
            break;
        case arr[2]:
            h1.innerText = arr[3]
            break;
      default:
        h1.innerText = arr[0]
		break;
        
    }

}
document.gem
h1.addEventListener('click',handleClicks) 
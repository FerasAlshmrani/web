const h2 = document.createElement('h2')
// this is how you create an elemnt in dom

h2.innerText = "this is how you can write text inside h2";

h2.setAttribute('id','id_name');

h2.setAttribute('class','class_name');
// this is how you cant give arrtibutes 

document.body.appendChild(h2);
//this is how you can show in html

document.querySelector('p');
// k4a tgeb al paragraph 

document.querySelectorAll('p')
//ys7blk kll al paragraphs wy5leha 3la shkl array

document.getElementById('id_name');
//k4a ts7b ay wa7d bl id 4a - e4a kan akthr mn wa7d m3h al id ra7 ygeblk array

document.getElementsByClassName('class_name');
//k4a ts7b ay wa7d bl class 4a - e4a kan akthr mn wa7d m3h al class ra7 ygeblk array


//elemnt is singular for id and plural for class 
let body=document.querySelector('body')
body.style.fontFamily='poppins'

document.addEventListener('keydown',keyevent)
document.addEventListener('keypress',keyevent);
document.addEventListener('keyup',keyevent);

function keyevent(event) {
    const eventtype=event.type;
    const keycode=event.code;
    const keyname=event.key;
    console.log(`event type : ${eventtype}`);
    console.log(`event code : ${keycode}`);
    console.log(`event name : ${keyname}`);
    
    
    
}
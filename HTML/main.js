let post=12
function change_back(x){
    document.getElementById(post).style.display='none'
    post=post-1
    if(post == -12){
        post=24
    }
    document.getElementById(post).style.display='block'
}
function change_next(x){
    document.getElementById(post).style.display='none'
    post=post+1
    if(post == 25){
        post=-11
    }
    document.getElementById(post).style.display='block'
}

function holidays(){
    document.getElementById('Quotes_div').style.display='none'
    document.getElementById('Holiday_div').style.display='block'
}
function quotes(){
    document.getElementById('Holiday_div').style.display='none'
    document.getElementById('Quotes_div').style.display='block'
}
function darklight(){
    s=document.getElementById('dar-ligt').innerText
    if (s=='Light Mode'){
        document.body.style.backgroundColor='black'
        document.getElementById('dar-ligt').innerText='Dark Mode'
    }else{
        document.getElementById('dar-ligt').innerText='Light Mode'
    }
}
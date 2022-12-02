let post=11
function change_back(x){
    document.getElementById(post).style.display='none'
    post=post-1
    if(post == -13){
        post =12
    }
    document.getElementById(post).style.display='block'
}
function change_next(x){
    document.getElementById(post).style.display='none'
    post=post+1
    if(post == 13){
        post =-1
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
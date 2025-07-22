for(let i=1; i<=4; i++){
    let plus = document.getElementById(`plus${i}`).style.display = 'block';
    let minus = document.getElementById(`minus${i}`).style.display = 'none';
    let p = document.getElementById(`p${i}`).style.display = 'none';
}

function response(i) {
    let plus = document.getElementById(`plus${i}`);
    let minus = document.getElementById(`minus${i}`);
    let p = document.getElementById(`p${i}`);
    
    if (plus.style.display === 'block') {
        plus.style.display = 'none';
        minus.style.display = 'block';
        if (p) p.style.display = 'block';
    } else {
        plus.style.display = 'block';
        minus.style.display = 'none';
        if (p) p.style.display = 'none';
    }
}

function reset(){
    for(let i=1; i<=4; i++){
    let plus = document.getElementById(`plus${i}`).style.display = 'block';
    let minus = document.getElementById(`minus${i}`).style.display = 'none';
    let p = document.getElementById(`p${i}`).style.display = 'none';
    }
}
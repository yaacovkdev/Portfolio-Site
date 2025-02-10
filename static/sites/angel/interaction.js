let lostcondition = false;
let wincondition = false;
function mousePressed(){
    if(lostcondition || wincondition) return;
    if(!mouseBound(mouseX, mouseY)) return;
    
    var gridpos = toPos(mouseX, mouseY);

    if(!isClear(gridpos.x, gridpos.y)) return;
    
    //change it's location
    Filled.push([gridpos.x, gridpos.y]);
    angelBreadthFirst();
    calcCondition();
    redraw();
}

function mouseBound(x,y){
    if(x < 0 || y < 0 || x >= CANVSIZEX-2 || y >= CANVSIZEY-2){
        return false;
    }
    return true;
}
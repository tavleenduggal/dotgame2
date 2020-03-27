var grid = [], dot;

var drawnSprites=[];
function setup(){
    createCanvas(450, 450);
   dotLoop();
   
    
}

function draw(){
    background(255);
    grid[0].debug=true;
   
   dotline();
   check();
    drawSprites();
}

function dotLoop(){
    for(var y = 2; y < 22; y++){
        for(var x = 2; x < 22; x++){
            dot = createSprite(x*20, y*20, 3, 3);
            grid.push(dot);
        }
    }
}
function dotline(){
    for(var dotL = 0; dotL < 400; dotL++){
        if (mousePressedOver(grid[dotL])){
            if(dotL >= 20){
                var top = createSprite(grid[dotL].x, grid[dotL].y - 12, 3, 20);
                drawnSprites.push(top)
            }
            if(dotL < 380){
                var bottom = createSprite(grid[dotL].x, grid[dotL].y + 12, 3, 20);
                drawnSprites.push(bottom)
            
            }
            if(dotL % 20 !== 0){
                var left = createSprite(grid[dotL].x - 12, grid[dotL].y, 20, 3);
                drawnSprites.push(left)
            
            }
            if((dotL + 1) % 20 !== 0){
                var right = createSprite(grid[dotL].x + 12, grid[dotL].y, 20, 3);
                drawnSprites.push(right)
            
            }
            
        }
       }

     
    }


    function check()
    {
        var c=0;
        for(var i=0;i<drawnSprites.length;i++)
        {
            if(mousePressedOver(drawnSprites[i]))
            {
                createSprite(drawnSprites[i].x,drawnSprites[i].y,drawnSprites[i].width,drawnSprites[i].height)
                c=1;
                break;
            }
        }
        if(c==1)
        {
            for(var i=0;i<drawnSprites.length;i++)
            {
                drawnSprites[i].destroy();
            }
           
        }
    }

    function mousePressedOver(s)
    {
        s.mouseActive=true
        if(mouseIsPressed && s.mouseIsOver )
        {
            s.visible=false;
        }
    }
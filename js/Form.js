class Form 
{
  constructor() 
  {
    this.input = createInput("Name");   //1
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2')
    this.reset= createButton("RESET")
    this.endimg= createImg
  }
  allhide()
  {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display()
  {
    fill("red");

    //creating html elements and positioning them
    this.title.html("Car Racing Game");    //writing in html formaT   //2

    this.title.position(displayWidth/2 - 50, 0);  //3
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100, displayHeight/4)
    
    this.button.mousePressed(()=>{    //arrow func
      this.input.hide()
      this.button.hide()

      myplayer.pname = this.input.value();   //4
      
      myplayercount+=1;
      myplayer.pindex = myplayercount    //5
      myplayer.updateplayerinfo()   //6
      myplayer.updateCount(myplayercount);
      
      this.greeting.html("Hello " + myplayer.pname )   //7
      this.greeting.position(displayWidth/2 - 70, displayHeight/4)
    });

    this.reset.mousePressed(()=>{
      myplayer.updateCount(0);
      mygame.gsupdate(0);
    })
  }
}

 

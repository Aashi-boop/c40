class Player 
{
    constructor()
    {
      this.pindex = null;
      this.pdistance = 0;
      this.pname = null;
    }

    readPlayerCount()
    {
      var playerCountRef = mydatabase.ref('playerCount');
      playerCountRef.on("value",function(data){
      myplayercount = data.val();
      })
    }

     updateplayerinfo()
    {
      var playerIndex = "players/player" + this.pindex;   //player1
      mydatabase.ref(playerIndex).set({             // creating new node as player1
        name: this.pname,
        distance: this.pdistance
      });
    }

    updateCount(pcount)
    {
      mydatabase.ref('/').update({
        playerCount: pcount
      });
    }

    static getallplayersInfo(){
    var playerInfoRef = mydatabase.ref('players');
    playerInfoRef.on("value",(data)=>{
      allplayers = data.val();
    })
  }
   
    
}

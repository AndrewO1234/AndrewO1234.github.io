$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300,650,200,25);
    createPlatform(100,525,200,25);
    createPlatform(300,400,200,25);
    createPlatform(100,275,200,25);
    createPlatform(300,150,200,25);
    createPlatform(600,275,200,25);
    createPlatform(600,525,200,25);
    createPlatform(900,400,200,25);
    createPlatform(1200,525,200,25);
    createPlatform(1200,275,200,25);

    createPlatform(100,0,25,525);

    // TODO 3 - Create Collectables
    createCollectable("database",400,100,0);
    createCollectable("database",1000,350,0);
    createCollectable("database",1300,225,0);
    
    // TODO 4 - Create Cannons
    createCannon("right",150,1000)
    createCannon("top",600,2000)
    createCannon("right",400,1500)
    createCannon("top",900,2000)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

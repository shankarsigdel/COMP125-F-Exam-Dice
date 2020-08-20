let Game = (function(){
    // variable declarations
    let canvas:HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage:createjs.Stage;
    let assets: createjs.LoadQueue;
    //Diace Label
    let diceLabel1: UIObjects.Label;
    let diceLabel2: UIObjects.Label;
    //Roll Button
    let rollButton: UIObjects.Button;
    //Diace Button
    let diceButton1: UIObjects.Button;
    let diceButton2: UIObjects.Button;
     //To inatialize the 1 dice
    let exampleObject: Core.GameObject;
    let randomNumber1: 0;
    let randomNumber2: 0;
    let assetManifest = 
    [
        {id:"1", src:"./Assets/images/1.png"},
        {id:"2", src:"./Assets/images/2.png"},
        {id:"3", src:"./Assets/images/3.png"},
        {id:"4", src:"./Assets/images/4.png"},
        {id:"5", src:"./Assets/images/5.png"},
        {id:"6", src:"./Assets/images/6.png"},
        {id:"backButton", src:"./Assets/images/startButton.png"},
        {id:"background", src:"./Assets/images/background.png"},
        {id:"blank", src:"./Assets/images/blank.png"},
        {id:"button", src:"./Assets/images/button.png"},
        {id:"nextButton", src:"./Assets/images/nextButton.png"},
        {id:"placeholder", src:"./Assets/images/placeholder.png"},
        {id:"resetButton", src:"./Assets/images/resetButton.png"},
        {id:"rollButton", src:"./Assets/images/rollButton.png"},
        {id:"startButton", src:"./Assets/images/startButton.png"},
        {id:"startOverButton", src:"./Assets/images/startOverButton.png"}
    ];
    function Preload():void
    {
        console.log(`%c Preload Function`, "color: grey; font-size: 14px; font-weight: bold;");
        assets = new createjs.LoadQueue(); // asset container 
        assets.installPlugin(createjs.Sound); // supports sound preloading
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);
    }
    /**
     * This method initializes the CreateJS (EaselJS) Library
     * It sets the framerate to 60 FPS and sets up the main Game Loop (Update)
     */
    function Start():void
    {
        console.log(`%c Start Function`, "color: grey; font-size: 14px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = Config.Game.FPS;
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        Config.Game.ASSETS = assets; // make a reference to the assets in the global config
        Main();
    }
    /**
     * This function is triggered every frame (16ms)
     * The stage is then erased and redrawn 
     */
    function Update():void
    {
        stage.update();
    }
    //Switch Case to Switch the Images
    function switchImage(dicesImg: number): string 
    {
        let imageSrc;
        switch (dicesImg) {
            case 0:
                imageSrc = "../Assets/images/blank.png";
                break;
            case 1:
                imageSrc = "../Assets/images/1.png";
                break;
            case 2:
                imageSrc = "../Assets/images/2.png";
                break;
            case 3:
                imageSrc = "../Assets/images/3.png";
                break;
            case 4:
                imageSrc = "../Assets/images/4.png";
                break;
            case 5:
                imageSrc = "../Assets/images/5.png";
                break;
            case 6:
                imageSrc = "../Assets/images/6.png";
                break;
            }
        return imageSrc;
    }
    //Function to generate Random
    function generateRandom() 
    {
        randomNumber1 : Math.floor((Math.random() * 6) + 1);
        randomNumber2 : Math.floor((Math.random() * 6) + 1);
    }
    //Function to Roll the Button
    function rollButton_clicked(): void 
    {
        generateRandom();

        let imagesForDice1 = switchImage(randomNumber1);
        var imagesForDice2 = switchImage(randomNumber2);
        diceButton1 : imagesForDice1;
        diceButton2 : imagesForDice2;
        diceLabel1 : randomNumber1;
        diceLabel2 : randomNumber2;
    }
   /**
     * This is the main function of the Game (where all the fun happens)
     *
     */
    function Main():void
    {
        console.log(`%c Main Function`, "color: grey; font-size: 14px; font-weight: bold;");
        //DisplayBasicUI();
        diceLabel1 = new UIObjects.Label("A Dice Label", "40px", "Consolas", "#000000", Config.Game.CENTER_X + 90, Config.Game.CENTER_Y + 40, true);
        stage.addChild(diceLabel1);

        rollButton = new UIObjects.Button("A Dice Label", Config.Game.CENTER_X, Config.Game.CENTER_Y + 100, true);
        stage.addChild(rollButton);

        rollButton.on("click", ()=>{
            console.log("example button clicked");
        });
    }
        /*
        function DisplayOtherUI():void
        {
            exampleLabel = new UIObjects.Label("Another Label", "40px", "Consolas", "#000000", Config.Game.CENTER_X, Config.Game.CENTER_Y, true);
            stage.addChild(exampleLabel);
    
            exampleButton = new UIObjects.Button("startButton", Config.Game.CENTER_X, Config.Game.CENTER_Y + 100, true);
            stage.addChild(exampleButton);
    
            exampleButton.on("click", ()=>{
                console.log("example button clicked");
                
                let randomNumber = Util.Mathf.RandomRange(1, 6, true);
                exampleLabel.setText(`It rolled: ${randomNumber.toString()} times!`);
                let image = assets.getResult(randomNumber.toString()) as HTMLImageElement;
                exampleButton.image = image;
            });
            
    
            //This is to display the 1 dice
            exampleObject = new Core.GameObject("1", Config.Game.CENTER_X, Config.Game.CENTER_Y + -120, true);
            stage.addChild(exampleObject);
    
            //this is to display the 2 dice
            //let newImage = assets.getResult("2") as HTMLImageElement;
            //exampleObject.image = newImage;
        }*/
    window.addEventListener('load', Preload);
})();
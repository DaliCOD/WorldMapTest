
  let countries = ["AE = United Arab Emirates","AF = Afghanistan","AG = Antigua and Barbuda","AL = Albania","AM = Armenia","AO = Angola","AR = Argentina","AT = Austria","AU = Australia","AZ = Azerbaijan","BA = Bosnia and Herzegovina","BB = Barbados","BD = Bangladesh","BE = Belgium","BF = Burkina Faso","BG = Bulgaria","BI = Burundi","BJ = Benin","BN = Brunei Darussalam","BO = Bolivia","BR = Brazil","BS = Bahamas","BT = Bhutan","BW = Botswana","BY = Belarus","BZ = Belize","CA = Canada","CD = Congo","CF = Central African Republic","CG = Congo","CH = Switzerland","CI = Cote d'Ivoire","CL = Chile","CM = Cameroon","CN = China","CO = Colombia","CR = Costa Rica","CU = Cuba","CV = Cape Verde","CY = Cyprus","CZ = Czech Republic","DE = Germany","DJ = Djibouti","DK = Denmark","DM = Dominica","DO = Dominican Republic","DZ = Algeria","EC = Ecuador","EE = Estonia","EG = Egypt","ER = Eritrea","ES = Spain","ET = Ethiopia","FI = Finland","FJ = Fiji","FK = Falkland Islands","FR = France","GA = Gabon","GB = United Kingdom","GD = Grenada","GE = Georgia","GF = French Guiana","GH = Ghana","GL = Greenland","GM = Gambia","GN = Guinea","GQ = Equatorial Guinea","GR = Greece","GT = Guatemala","GW = Guinea-Bissau","GY = Guyana","HN = Honduras","HR = Croatia","HT = Haiti","HU = Hungary","ID = Indonesia","IE = Ireland","IL = Israel","IN = India","IQ = Iraq","IR = Iran","IS = Iceland","IT = Italy","JM = Jamaica","JO = Jordan","JP = Japan","KE = Kenya","KG = Kyrgyz Republic","KH = Cambodia","KM = Comoros","KN = Saint Kitts and Nevis","KP = North Korea","KR = South Korea","KW = Kuwait","KZ = Kazakhstan","LA = Lao People's Democratic Republic","LB = Lebanon","LC = Saint Lucia","LK = Sri Lanka","LR = Liberia","LS = Lesotho","LT = Lithuania","LV = Latvia","LY = Libya","MA = Morocco","MD = Moldova","MG = Madagascar","MK = Macedonia","ML = Mali","MM = Myanmar","MN = Mongolia","MR = Mauritania","MT = Malta","MU = Mauritius","MV = Maldives","MW = Malawi","MX = Mexico","MY = Malaysia","MZ = Mozambique","NA = Namibia","NC = New Caledonia","NE = Niger","NG = Nigeria","NI = Nicaragua","NL = Netherlands","NO = Norway","NP = Nepal","NZ = New Zealand","OM = Oman","PA = Panama","PE = Peru","PF = French Polynesia","PG = Papua New Guinea","PH = Philippines","PK = Pakistan","PL = Poland","PT = Portugal","PY = Paraguay","QA = Qatar","RE = Reunion","RO = Romania","RS = Serbia","RU = Russian Federation","RW = Rwanda","SA = Saudi Arabia","SB = Solomon Islands","SC = Seychelles","SD = Sudan","SE = Sweden","SI = Slovenia","SK = Slovakia","SL = Sierra Leone","SN = Senegal","SO = Somalia","SR = Suriname","ST = Sao Tome and Principe","SV = El Salvador","SY = Syrian Arab Republic","SZ = Swaziland","TD = Chad","TG = Togo","TH = Thailand","TJ = Tajikistan","TL = Timor-Leste","TM = Turkmenistan","TN = Tunisia","TR = Turkey","TT = Trinidad and Tobago","TW = Taiwan","TZ = Tanzania","UA = Ukraine","UG = Uganda","US = United States of America","UY = Uruguay","UZ = Uzbekistan","VE = Venezuela","VN = Vietnam","VU = Vanuatu","YE = Yemen","ZA = South Africa","ZM = Zambia","ZW = Zimbabwe"]


  function myFunction(country) {
    return country.split(" = ")
  }

  var newarray = countries.map(myFunction) //Serves Only For Filtering The FinalArray


let AsiaNum = 0;
let EuropeNum = 1;
let AustraliaNum = 2;
let AfricaNum = 3;
let NAmericaNum = 4;
let SAmericaNum = 5;




var ProgressArray //array of 182 objects {shortcut: ,name:}
var FinalArray //Array Of 170 Objects {shortcut, name}
const regions = document.getElementsByClassName("jqvmap-region") //Query Selector OF 170 Places on the Map
var arrayRegions = [] //Because REGIONS is not an array, had to make it an array
var BuiltArray  //Array that is used for the game
var randomNumber
var currentCountry //getting the country that will be Guessed.
var currentId  //Id of the country being guesssed
var MistakesCounter = 0; //If a wrong guess, you have 3 tries.
var pickedCountryId1
var pickedCountryId2
var pickedCountryId3
var regionsIds//Getting The IDS of All regions, used to filter Final Array
var TriesCounter = 0
var GameStarted = false;
var ContinueButton;
var WrongCountry
var WrongCountryDiv
var EnterInstr

setTimeout(function () {    //Need For this to happen after some more javascript code

  EnterInstr = document.getElementById("EnterInstr")
  WrongCountry = document.getElementById("WrongCountryJS")
  WrongCountryDiv = document.getElementById("WrongCountry")
  ContinueButton = document.getElementById("continuebutton")
  ContinueButton.addEventListener("click", RandomCountry)

  function makeEverythingUnclickable() {
    arrayRegions.forEach(region => { //Countries On Map Unclickable
      region.classList.add("Unclickable")
    })
    nadpisyArray.forEach(nadpis => {
      nadpis.classList.add("Unclickable")
    })

  }

  function EnterUsedToNext(key) {//Enter is like the NEXT Button
    if (key.keyCode == 13) {
     console.log("EnterPressed")
      RandomCountry()
      document.removeEventListener("keydown", EnterUsedToNext)
    }
  }

function DisablePage() {
      makeEverythingUnclickable();  //Nothing is Clickable so the game is stopped.
      document.removeEventListener("keydown", HandleKeyPress); //Arrows No longer work
      ContinueButton.style.display = "inline-block"
      EnterInstr.style.display = "inline-block"
      document.addEventListener("keydown", EnterUsedToNext)
    }

function CreateFinalArray() {

  class CountryObject {   //Constructor, Creates An Array(ProgressArray) of OBJECTS
                        constructor(Shortcut, Name) {
                          this.shortcut = Shortcut.toLowerCase()
                          this.name = Name
                        }
                      }

  for(i = 0; i < regions.length; i ++ ) { //Creates the Regions ARRAY
  arrayRegions.push(regions[i])
    }

    ProgressArray = newarray.map(function(array) { //Progress Array is FinalArray But unfiltered.
  return new CountryObject(array[0].toLowerCase(), array[1])
    })

    regionsIds = arrayRegions.map(function(region) { //USED to Filter ProgressArray into FinalArray
        return region.id.toString().split("_")[1] }).sort();

        FinalArray = ProgressArray.filter(function(e) { //An Array of 170 Objects
              for(let i = 0; i < regionsIds.length; i++) {
                if(e.shortcut == regionsIds[i]) {
                  return e
                  }
                }
            })
//Creates the Array Of 170 Objects
}

CreateFinalArray()

    arrayRegions.forEach(region => { //When A Country Is Clicked
          region.addEventListener("click", function(){

function TriesTracker() {
  TriesCounter++

if (TriesCounter == 1) {
  pickedCountryId1 = region

}
else if (TriesCounter == 2) {
  pickedCountryId2 = region

}
else if(TriesCounter == 3) {
  pickedCountryId3 = region

}
}

TriesTracker()


function ShowTheAnswer() { //If all 3 tries are wrong, shows the real answer
  for( let i = 0; i < BuiltArray.length; i++) {
    if(BuiltArray[i].name == currentCountry) {
       for(let y = 0; y < arrayRegions.length; y++) {
           if(BuiltArray[i].shortcut == arrayRegions[y].id.split("_")[1]) {
             arrayRegions[y].style.fill = "#b6ff40";
             removeZFromAllMaps()
             removeSelectedFromAllNadpisy()
             var IdFirstPart = arrayRegions[y].id.split("_")[0]
             var MapaCount = IdFirstPart[IdFirstPart.length - 1]
             console.log(MapaCount)

              mapsArray[MapaCount - 1].classList.add("index2")
              nadpisyArray[MapaCount - 1].classList.add("tab-selected")
              positionCounter = MapaCount - 1

           }
       }


    }
  }

}


          if(this.id.split("_")[1] == currentId) { //If A correct guess

                    this.style.fill ="#b6ff40";
                    DisablePage()
                    WrongCountryDiv.style.display = "inline-block"
                    WrongCountryDiv.style.backgroundColor = "#b6ff40";
                    WrongCountry.textContent = currentCountry;


              }
              else {  //If A wrong guess

                this.style.fill ="red"
                this.classList.add("Unclickable")
                MistakesCounter++

                for(let i = 0; i < BuiltArray.length; i++) { //Gets The Name Of THe Country User Selected
                    if(BuiltArray[i].shortcut == this.id.split("_")[1]) {
                      WrongCountry.textContent = BuiltArray[i].name;
                      WrongCountryDiv.style.display = "inline-block"

                        }
                    }
                      if (MistakesCounter >= 3) { //If 3 Wrong guesses
                        DisablePage()
                        console.log("Game Over!")
                        ShowTheAnswer()


                    }

              }


            })
          })

function ReturnOriginalColors() {
if (TriesCounter == 1) {
  pickedCountryId1.style.fill = pickedCountryId1.getOriginalFill()
}
else if (TriesCounter == 2) {
  pickedCountryId1.style.fill = pickedCountryId1.getOriginalFill()
  pickedCountryId2.style.fill = pickedCountryId2.getOriginalFill()
}
else if (TriesCounter == 3) {
  pickedCountryId1.style.fill = pickedCountryId1.getOriginalFill()
  pickedCountryId2.style.fill = pickedCountryId2.getOriginalFill()
  pickedCountryId3.style.fill = pickedCountryId3.getOriginalFill()
  }
}

function ReturnColorToShownCountry() {
  for( let i = 0; i < BuiltArray.length; i++) {
    if(BuiltArray[i].name == currentCountry) {
       for(let y = 0; y < arrayRegions.length; y++) {
           if(BuiltArray[i].shortcut == arrayRegions[y].id.split("_")[1]) {
             arrayRegions[y].style.fill = arrayRegions[y].getOriginalFill();
           }
       }


    }
  }
}

function makeEverythingClickable() {
  arrayRegions.forEach(region => { //Countries On Map Unclickable
    region.classList.remove("Unclickable")
  })
  nadpisyArray.forEach(nadpis => {
    nadpis.classList.remove("Unclickable")
  })

}

function RandomCountry() {  //Gets A New Random Country, Begins The Game

HandleMouseScroll()
makeEverythingClickable()
BuildArray()
ReturnColorToShownCountry()

if (GameStarted) ReturnOriginalColors()
GameStarted = true;

Annulate()
NewRandomCountry()

  document.addEventListener("keydown", HandleKeyPress);

  EnterInstr.style.display = "none"
  WrongCountryDiv.style.display = "none";
  ContinueButton.style.display = "none"
}

function BuildArray() {//wíll be used so a User can play for ex only with African countries
BuiltArray = FinalArray
}

 //Begins The Game
RandomCountry()

}, 0);

function HandleMouseScroll() {

  window.addEventListener('wheel', function(event) { //Will Zoom In The Map With Just Scrolling
 if (event.deltaY < 0)
 {
  console.log('scrolling up');

 }
 else if (event.deltaY > 0)
 {
  console.log('scrolling down');

 }
})

}

function Annulate() {

    pickedCountryId1 = 0
    pickedCountryId2 = 0
    pickedCountryId3 = 0
    TriesCounter = 0
    MistakesCounter = 0;
}

function NewRandomCountry() {
  randomNumber = Math.floor(Math.random() * 170);
  currentCountry = BuiltArray[randomNumber].name
  currentId = BuiltArray[randomNumber].shortcut
  document.getElementById("RandomCountry").textContent = currentCountry
}

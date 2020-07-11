var maps;
var mapsArray;
var nadpisy;
var nadpisyArray
var positionCounter = 0

function readyTheMap() {
  jQuery(document).ready(function () {
    $('h2').each(function () {
      $(this).click(function () {
        $('.tab-selected').removeClass('tab-selected');
        $(this).addClass('tab-selected');

      });
    });


    jQuery('#vmap-asia').vectorMap({
      map: 'asia_en',
      backgroundColor: '#333333',
      color: '#ffffff',
      hoverOpacity: 0.7,
      selectedColor: '#666666',
      enableZoom: true,
      showTooltip: true,
      values: sample_data,
      scaleColors: ['#C8EEFF', '#006491'],
      normalizeFunction: 'polynomial'
    });
    jQuery('#vmap-europe').vectorMap({
      map: 'europe_en',
      backgroundColor: '#333333',
      color: '#ffffff',
      hoverOpacity: 0.7,
      selectedColor: '#666666',
      enableZoom: true,
      showTooltip: true,
      values: sample_data,
      scaleColors: ['#C8EEFF', '#006491'],
      normalizeFunction: 'polynomial'
    });
    jQuery('#vmap-australia').vectorMap({
      map: 'australia_en',
      backgroundColor: '#333333',
      color: '#ffffff',
      hoverOpacity: 0.7,
      selectedColor: '#666666',
      enableZoom: true,
      showTooltip: true,
      values: sample_data,
      scaleColors: ['#C8EEFF', '#006491'],
      normalizeFunction: 'polynomial'
    });
    jQuery('#vmap-africa').vectorMap({
      map: 'africa_en',
      backgroundColor: '#333333',
      color: '#ffffff',
      hoverOpacity: 0.7,
      selectedColor: '#666666',
      enableZoom: true,
      showTooltip: true,
      values: sample_data,
      scaleColors: ['#C8EEFF', '#006491'],
      normalizeFunction: 'polynomial'
    });
    jQuery('#vmap-northamerica').vectorMap({
      map: 'north-america_en',
      backgroundColor: '#333333',
      color: '#ffffff',
      hoverOpacity: 0.7,
      selectedColor: '#666666',
      enableZoom: true,
      showTooltip: true,
      values: sample_data,
      scaleColors: ['#C8EEFF', '#006491'],
      normalizeFunction: 'polynomial'
    });
    jQuery('#vmap-southamerica').vectorMap({
      map: 'south-america_en',
      backgroundColor: '#333333',
      color: '#ffffff',
      hoverOpacity: 0.7,
      selectedColor: '#666666',
      enableZoom: true,
      showTooltip: true,
      values: sample_data,
      scaleColors: ['#C8EEFF', '#006491'],
      normalizeFunction: 'polynomial'
    });
  });
}

function HandleKeyPress(key) {

  if (key.keyCode == 83 || key.keyCode == 40) {
 if(positionCounter <= 4) {
      positionCounter++

      removeZFromAllMaps()
      mapsArray[positionCounter].classList.add("index2")
      removeSelectedFromAllNadpisy()
      nadpisyArray[positionCounter].classList.add("tab-selected")
  }}
  else if (key.keyCode == 87 || key.keyCode == 38) {
 if(positionCounter >= 1) {
    positionCounter--

 removeZFromAllMaps()
      mapsArray[positionCounter].classList.add("index2")
removeSelectedFromAllNadpisy()
        nadpisyArray[positionCounter].classList.add("tab-selected")
  }}
}

function createArrays() {
  setTimeout(
    function() {
      maps = $(".map")
     mapsArray = Array.from(maps)
     nadpisy = $(".nadpisy")
     nadpisyArray = Array.from(nadpisy)
     nadpisyArray.forEach(function(nadpis) {
       nadpis.addEventListener("click", function() {
         removeZFromAllMaps()
         positionCounter = nadpisyArray.indexOf(nadpis);

         mapsArray[positionCounter].classList.add("index2")

       })
     })

    }, 0);
}

function removeZFromAllMaps() {
  mapsArray.forEach(function(map) {
    map.classList.remove("index2")
  })
}

function removeSelectedFromAllNadpisy() {
  nadpisyArray.forEach(function(nadpis) {
    nadpis.classList.remove("tab-selected")
  })
}


document.addEventListener("keydown", HandleKeyPress);
readyTheMap()
$(window).load(createArrays());

function drawCanvasButton () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d')
  ctx.fillStyle ="red"
  
}

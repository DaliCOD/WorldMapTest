

function readyTheMap() {
  jQuery(document).ready(function () {
    $('h2').each(function () {
      $(this).click(function () {
        $('.tab-selected').removeClass('tab-selected');
        $(this).addClass('tab-selected');
        $('.map').css('z-index', '0');
        $('#vmap-' + this.id).parent().css('z-index', '1');
      });
    });
    $('h2:first').addClass('tab-selected');
    $('.map:first').css('z-index', '1');

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

readyTheMap()

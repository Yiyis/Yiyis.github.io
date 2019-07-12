var $wrap = $('.wrap');
$wrap.isotope({
  itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-sizer'
    },
    //getSortData :{
    //    name:function( itemElem ){
     //       return $( itemElem ).find('.name').text();
     //   },
     //   date:function( itemElem ){
     //       return Date.parse($( itemElem ).find('.date').text());
   //     }
  //  }
});

$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  $wrap.isotope({ filter: filterValue });
});


$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.active').removeClass('active');
    $( this ).addClass('active');
  });
});

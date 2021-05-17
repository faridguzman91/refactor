$(function(){

   //aantal home_block items rechts tellen.. bij geen items mag home_left 100% breed worden
  var homeLeft = document.getElementById('home_left');
  var homeRight = document.getElementById('home_right');
  
   var aantal_r = $('#home_right .home_block').length;
   if(aantal_r == 0) $('#home_left').addClass('volledige_breedte');
   if(aantal_r == 0) $('#home_right').addClass('hide');
  
  var bzBlokken = document.getElementById('nf_box');
  
  if(aantal_r == 0) {
    if (homeLeft.)
    $('#home_left').removeClass('volledige_breedte');
    $('#home_right').removeClass('hide');
  }

	//$('.home_block_content').each(function(){
   $('.home_block:not(.toon_als_knop) .home_block_content').each(function(){   
		var $this = $(this);
		var $thisblock = $(this).closest('.home_block');
		var $thismaxh = $this.data('maxheight');
		var $thish = $this.outerHeight(true);

		if($thish >= $thismaxh){
			$this.css({'height':$thismaxh, 'overflow-y':'hidden', 'overflow-x':'visible'});

			$thisblock.append('<div class="more_or_less"><div class="home_more"><a class="btn omlaag" title="Uitklappen">' + tekst_btn_meer + '</a></div><div class="home_less"><a class="btn omhoog" title="Inklappen">' + tekst_btn_minder + '</a></div></div>');
			$thisblock.find('.home_more').show();

			$thisblock.on('click', '.home_more a', function(){
				$this.animate({
					'overflow-y': 'visible',
					'height': $thish
				}, 500);

				$(this).closest('.home_more').hide().next('.home_less').show();

			}).on('click', '.home_less a',function(){
				$this.animate({
					'overflow-y': 'hidden',
					height: $thismaxh
				}, 500);
				$(this).closest('.home_less').hide().prev('.home_more').show();
			});
		}
	});

   $('.toon_als_knop h1').on('click',function(e){
      var $this = $(this).closest('.toon_als_knop');
      
      $this.toggleClass('dicht open');
   });
});

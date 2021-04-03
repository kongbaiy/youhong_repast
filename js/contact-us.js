(function(){
    // banner
	var bannerIndex = 0;
	var banner = new Swiper('.banner', {
		autoplayDisableOnInteraction: false,
		autoplay: 5000,
		loop: true,
	    on: {
			slideChangeTransitionEnd() {
				bannerIndex = this.realIndex;
			}
		},
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (bannerIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
	});

    // 百度地图API功能
    var map = new BMapGL.Map("allmap");
    var point = new BMapGL.Point(104.080441, 30.684554);
    map.centerAndZoom(point, 11);
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

    var marker = new BMapGL.Marker(point);  // 创建标注
   
    var opts = {
        width: 250,     // 信息窗口宽度
        height: 100,    // 信息窗口高度
        title: "有红餐饮餐饮管理有限公司"  // 信息窗口标题
    }
        
    var infoWindow = new BMapGL.InfoWindow(`
        <p>电话：400 000 0000</p>
        <p>地址: 四川省成都市金牛区星辉西路11号-附16号附近</p>

    `, opts);  // 创建信息窗口对象
    map.openInfoWindow(infoWindow, map.getCenter());        // 打开信息窗口

    // 下拉框
	$('.select-drop-downListItem').on('click', function() {
		$('.select-drop-downList').attr('style', 'display:none;');
		$('.bottom-arrow-icon').attr('style', 'transform:rotate(0deg);');
		
		event.stopPropagation();
	});
	
	$('.select, .select-2').on('click', function() {
		var display = $('.select-drop-downList').css('display');
		
		if(display === 'none') {
			$('.select-drop-downList').attr('style', '');
			$('.bottom-arrow-icon').attr('style', '');
		}
	});
})();
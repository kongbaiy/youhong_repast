(function(win, doc) {
    // banner
    var bannerIndex = 0;
    var banner = new Swiper('.banner-container', {
		autoplayDisableOnInteraction: false,
		autoplay: 5000,
		loop: true,
		pagination: {
			el: '.banner-pagination',
			clickable: true,
		},
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

	//品牌加盟 
	var specialtyIndex = 0;
    var specialty = new Swiper('.specialty-swiper', {
		autoplayDisableOnInteraction: false,
		autoplay: 5000,
		loop: true,
		pagination: {
			el: '.specialty-pagination',
			clickable: true,
		},
        on: {
			slideChangeTransitionEnd() {
				specialtyIndex = this.realIndex;
			}
		},
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (specialtyIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
	});

	
	
	// 介绍
	$('.intro-nav-item').on('click', function() {
		$('.intro-nav-item').removeClass('intro-nav-item_active');
		$(this).addClass('intro-nav-item_active');
	});
    

	// 特色
	$('.specialty-nav-item').on('click', function() {
		$('.specialty-nav-item').removeClass('specialty-nav-item_active');
		$(this).addClass('specialty-nav-item_active');
	});

	// 咨询
	$('.join-in-navItem').on('click', function() {
		$('.join-in-navItem').removeClass('join-in-navItem_active');
		$(this).addClass('join-in-navItem_active');
	});
})(window, document);
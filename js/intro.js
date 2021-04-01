(function(win, doc) {
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

	// 企业荣誉
	var enterpriseHonorIndex = 0;
	var enterpriseHonor = new Swiper('.enterprise-honor-swiper', {
		autoplayDisableOnInteraction: false,
		autoplay: 5000,
		loop: true,
		pagination: {
			el: '.enterprise-honor-pagination',
			clickable: true,
		},
	    on: {
			slideChangeTransitionEnd() {
				enterpriseHonorIndex = this.realIndex;
			}
		},
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (enterpriseHonorIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
	});

	$('.company-character-content').eq(0).show();
	$('.company-character-navItem').on('click', function() {
		var index = $(this).index();

		$('.company-character-navItem').removeClass('company-character-navItem_active');
		$(this).addClass('company-character-navItem_active');
		$('.company-character-content').hide();
		$('.company-character-content').eq(index).show();

	});

	$('.development-history-listItem').on('click', function() {
		$('.development-history-listItem').removeClass('development-history-listItem_active');
		$(this).addClass('development-history-listItem_active');
		$('.development-history-listItem .development-history-listItemIcon').show();
		$('.development-history-listItem .development-history-listItemIcon2').hide();
		$(this).find('.development-history-listItemIcon').hide();
		$(this).find('.development-history-listItemIcon2').show();

	});
	
})(window, document);
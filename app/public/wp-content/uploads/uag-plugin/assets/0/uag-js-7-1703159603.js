document.addEventListener("DOMContentLoaded", function(){ 				window.addEventListener( 'DOMContentLoaded', function() {
					const scope = document.querySelector( '.uagb-block-aca63a3c' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'spectra-image-gallery__layout--masonry' ) ) {
							const element = scope.querySelector( '.spectra-image-gallery__layout--masonry' );
							const isotope = new Isotope( element, {
								itemSelector: '.spectra-image-gallery__media-wrapper--isotope',
							} );
							imagesLoaded( element ).on( 'progress', function() {
								isotope.layout();
							});
							imagesLoaded( element ).on( 'always', function() {
								element.parentNode.style.visibility = 'visible';
							});
						}
						UAGBImageGalleryMasonry.init( {"block_id":"aca63a3c","classMigrate":true,"readyToRender":true,"tileSize":199,"mediaGallery":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/moi-150x150.webp","orientation":"landscape"},"medium":{"height":222,"width":300,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/moi-300x222.webp","orientation":"landscape"},"full":{"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/moi.webp","height":226,"width":306,"orientation":"landscape"}},"mime":"image\/webp","type":"image","subtype":"webp","id":140,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/moi.webp","alt":"","link":"http:\/\/trott-noye.local\/les-trotts\/moi\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_5359-150x150.webp","orientation":"landscape"},"medium":{"height":222,"width":300,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_5359-300x222.webp","orientation":"landscape"},"full":{"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_5359.webp","height":226,"width":306,"orientation":"landscape"}},"mime":"image\/webp","type":"image","subtype":"webp","id":141,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_5359.webp","alt":"","link":"http:\/\/trott-noye.local\/les-trotts\/img_5359\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_5429-150x150.webp","orientation":"landscape"},"medium":{"height":222,"width":300,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_5429-300x222.webp","orientation":"landscape"},"full":{"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_5429.webp","height":226,"width":306,"orientation":"landscape"}},"mime":"image\/webp","type":"image","subtype":"webp","id":142,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_5429.webp","alt":"","link":"http:\/\/trott-noye.local\/les-trotts\/img_5429\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_5680-150x150.webp","orientation":"landscape"},"medium":{"height":222,"width":300,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_5680-300x222.webp","orientation":"landscape"},"full":{"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_5680.webp","height":226,"width":306,"orientation":"landscape"}},"mime":"image\/webp","type":"image","subtype":"webp","id":143,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_5680.webp","alt":"","link":"http:\/\/trott-noye.local\/les-trotts\/img_5680\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_6196-150x150.webp","orientation":"landscape"},"medium":{"height":222,"width":300,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_6196-300x222.webp","orientation":"landscape"},"full":{"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_6196.webp","height":226,"width":306,"orientation":"landscape"}},"mime":"image\/webp","type":"image","subtype":"webp","id":144,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_6196.webp","alt":"","link":"http:\/\/trott-noye.local\/les-trotts\/img_6196\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_7418-150x150.webp","orientation":"landscape"},"medium":{"height":222,"width":300,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_7418-300x222.webp","orientation":"landscape"},"full":{"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_7418.webp","height":226,"width":306,"orientation":"landscape"}},"mime":"image\/webp","type":"image","subtype":"webp","id":145,"url":"http:\/\/trott-noye.local\/wp-content\/uploads\/2023\/12\/IMG_7418.webp","alt":"","link":"http:\/\/trott-noye.local\/les-trotts\/img_7418\/","caption":""}],"mediaIDs":[140,141,142,143,144,145],"feedLayout":"masonry","captionVisibility":"always","captionDisplayType":"bar-outside","imageCaptionAlignment":"bottom center","imageCaptionAlignment01":"bottom","imageDefaultCaption":"Vous avez tout sous contr\u00f4le !<br>5 niveaux d'assistance, autonomie, distance, vitesse, tout est indiqu\u00e9 sur votre display ( 2 sur les bi-moteurs ). Vous g\u00e9rez toutes ces infos sous vos yeux et en parfaite autonomie selon votre aisance et votre choix de conduite.","columnsTab":4,"columnsMob":4,"focusList":[],"focusListObject":[],"imageDisplayCaption":true,"galleryImageSize":"large","galleryImageSizeTablet":"large","galleryImageSizeMobile":"medium","imageClickEvent":"none","lightboxDisplayCaptions":false,"lightboxThumbnails":false,"lightboxDisplayCount":false,"lightboxCloseIcon":"xmark","lightboxCaptionHeight":50,"lightboxCaptionHeightTablet":"","lightboxCaptionHeightMobile":"","lightboxIconSize":24,"lightboxIconSizeTablet":"","lightboxIconSizeMobile":"","imageCaptionAlignment02":"center","captionPaddingTop":8,"captionPaddingRight":8,"captionPaddingBottom":8,"captionPaddingLeft":8,"captionPaddingTopTab":8,"captionPaddingRightTab":8,"captionPaddingBottomTab":8,"captionPaddingLeftTab":8,"captionPaddingTopMob":8,"captionPaddingRightMob":8,"captionPaddingBottomMob":8,"captionPaddingLeftMob":8,"captionPaddingUnit":"px","captionPaddingUnitTab":"px","captionPaddingUnitMob":"px","captionPaddingUnitLink":true,"captionGap":0,"captionGapUnit":"px","columnsDesk":3,"gridImageGap":8,"gridImageGapTab":"","gridImageGapMob":"","gridImageGapUnit":"px","gridImageGapUnitTab":"px","gridImageGapUnitMob":"px","feedMarginTop":"","feedMarginRight":"","feedMarginBottom":"","feedMarginLeft":"","feedMarginTopTab":"","feedMarginRightTab":"","feedMarginBottomTab":"","feedMarginLeftTab":"","feedMarginTopMob":"","feedMarginRightMob":"","feedMarginBottomMob":"","feedMarginLeftMob":"","feedMarginUnit":"px","feedMarginUnitTab":"px","feedMarginUnitMob":"px","feedMarginUnitLink":true,"carouselStartAt":0,"carouselSquares":false,"carouselLoop":true,"carouselAutoplay":true,"carouselAutoplaySpeed":2000,"carouselPauseOnHover":true,"carouselTransitionSpeed":500,"gridPages":1,"gridPageNumber":1,"feedPagination":false,"paginateUseArrows":true,"paginateUseDots":true,"paginateUseLoader":true,"paginateLimit":9,"paginateButtonAlign":"center","paginateButtonText":"Charger plus d\u2019images","paginateButtonPaddingTop":"","paginateButtonPaddingRight":"","paginateButtonPaddingBottom":"","paginateButtonPaddingLeft":"","paginateButtonPaddingTopTab":"","paginateButtonPaddingRightTab":"","paginateButtonPaddingBottomTab":"","paginateButtonPaddingLeftTab":"","paginateButtonPaddingTopMob":"","paginateButtonPaddingRightMob":"","paginateButtonPaddingBottomMob":"","paginateButtonPaddingLeftMob":"","paginateButtonPaddingUnit":"px","paginateButtonPaddingUnitTab":"px","paginateButtonPaddingUnitMob":"px","paginateButtonPaddingUnitLink":true,"imageEnableZoom":true,"imageZoomType":"zoom-in","captionBackgroundEnableBlur":false,"captionBackgroundBlurAmount":0,"captionBackgroundBlurAmountHover":5,"lightboxEdgeDistance":10,"lightboxEdgeDistanceTablet":"","lightboxEdgeDistanceMobile":"","lightboxBackgroundEnableBlur":true,"lightboxBackgroundBlurAmount":5,"lightboxBackgroundColor":"rgba(0,0,0,0.75)","lightboxIconColor":"rgba(255,255,255,1)","lightboxCaptionColor":"rgba(255,255,255,1)","lightboxCaptionBackgroundColor":"rgba(0,0,0,1)","captionLoadGoogleFonts":false,"captionFontFamily":"Default","captionFontWeight":"","captionFontStyle":"normal","captionTransform":"","captionDecoration":"none","captionFontSizeType":"px","captionFontSize":"","captionFontSizeTab":"","captionFontSizeMob":"","captionLineHeightType":"em","captionLineHeight":"","captionLineHeightTab":"","captionLineHeightMob":"","loadMoreLoadGoogleFonts":false,"loadMoreFontFamily":"Default","loadMoreFontWeight":"","loadMoreFontStyle":"normal","loadMoreTransform":"","loadMoreDecoration":"none","loadMoreFontSizeType":"px","loadMoreFontSize":"","loadMoreFontSizeTab":"","loadMoreFontSizeMob":"","loadMoreLineHeightType":"em","loadMoreLineHeight":"","loadMoreLineHeightTab":"","loadMoreLineHeightMob":"","lightboxLoadGoogleFonts":false,"lightboxFontFamily":"Default","lightboxFontWeight":"","lightboxFontStyle":"normal","lightboxTransform":"","lightboxDecoration":"none","lightboxFontSizeType":"px","lightboxFontSize":"","lightboxFontSizeTab":"","lightboxFontSizeMob":"","lightboxLineHeightType":"em","lightboxLineHeight":"","lightboxLineHeightTab":"","lightboxLineHeightMob":"","captionBackgroundEffect":"none","captionBackgroundEffectHover":"none","captionBackgroundEffectAmount":100,"captionBackgroundEffectAmountHover":0,"captionColor":"rgba(255,255,255,1)","captionColorHover":"rgba(255,255,255,1)","captionBackgroundColor":"rgba(0,0,0,0.75)","captionBackgroundColorHover":"rgba(0,0,0,0.75)","overlayColor":"rgba(0,0,0,0)","overlayColorHover":"rgba(0,0,0,0)","captionSeparateColors":false,"paginateArrowDistance":-24,"paginateArrowDistanceUnit":"px","paginateArrowSize":24,"paginateDotDistance":8,"paginateDotDistanceUnit":"px","paginateLoaderSize":18,"paginateButtonTextColor":"","paginateButtonTextColorHover":"","paginateColor":"","paginateColorHover":"","imageBoxShadowColor":"","imageBoxShadowHOffset":0,"imageBoxShadowVOffset":0,"imageBoxShadowBlur":"","imageBoxShadowSpread":"","imageBoxShadowPosition":"outset","imageBoxShadowColorHover":"","imageBoxShadowHOffsetHover":0,"imageBoxShadowVOffsetHover":0,"imageBoxShadowBlurHover":"","imageBoxShadowSpreadHover":"","imageBoxShadowPositionHover":"outset","arrowBorderTopWidth":4,"arrowBorderLeftWidth":4,"arrowBorderRightWidth":4,"arrowBorderBottomWidth":4,"arrowBorderTopLeftRadius":50,"arrowBorderTopRightRadius":50,"arrowBorderBottomLeftRadius":50,"arrowBorderBottomRightRadius":50,"arrowBorderRadiusUnit":"px","arrowBorderTopWidthTablet":"","arrowBorderLeftWidthTablet":"","arrowBorderRightWidthTablet":"","arrowBorderBottomWidthTablet":"","arrowBorderTopLeftRadiusTablet":"","arrowBorderTopRightRadiusTablet":"","arrowBorderBottomLeftRadiusTablet":"","arrowBorderBottomRightRadiusTablet":"","arrowBorderRadiusUnitTablet":"px","arrowBorderTopWidthMobile":"","arrowBorderLeftWidthMobile":"","arrowBorderRightWidthMobile":"","arrowBorderBottomWidthMobile":"","arrowBorderTopLeftRadiusMobile":"","arrowBorderTopRightRadiusMobile":"","arrowBorderBottomLeftRadiusMobile":"","arrowBorderBottomRightRadiusMobile":"","arrowBorderRadiusUnitMobile":"px","arrowBorderStyle":"none","arrowBorderColor":"","arrowBorderHColor":"","btnBorderTopWidth":"","btnBorderLeftWidth":"","btnBorderRightWidth":"","btnBorderBottomWidth":"","btnBorderTopLeftRadius":"","btnBorderTopRightRadius":"","btnBorderBottomLeftRadius":"","btnBorderBottomRightRadius":"","btnBorderRadiusUnit":"px","btnBorderTopWidthTablet":"","btnBorderLeftWidthTablet":"","btnBorderRightWidthTablet":"","btnBorderBottomWidthTablet":"","btnBorderTopLeftRadiusTablet":"","btnBorderTopRightRadiusTablet":"","btnBorderBottomLeftRadiusTablet":"","btnBorderBottomRightRadiusTablet":"","btnBorderRadiusUnitTablet":"px","btnBorderTopWidthMobile":"","btnBorderLeftWidthMobile":"","btnBorderRightWidthMobile":"","btnBorderBottomWidthMobile":"","btnBorderTopLeftRadiusMobile":"","btnBorderTopRightRadiusMobile":"","btnBorderBottomLeftRadiusMobile":"","btnBorderBottomRightRadiusMobile":"","btnBorderRadiusUnitMobile":"px","btnBorderStyle":"","btnBorderColor":"","btnBorderHColor":"","imageBorderTopWidth":"","imageBorderLeftWidth":"","imageBorderRightWidth":"","imageBorderBottomWidth":"","imageBorderTopLeftRadius":"","imageBorderTopRightRadius":"","imageBorderBottomLeftRadius":"","imageBorderBottomRightRadius":"","imageBorderRadiusUnit":"px","imageBorderTopWidthTablet":"","imageBorderLeftWidthTablet":"","imageBorderRightWidthTablet":"","imageBorderBottomWidthTablet":"","imageBorderTopLeftRadiusTablet":"","imageBorderTopRightRadiusTablet":"","imageBorderBottomLeftRadiusTablet":"","imageBorderBottomRightRadiusTablet":"","imageBorderRadiusUnitTablet":"px","imageBorderTopWidthMobile":"","imageBorderLeftWidthMobile":"","imageBorderRightWidthMobile":"","imageBorderBottomWidthMobile":"","imageBorderTopLeftRadiusMobile":"","imageBorderTopRightRadiusMobile":"","imageBorderBottomLeftRadiusMobile":"","imageBorderBottomRightRadiusMobile":"","imageBorderRadiusUnitMobile":"px","imageBorderStyle":"","imageBorderColor":"","imageBorderHColor":"","mainTitleBorderTopWidth":2,"mainTitleBorderLeftWidth":0,"mainTitleBorderRightWidth":0,"mainTitleBorderBottomWidth":2,"mainTitleBorderTopLeftRadius":"","mainTitleBorderTopRightRadius":"","mainTitleBorderBottomLeftRadius":"","mainTitleBorderBottomRightRadius":"","mainTitleBorderRadiusUnit":"px","mainTitleBorderTopWidthTablet":"","mainTitleBorderLeftWidthTablet":"","mainTitleBorderRightWidthTablet":"","mainTitleBorderBottomWidthTablet":"","mainTitleBorderTopLeftRadiusTablet":"","mainTitleBorderTopRightRadiusTablet":"","mainTitleBorderBottomLeftRadiusTablet":"","mainTitleBorderBottomRightRadiusTablet":"","mainTitleBorderRadiusUnitTablet":"px","mainTitleBorderTopWidthMobile":"","mainTitleBorderLeftWidthMobile":"","mainTitleBorderRightWidthMobile":"","mainTitleBorderBottomWidthMobile":"","mainTitleBorderTopLeftRadiusMobile":"","mainTitleBorderTopRightRadiusMobile":"","mainTitleBorderBottomLeftRadiusMobile":"","mainTitleBorderBottomRightRadiusMobile":"","mainTitleBorderRadiusUnitMobile":"px","mainTitleBorderStyle":"","mainTitleBorderColor":"","mainTitleBorderHColor":""}, '.uagb-block-aca63a3c', {"lazy":true,"slidesPerView":1,"navigation":{"nextEl":".uagb-block-aca63a3c+.spectra-image-gallery__control-lightbox .swiper-button-next","prevEl":".uagb-block-aca63a3c+.spectra-image-gallery__control-lightbox .swiper-button-prev"},"keyboard":{"enabled":true}}, [] );
					}
				});
			 });
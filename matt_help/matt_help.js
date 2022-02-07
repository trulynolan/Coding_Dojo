$(document).ready(function () {

	/********************** GET LIST OF SITES & POPULATE SITES DROPDOWN ***************************************/

	var sitesFormData = new FormData();
	var params = JSON.stringify({ "size": 25, "canManage": true, "filter": "active" });
	sitesFormData.append('data', params);
	var baseURL = window.location.origin;
	const getSitesAPIEndpoint = baseURL + '/apex/DataServerRW?target=SiteDataServer&action=search&Mysite';

	$.ajax({
		url: getSitesAPIEndpoint,
		data: sitesFormData,
		processData: false,
		contentType: false,
		type: 'POST',
		dataType: "json",
		success: function (data, textStatus, jqXHR) {
			var i;
			for (i = 0; i < data.result.listOfItems.length; i++) {
				$("#sitesSelectList").append(new Option(data.result.listOfItems[i].title, data.result.listOfItems[i].siteId));
			}

		},
		error: function (data, textStatus, jqXHR) {
			console.log("error " + data);
		},
	})





	//************************* GET PAGES FROM SELECTED SITE *****************************************//

	$('#sitesSelectList').on('change', function () {

		$('.pageList').text("Select your digital display items:");
		$('#sitesPagesList').css("visibility", "visible");

		var pagesFormData = new FormData();
		var selectedSite = $("#sitesSelectList option:selected").val();
		var pageParams = JSON.stringify({ "size": 50, "filter": "updates", "sortBy": "latest", "siteId": selectedSite });
		pagesFormData.append('data', pageParams);
		var baseURL = window.location.origin;
		const pagesAPIURL = baseURL + "/apex/DataServerRW?target=AllContentDataServer&action=search";
		$('.pages').empty();
		$('.vPages').empty();

		$.ajax({
			url: baseURL + '/apex/DataServerRW?target=AllContentDataServer&action=search',
			data: pagesFormData,
			processData: false,
			contentType: false,
			type: 'POST',
			dataType: "json",
			success: function (data, textStatus, jqXHR) {
				//console.log(data.result.listOfItems);
				var i;
				for (i = 0; i < data.result.listOfItems.length; i++) {
					var pageURL = window.location.origin + '/apex/simpplr__app?u=/site/' + data.result.listOfItems[i].site.siteId + '/page/' + data.result.listOfItems[i].contentId
					var contentTitle = data.result.listOfItems[i].title;
					var thumbURL = window.location.origin + data.result.listOfItems[i].imgFile.thumbnailImg;
					var contentAuthor = data.result.listOfItems[i].authoredBy.name;
					var publishDate = new Date(data.result.listOfItems[i].publishAt).toDateString();
					var contentId = data.result.listOfItems[i].contentId;
					var contentSummary = data.result.listOfItems[i].excerpt;
					var imageLandscapeURL = window.location.origin + data.result.listOfItems[i].imgLandscape;

					$('.pages').append("<li><a href=" + pageURL + ">" + contentTitle + "</a></li>");
					$('.vPages').append("<div class=\"contentItem\"><img class=\"thumb\" src=\"" + thumbURL + "\"/>" + "<div class=\"ciTitle\">" + contentTitle + "</div><div class=\"contentAuthorDate\">" + contentAuthor + " - " + publishDate + "</div><div class=\"contentId\">" + contentId + "</div><div class=\"contentSummary\">" + contentSummary + "</div><div class=\"contentImgLandscapeURL\">" + imageLandscapeURL + "</div></div>");

				}

			},
			error: function (data, textStatus, jqXHR) {
				console.log("error " + data);
			},
		})




	});

	//************************* ARRAY DEFINITION *****************************************//


	var contentItemsArray = [
		{ "index": "0", "isOccupied": "false", "title": "", "summary": "", "thumbnailURL": "", "contentId": "", "imgLandscapeURL": "" },
		{ "index": "1", "isOccupied": "false", "title": "", "summary": "", "thumbnailURL": "", "contentId": "", "imgLandscapeURL": "" },
		{ "index": "2", "isOccupied": "false", "title": "", "summary": "", "thumbnailURL": "", "contentId": "", "imgLandscapeURL": "" },
		{ "index": "3", "isOccupied": "false", "title": "", "summary": "", "thumbnailURL": "", "contentId": "", "imgLandscapeURL": "" },
		{ "index": "4", "isOccupied": "false", "title": "", "summary": "", "thumbnailURL": "", "contentId": "", "imgLandscapeURL": "" }
	];


	//************************* POPULATE ARRAY WITH SELECTED ITEMS & ADD THEM TO UI *****************************************//

	$('.vPages').on('click', '.contentItem', function () {
		var clickedItemTitle = $(this).find(".ciTitle").text();
		var clickedItemThumbURL = $(this).find(".thumb").attr('src');
		var clickedItemContentId = $(this).find(".contentId").text();
		var clickedItemSummary = $(this).find(".contentSummary").text();
		var clickedItemImageLandscapeURL = $(this).find(".contentImgLandscapeURL").text();

		//**** Loop through array and update accordingly ****//
		var i;
		var trueCount = 0;
		for (i = 0; i < contentItemsArray.length; i++) {
			if (contentItemsArray[i].isOccupied == "false") {
				contentItemsArray[i].title = clickedItemTitle;
				contentItemsArray[i].thumbnailURL = clickedItemThumbURL;
				contentItemsArray[i].contentId = clickedItemContentId;
				contentItemsArray[i].isOccupied = "true";
				contentItemsArray[i].summary = clickedItemSummary;
				contentItemsArray[i].imgLandscapeURL = clickedItemImageLandscapeURL;
				trueCount++;
				break;
			}
			else {
				trueCount++;
				//*** If the array is maxed out at 10 tell the user to delete an array item then re-add ****//
				if (trueCount == 10) {
					alert('Please delete a content item before adding another');
				}
			}

			console.log(contentItemsArray);
		}

		//** Activate Start Show button when at least one item is present **//
		if (trueCount > 0) {
			$(".Button").addClass("Button-Activated");
		}
		else {
			$(".Button").removeClass("Button-Activated");
		}

		readArrayUpdateUI();

	});


	//*** update selected content items based on the data in the array ****//
	function readArrayUpdateUI() {
		for (i = 0; i < contentItemsArray.length; i++) {
			var selectedItemIndex = [i]
			var selectedItemId = '#selectedItem' + [i];
			var selectedItemTitleId = '#selectedItem' + [i] + 'Title';
			$(selectedItemId).find(".aIndex").text([i]);
			$(selectedItemTitleId).text(contentItemsArray[i].title);
			$(selectedItemId).css("background-image", "url(" + (contentItemsArray[i].thumbnailURL) + ")");
		}

		console.log(contentItemsArray);
	}


	//***** On Hover, show the Remove Item (X) button & move buttons unless there is no image there  ******//
	$('.selectedItem').hover(
		function () {
			var indexId = $(this).find(".aIndex").text();
			var titleCheck = $(this).find("#selectedItem" + indexId + "Title").text();

			if (titleCheck == "") {
				$(this).find(".closeX").css("visibility", "hidden");
			}
			else {
				$(this).find(".closeX").css("visibility", "visible");
				$(this).find(".moveLeft").css("visibility", "visible");
				$(this).find(".moveRight").css("visibility", "visible");
			}
		},
		function () {
			$(this).find(".closeX").css("visibility", "hidden");
			$(this).find(".moveLeft").css("visibility", "hidden");
			$(this).find(".moveRight").css("visibility", "hidden");
		}
	);

	//*** Remove Item Button Click. When clicked, remove item from UI and remove item from array***//
	$(".closeX").click(function () {

		//** Get itemId **//
		var itemId = $(this).attr("id");
		//** Get indexId **//
		var index = $("#selectedItem" + itemId + "Index").text();

		var SelectedItemId = "#selectedItem" + itemId;
		var SelectedItemTitle = "#selectedItem" + itemId + "Title";
		var SelectedItemIndex = "#selectedItem" + itemId + "Index";

		//** Reset item values in Array **//
		contentItemsArray[index].title = "";
		contentItemsArray[index].thumbnailURL = "";
		contentItemsArray[index].contentId = "";
		contentItemsArray[index].isOccupied = "false";

		//** Remove background image, set text & index to empty **//
		$(this).closest(".selectedItem").css("background-image", "");
		$(SelectedItemTitle).text("");
		$(SelectedItemIndex).text("");

		//** Hide X Button & clear out variables **//
		$(this).css("visibility", "hidden");
		var SelectedItemId = "";
		var SelectedItemTitle = "";
		var SelectedItemIndex = "";

		//**** If no content items exist, deactivate start slideshow button ****//
		var i;
		var falseCount = 0;
		for (i = 0; i < contentItemsArray.length; i++) {
			if (contentItemsArray[i].isOccupied == "false") {
				falseCount++;
				if (falseCount == 5) {
					$(".Button").removeClass("Button-Activated");
				}
			}
			else {
				//do nothing
			}
		}

	});

	var moveInArray = function (arr, from, to) {

		// Make sure a valid array is provided
		if (Object.prototype.toString.call(arr) !== '[object Array]') {
			throw new Error('Please provide a valid array');
		}

		// Delete the item from it's current position
		var item = arr.splice(from, 1);

		// Make sure there's an item to move
		if (!item.length) {
			throw new Error('There is no item in the array at index ' + from);
		}

		// Move the item to its new position
		arr.splice(to, 0, item[0]);

		readArrayUpdateUI();

	};

	$('.moveLeft').click(function () {
		var clickedItemIndexId = parseInt($(this).closest(".selectedItem").find(".aIndex").text());
		var toSpot = clickedItemIndexId - 1;
		moveInArray(contentItemsArray, clickedItemIndexId, toSpot);
	});

	$('.moveRight').click(function () {
		var clickedItemIndexId = parseInt($(this).closest(".selectedItem").find(".aIndex").text());
		var toSpot = clickedItemIndexId + 1;
		moveInArray(contentItemsArray, clickedItemIndexId, toSpot);
	});


	//************************ Get Items from Array & Populate Carousel Divs *******************************//

	function populateCarousel() {

		var i;
		for (i = 0; i < contentItemsArray.length; i++) {

			$('.slideShowDiv').append("<div class=\"ssItem\" id=\"ssItem" + [i] + "\"><div class=\"ssText\"><div class=\"ssItemTitle\" id=\"ssItem" + [i] + "\Title\">" + contentItemsArray[i].title + "</div><div class=\"ssItemSummary\" id=\"ssItem" + [i] + "\Summary\">" + contentItemsArray[i].summary + "</div></div></div>");

			var ssItemHero = contentItemsArray[i].imgLandscapeURL;
			$("#ssItem" + [i]).css("background-image", "url(\'" + ssItemHero + "\')");

		}
	}


	//******************************* On Start Digital Display Click ***************************************//

	$("#startButton").click(function () {

		alert("Slide show starting, press the escape key to cancel");

		populateCarousel();

		$('.slideShowDiv').css({ "visibility": "visible", "width": "50%", "height": "1080" });

		if (
			document.fullscreenElement ||
			document.webkitFullscreenElement ||
			document.mozFullScreenElement ||
			document.msFullscreenElement
		) {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		} else {
			element = $('.slideShowDiv').get(0);
			if (element.requestFullscreen) {
				element.requestFullscreen();
			} else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			} else if (element.webkitRequestFullscreen) {
				element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			} else if (element.msRequestFullscreen) {
				element.msRequestFullscreen();
			}
		}

		//*** Get selected resolution value ***//
		var screenRez = $("#resolutionList :selected").val();

		//*** Get selected show style value ***//
		var showStyle = $("#displayStyleSelect :selected").val();
		console.log("showstyle = " + showStyle);

		//*** Slideshow loop constructor. Based on showstyle, loop slideshow every X seconds ***//
		function startSSLoop() {

			if (showStyle == "fade") {
				fadesLoop();
				setInterval(function () { fadesLoop(); }, 18000);
			}
			else if (showStyle == "slideLeft") {
				slideLeftLoop();
				setInterval(function () { slideLeftLoop(); }, 5000);
			}
			else if (showStyle == "slideRight") {
				//	setInterval(function(){ slideRightLoop(); }, 21000);
				slideRightLoop();
			}
		}

		//*** If style = fades.... ***//
		function fadesLoop() {
			$('#ssItem0').delay(3000).fadeOut(2000);
			$('#ssItem1').delay(9000).fadeOut(2000);
			$('#ssItem2').delay(15000).fadeOut(2000);
			$('#ssItem3').delay(19000).fadeOut(2000);
			$('#ssItem4').delay(25000).fadeOut(2000);

			$('#ssItem0').delay(25000).fadeIn();
			$('#ssItem1').delay(25000).fadeIn();
			$('#ssItem2').delay(25000).fadeIn();
			$('#ssItem3').delay(25000).fadeIn();
			$('#ssItem4').delay(25000).fadeIn();
		}

		//*** If style = slideLeft.... ***//
		function slideLeftLoop() {
			$('#ssItem0').delay(3000).animate({ margin: '0px 1920px 0px -1920px', width: '0px', height: '0px' }, "slow");
			$('#ssItem1').delay(9000).animate({ margin: '0px 1920px 0px -1920px', width: '0px', height: '0px' }, "slow");
			$('#ssItem2').delay(15000).animate({ margin: '0px 1920px 0px -1920px', width: '0px', height: '0px' }, "slow");
			$('#ssItem3').delay(19000).animate({ margin: '0px 1920px 0px -1920px', width: '0px', height: '0px' }, "slow");
			$('#ssItem4').delay(25000).animate({ margin: '0px 1920px 0px -1920px', width: '0px', height: '0px' }, "slow");

			$('#ssItem0').delay(25000).animate({ margin: '0px 0px 0px 0px', width: '1920px', height: '1080px' }, "fast");
			$('#ssItem1').delay(25000).animate({ margin: '0px 0px 0px 0px', width: '1920px', height: '1080px' }, "fast");
			$('#ssItem2').delay(25000).animate({ margin: '0px 0px 0px 0px', width: '1920px', height: '1080px' }, "fast");
			$('#ssItem3').delay(25000).animate({ margin: '0px 0px 0px 0px', width: '1920px', height: '1080px' }, "fast");
			$('#ssItem4').delay(25000).animate({ margin: '0px 0px 0px 0px', width: '1920px', height: '1080px' }, "fast");
		}

		//*** If style = slideRight.... ***//
		function slideRightLoop() {
			$('#ssItem0').delay(3000).animate({ margin: '0px -1920px 0px 1920px', width: '0px', height: '0px' }, "slow");
			$('#ssItem1').delay(9000).animate({ margin: '0px -1920px 0px 1920px', width: '0px', height: '0px' }, "slow");
			$('#ssItem2').delay(15000).animate({ margin: '0px -1920px 0px 1920px', width: '0px', height: '0px' }, "slow");
			$('#ssItem3').delay(19000).animate({ margin: '0px -1920px 0px 1920px', width: '0px', height: '0px' }, "slow");
			$('#ssItem4').delay(25000).animate({ margin: '0px -1920px 0px 1920px', width: '0px', height: '0px' }, "slow");

			$('#ssItem0').delay(25000).animate({ margin: '0px 0px 0px 0px', width: '1920px', height: '1080px' }, "fast");
			$('#ssItem1').delay(25000).animate({ margin: '0px 0px 0px 0px', width: '1920px', height: '1080px' }, "fast");
			$('#ssItem2').delay(25000).animate({ margin: '0px 0px 0px 0px', width: '1920px', height: '1080px' }, "fast");
			$('#ssItem3').delay(25000).animate({ margin: '0px 0px 0px 0px', width: '1920px', height: '1080px' }, "fast");
			$('#ssItem4').delay(25000).animate({ margin: '0px 0px 0px 0px', width: '1920px', height: '1080px' }, "fast");
		}


		//*** Invoke SlideShow Loop ****//
		startSSLoop();



		//*** If style = slide left .... need to make it loop ***///
		//** https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation **//

	});

});

//**** When escape is clicked to exit fullscreen, hide carousel items *****//

document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
	if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
		$('.slideShowDiv').css({ "visibility": "hidden", "width": "0", "height": "0" });
		$('.slideShowDiv').empty();
	}
}

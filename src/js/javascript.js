var bmoreHealth = {
	init: function(){
		bmoreHealth.optionsSwap(0);
		bmoreHealth.triggers();
		bmoreHealth.dataViz();
		//bmoreHealth.share();
	},
	share: function(){
		$(".icon-twitter").on("click", function(){
			var tweet = ""; //Tweet text
			var url = ""; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".icon-facebook").on("click", function(){
			var picture = ""; //Picture URL
			var title = ""; //Post title
			var description = ""; //Post description
			var url = ""; //Interactive URL
	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
	},
	dataViz: function(){
		var data;
		data = [[16080,13352,16250,14626,7968,23701,8541,8321,8332,8413,14016,3771,11759,5913,8568,9534,9102,17298,16556,10762,9284,7620,15631,13487,16186,7309,10553,13332,12247,17221,7204,17486,9356,7836,5134,17389,16949,10280,14478,10576,11686,4916,15518,7097,5583,14931,17137,7796,5345,6966,9285,5658,10071,15521,7691],[25.1,24.9,28.0,27.2,7.5,22.0,37.2,25.5,25.8,21.1,28.4,27.5,23.1,6.1,23.4,10.7,20.8,24.5,10.6,23.2,18.1,20.4,23.2,24.4,21.3,15.3,17.2,11.6,18.8,21.7,29.5,14.5,22.2,18.8,21.9,15.6,16.7,25.0,21.8,24.6,18.6,25.9,26.0,11.3,27.1,24.4,26.8,17.9,19.3,28.5,24.6,22.0,31.7,6.2,24.5],[10.3,8.1,8.9,10.1,8.2,9.6,10.7,8.0,10.6,10.3,8.9,9.7,9.1,19.7,10.1,5.7,9.4,7.5,30.3,11.5,19.2,9.1,11.0,7.9,7.2,9.1,6.6,9.4,8.1,11.9,14.6,7.5,10.5,5.6,3.4,24.6,26.2,6.9,9.3,9.1,10.0,11.2,10.7,6.1,6.2,11.3,8.4,9.1,11.9,8.2,13.4,10.7,11.8,18.4,9.5],[26.8,25.6,28.6,31.3,57.6,30.1,24.0,27.3,27.3,23.6,25.0,29.6,22.3,53.9,27.3,56.5,23.0,23.3,34.4,25.2,21.0,20.1,23.8,28.5,29.7,45.9,17.7,48.8,26.8,26.0,25.0,43.0,24.6,27.1,26.7,23.0,21.6,32.9,43.9,28.0,25.8,31.1,22.1,57.5,27.4,26.1,27.5,31.2,35.2,31.4,27.9,36.0,23.7,43.9,23.0],[24.2,30.8,26.1,25.2,16.4,28.9,19.9,27.2,27.2,29.5,20.4,24.1,29.6,15.9,24.4,21.0,31.5,27.0,17.7,26.9,26.5,29.8,28.8,29.3,30.3,19.7,31.5,18.7,34.2,26.8,24.4,21.4,29.8,29.5,30.7,23.1,21.1,22.9,19.0,27.6,28.5,22.8,29.7,17.3,25.8,27.4,26.1,27.0,25.7,25.1,20.8,25.4,22.5,18.0,30.1],[13.5,10.6,8.4,6.3,10.3,9.4,8.2,12.0,9.1,15.6,17.2,9.1,15.8,4.4,14.8,6.0,15.3,17.8,7.1,13.2,15.2,20.6,13.1,9.8,11.5,10.0,27.0,11.5,12.1,13.6,6.5,13.7,13.0,18.9,17.3,13.8,14.4,12.4,6.1,10.7,17.1,9.0,11.4,7.8,13.5,10.9,11.2,14.8,8.0,6.9,13.3,6.0,10.4,13.6,12.9],[46.4,48.0,42.8,45.5,51.1,44.0,44.3,43.7,45.8,49.2,45.1,41.3,44.3,50.5,45.8,50.1,44.4,46.4,51.1,46.1,43.9,49.7,46.2,46.0,45.2,54.1,46.4,48.9,49.8,47.6,48.4,49.3,45.2,48.5,44.9,45.9,45.2,49.4,50.0,47.0,45.8,47.7,44.8,50.9,44.9,43.0,47.5,44.5,49.8,50.5,45.5,49.6,45.3,48.8,44.5],[53.6,52.0,57.2,54.5,48.9,56.0,55.7,56.3,54.2,50.8,54.9,58.7,55.7,49.5,54.2,49.9,55.6,53.6,48.9,53.9,56.1,50.3,53.8,54.0,54.8,45.9,53.6,51.1,50.2,52.4,51.6,50.7,54.8,51.5,55.1,54.1,54.8,50.6,50.0,53.0,54.2,52.3,55.2,49.1,55.1,57.0,52.5,55.5,50.2,49.5,54.5,50.4,54.7,51.2,55.5],[87.6,78.5,88.8,37.7,2.5,76.3,90.3,70.0,57.1,94.9,19.3,80.5,93.1,32.3,97.5,5.6,95.2,61.8,32.4,90.4,94.5,6.9,98.6,63.7,54.4,12.4,94.1,13.0,56.5,90.5,89.9,10.9,95.1,18.3,25.5,16.0,86.5,15.1,37.8,85.0,96.3,79.4,96.7,2.5,27.5,94.5,74.3,76.4,54.2,71.8,88.4,58.5,93.3,30.3,96.6],[9.2,16.4,9.3,48.4,90.1,14.4,5.1,24.7,34.8,3.3,72.9,9.2,3.3,49.3,1.1,80.5,2.9,30.3,48.6,6.4,2.0,82.6,0.5,31.5,41.4,80.1,3.9,79.2,36.2,6.6,5.2,78.2,2.3,74.2,65.8,70.1,8.9,63.9,54.1,10.9,1.8,17.2,0.8,89.7,55.2,3.9,17.4,16.5,39.6,24.2,8.1,33.1,3.7,54.4,2.9],[0.4,0.8,0.5,1.4,3.8,4.7,1.0,0.9,1.0,0.1,6.4,1.8,0.3,12.0,0.0,4.6,0.1,2.1,13.9,0.2,0.3,7.0,0.2,1.1,0.6,1.5,0.1,4.8,2.5,1.2,0.1,7.0,0.4,2.1,6.7,7.8,1.0,1.9,0.9,0.3,0.3,1.4,0.4,3.4,1.9,0.4,1.3,2.3,2.6,2.2,2.1,4.8,1.5,8.6,0.0],[0.1,1.0,0.3,8.2,1.9,2.2,1.1,0.2,4.2,0.9,0.9,1.2,0.5,3.3,1.0,6.7,0.2,3.8,1.4,0.3,0.3,0.7,0.3,0.5,2.3,3.8,0.5,0.7,2.2,1.1,4.1,1.1,0.9,1.7,0.8,1.4,0.5,15.1,4.2,2.2,0.6,0.3,1.3,2.1,12.6,0.7,2.5,3.2,0.2,0.8,1.0,2.8,0.3,2.8,0.2],[2.7,3.2,1.1,4.3,1.7,2.3,2.5,4.2,2.9,0.8,0.6,7.2,2.8,3.1,0.5,2.5,1.6,2.0,3.8,2.6,2.9,2.9,0.4,3.2,1.2,2.2,1.3,2.3,2.6,0.5,0.6,2.9,1.3,3.7,1.1,4.7,3.1,3.9,3.0,1.6,1.0,1.6,0.8,2.3,2.7,0.6,4.5,1.7,3.4,0.9,0.4,0.8,1.2,3.8,0.3],[1.6,2.8,0.7,11.3,4.9,3.8,4.7,5.5,10.3,2.2,2.0,2.0,0.0,5.5,1.3,13.9,1.4,5.7,5.2,2.3,0.4,2.9,1.5,1.5,3.3,17.1,0.7,4.7,2.4,1.8,7.0,4.5,2.0,6.6,3.5,3.6,2.7,31.9,15.5,1.9,0.9,1.8,0.4,5.0,21.9,2.7,6.2,1.3,2.4,5.6,1.2,8.7,0.5,5.8,1.9],[76.8,61.0,73.2,69.1,15.1,61.5,83.1,66.8,61.2,83.1,16.4,70.8,87.6,67.4,78.3,52.6,80.1,47.5,55.1,76.3,89.6,17.9,81.6,51.9,47.3,33.8,62.2,35.9,43.8,69.7,76.8,32.1,89.5,43.9,21.7,11.2,60.9,62.5,58.6,76.8,71.5,91.1,86.8,14.3,55.1,79.3,75.4,63.3,68.7,75.2,94.3,90.9,93.5,47.6,86.6],[11.2,11.1,13.9,21.0,5.0,12.5,13.2,13.7,14.4,10.0,7.4,7.2,14.5,8.2,16.6,9.6,9.9,15.5,8.2,11.6,12.2,3.2,13.4,7.3,10.6,16.2,9.8,4.9,10.8,10.7,15.5,7.0,13.9,14.8,5.2,4.9,8.5,25.8,16.6,10.7,13.7,15.3,15.5,7.3,18.9,16.8,18.5,14.7,11.0,14.2,13.2,14.2,11.7,8.7,12.2],[3.2,4.6,6.8,2.5,0.0,6.1,2.7,6.1,8.8,3.4,5.5,4.8,2.0,5.0,7.5,0.8,0.0,3.7,1.3,7.3,4.0,0.5,3.2,0.2,3.7,14.0,3.0,3.8,3.3,3.6,6.0,1.3,2.0,2.4,3.6,0.7,2.0,18.6,9.7,1.6,10.1,6.0,1.5,3.2,14.4,4.2,5.7,3.8,8.9,3.2,2.8,1.7,3.1,4.7,0.6],[1.1,1.1,1.5,5.3,2.8,7.6,2.4,2.7,5.7,1.6,3.5,1.3,1.2,3.9,0.4,6.6,0.6,6.9,4.9,1.6,0.7,3.1,0.7,1.9,1.8,10.7,0.8,2.3,3.0,1.8,3.5,3.1,0.4,3.7,2.0,5.1,1.3,25.9,10.8,1.4,0.7,2.5,1.3,1.4,9.0,2.3,4.4,2.1,2.5,5.0,0.8,3.2,1.6,3.7,0.5],[70.9,74.7,72.0,69.7,78.4,72.4,69.5,75.3,70.9,66.9,87.1,73.2,73.4,67.5,71.8,78.7,74.0,79.2,74.1,73.3,70.4,83.9,70.6,73.8,75.7,74.5,76.1,79.2,76.5,75.9,68.9,76.5,69.0,73.6,81.5,84.0,75.6,73.0,72.4,71.6,68.2,68.4,70.0,76.7,72.7,70.1,68.0,72.0,70.1,73.8,70.4,72.1,68.2,76.4,67.9],[113.0,92.7,112.3,125.1,78.9,107.7,124.6,91.1,132.2,134.9,44.9,105.2,101.7,151.0,113.0,74.1,94.4,70.2,96.6,105.2,116.2,54.5,115.5,98.8,94.0,94.5,89.9,75.9,85.4,87.0,130.0,88.2,125.3,102.7,65.8,52.1,87.7,105.9,106.4,109.7,128.2,131.4,116.0,90.7,105.3,119.1,128.7,112.8,121.6,99.1,115.3,105.1,131.6,84.6,129.1],[3.1,2.3,4.4,3.9,2.7,2.9,4.6,3.1,5.6,9.1,11.4,2.9,2.5,6.5,2.0,5.1,5.3,4.8,5.4,5.1,4.5,3.0,3.8,2.0,2.1,5.8,2.9,5.9,3.4,1.8,8.2,4.9,6.9,1.8,5.4,4.7,2.3,4.8,6.3,7.0,4.9,6.3,3.9,3.4,4.2,7.5,7.9,6.2,3.3,2.5,7.6,7.7,6.6,4.5,4.9],[43.8,28.5,39.2,37.5,10.1,29.6,44.4,24.2,28.9,59.6,9.7,20.5,33.9,43.1,44.2,12.4,43.1,26.5,39.0,44.9,52.2,4.3,53.6,21.2,19.1,17.9,28.7,14.2,25.1,23.9,52.7,17.9,62.6,44.0,11.6,6.8,23.8,26.5,29.1,60.0,47.4,69.6,69.1,7.8,21.7,63.8,67.3,45.9,48.3,35.7,96.0,94.3,71.0,27.0,76.5],[246.0,124.1,233.2,340.1,71.9,170.0,187.6,130.8,172.3,252.2,46.8,101.2,199.3,111.7,215.7,91.0,228.2,93.4,78.1,218.5,245.2,38.2,335.1,134.1,134.7,128.2,157.2,52.0,177.0,125.9,425.2,149.6,314.4,245.6,81.1,61.8,151.8,330.8,247.7,138.8,239.7,164.7,225.5,128.7,350.7,223.6,367.4,146.2,294.8,295.8,105.5,134.5,173.5,64.9,301.9],[8.5,4.1,6.1,10.4,0.0,4.2,8.0,2.1,2.7,20.3,0.0,4.9,4.6,8.4,8.6,0.9,6.1,4.7,4.6,7.5,14.6,0.0,13.6,1.7,2.9,3.6,3.9,0.3,3.1,3.4,20.6,0.2,15.6,1.5,0.0,1.1,4.1,3.3,4.9,7.4,12.4,14.2,18.5,0.0,3.5,11.0,21.8,8.5,9.4,9.3,13.0,5.9,15.5,4.0,16.9],[5.3,2.6,4.2,4.1,0.0,3.5,3.4,1.8,1.5,7.9,0.3,2.9,4.9,5.9,4.8,1.1,6.1,2.7,3.4,4.3,7.3,0.0,7.0,1.7,1.4,1.9,2.8,1.2,1.3,1.8,7.7,0.6,11.2,1.1,0.0,0.2,1.9,2.6,2.3,7.9,7.4,7.1,8.9,0.0,2.2,6.0,8.2,5.7,5.5,5.3,6.8,1.8,7.7,1.3,10.5],[38.5,39.7,42.3,17.8,0.0,37.7,40.8,23.9,13.0,107.0,4.1,0.0,70.7,10.9,29.1,0.0,43.2,8.6,11.6,21.7,46.7,0.0,55.9,38.7,18.1,11.1,24.6,6.8,25.9,31.2,33.6,10.3,56.0,15.5,0.0,2.7,19.7,13.9,36.6,18.0,56.8,21.8,68.4,0.0,9.5,48.9,52.9,49.3,33.7,27.9,26.8,32.8,61.0,14.0,20.3],[35958,52623,38906,35862,91736,39306,22659,44253,34034,25738,54868,32768,36870,44819,36648,77433,37161,39694,30845,36531,38655,104482,30865,63986,54086,71660,39468,88854,66196,47992,27454,58210,34523,38210,76263,81451,58266,40431,56652,33264,32410,17228,24374,88487,32102,26015,24946,32652,48175,41368,14105,36579,15950,38867,23277],[36.1,20.4,35.0,34.1,8.8,29.7,54.3,28.3,36.9,44.8,18.4,37.7,31.5,32.0,28.6,12.8,33.8,35.2,41.8,34.5,37.4,11.4,39.6,19.1,21.3,22.0,33.0,18.9,16.9,24.2,48.3,18.4,44.7,38.6,13.6,17.2,21.7,31.5,26.0,40.2,40.5,57.2,51.3,9.9,38.2,48.2,49.8,36.6,36.8,35.2,66.5,39.3,61.7,34.7,52.4],[18.8,17.2,17.0,19.4,8.7,21.2,20.4,17.4,22.2,19.0,15.8,17.0,19.9,14.0,24.3,10.7,16.7,15.2,16.4,18.5,17.6,6.7,21.4,14.7,15.3,9.8,15.5,7.0,12.1,16.9,16.0,14.0,13.1,15.5,10.0,11.1,14.1,16.7,9.2,15.2,14.4,15.1,14.9,6.5,21.1,20.0,16.4,19.0,8.4,14.4,10.9,10.9,15.1,14.4,16.6],[16.8,21.0,17.9,21.8,11.7,17.6,12.8,14.9,21.6,16.3,19.2,17.4,18.6,18.4,22.3,13.7,20.8,17.1,15.6,17.6,16.3,9.5,16.4,13.3,19.5,14.4,18.3,11.6,15.3,25.4,17.1,19.0,21.4,15.8,13.0,11.7,19.1,16.6,16.9,20.7,19.4,10.3,14.5,12.7,18.5,11.5,13.0,16.4,15.9,21.2,10.7,11.5,10.1,13.7,15.7],[12.7,12.3,7.6,9.5,7.4,8.3,3.9,10.0,4.2,7.4,12.3,10.4,4.9,10.2,7.7,10.9,5.6,7.3,5.8,10.9,11.2,12.0,8.6,12.5,11.9,6.5,10.6,6.9,14.5,13.2,5.7,12.1,7.7,10.9,12.2,8.8,14.0,10.1,7.1,5.9,5.4,6.1,8.3,8.9,8.0,6.4,8.6,5.2,9.7,6.6,2.9,5.6,6.1,10.2,5.5],[15.6,29.2,22.6,15.2,63.3,23.2,8.5,29.3,15.2,12.5,34.3,17.4,25.1,25.4,17.0,51.9,23.2,25.3,20.4,18.5,17.5,60.5,14.1,40.5,32.1,47.3,22.6,55.5,41.3,20.4,12.8,36.5,13.1,19.3,51.3,51.1,31.1,25.1,40.9,17.9,20.2,11.3,11.0,62.0,14.2,13.9,12.2,22.7,29.2,22.6,9.0,32.7,7.0,26.9,9.8],[20.0,12.8,16.2,21.5,3.2,10.7,15.9,12.8,19.6,17.4,6.5,4.8,21.9,5.5,18.4,5.2,9.9,16.2,10.5,16.1,19.0,2.3,17.6,7.8,9.1,5.4,12.9,5.4,11.0,13.6,26.4,6.9,26.1,13.1,4.5,6.0,13.1,8.1,8.1,17.6,17.1,17.9,20.7,6.0,17.1,23.6,20.4,14.7,16.4,18.2,20.7,18.1,22.3,6.4,24.7],[35.1,15.5,29.1,39.5,2.6,23.7,57.2,12.8,29.6,30.2,10.5,22.5,31.6,10.6,28.1,10.4,39.0,23.9,36.3,30.5,28.4,4.9,35.8,13.7,14.1,15.2,35.1,17.0,12.5,18.7,45.2,10.1,40.5,13.3,9.6,4.4,11.7,21.5,38.5,40.4,28.4,63.3,50.3,5.6,43.6,46.4,45.9,23.0,33.6,35.0,60.0,50.8,60.1,7.1,33.8],[63.7,44.7,54.5,75.7,11.3,49.5,73.8,43.8,63.5,61.2,37.1,41.3,60.6,26.4,53.6,23.3,44.2,62.6,44.8,57.1,62.2,16.1,65.1,39.8,38.3,38.4,54.7,15.8,39.4,43.5,90.3,34.1,71.8,60.9,23.5,23.5,40.2,58.8,49.9,64.6,60.6,74.9,79.8,16.7,68.9,73.1,76.3,49.4,56.4,63.7,79.9,58.1,82.1,32.4,72.9]];
		var means = [21.2,11.3,30.1,25.3,12.1,47.1,52.9,62.8,30.3,2.6,2.0,2.3,4.6,64.8,11.7,4.4,3.4,73.6,99.5,4.7,35,177.4,6.9,3.9,31.3,41819,32.2,15.4,16.5,8.9,27,13.1,28.8,51];
		$('.dataJSTrigger').on('click', function(){
			var cat = $(this);
			$('.rankCategory').text(cat.text());
			populateData(cat.data('var'));
		});

		var map = d3.selectAll('.mapSVG');
		var mapHoods = map.selectAll('g').select('path')

		// var rankOrder = [{"id":0,"value":"","name":"Allendale/Irvington/S. Hilton"},{"id":1,"value":"","name":"Beechfield/Ten Hills/West Hills"},{"id":2,"value":"","name":"Belair-Edison"},{"id":3,"value":"","name":"Brooklyn/Curtis Bay/Hawkins Point"},{"id":4,"value":"","name":"Canton"},{"id":5,"value":"","name":"Cedonia/Frankford"},{"id":6,"value":"","name":"Cherry Hill"},{"id":7,"value":"","name":"Chinquapin Park/Belvedere"},{"id":8,"value":"","name":"Claremont/Armistead"},{"id":9,"value":"","name":"Clifton-Berea"},{"id":10,"value":"","name":"Cross-Country/Cheswolde"},{"id":11,"value":"","name":"Dickeyville/Franklintown"},{"id":12,"value":"","name":"Dorchester/Ashburton"},{"id":13,"value":"","name":"Downtown/Seton Hill"},{"id":14,"value":"","name":"Edmondson Village"},{"id":15,"value":"","name":"Fells Point"},{"id":16,"value":"","name":"Forest Park/Walbrook"},{"id":17,"value":"","name":"Glen-Falstaff"},{"id":18,"value":"","name":"Greater Charles Village/Barclay"},{"id":19,"value":"","name":"Greater Govans"},{"id":20,"value":"","name":"Greater Mondawmin"},{"id":21,"value":"","name":"Greater Roland Park/Poplar"},{"id":22,"value":"","name":"Greater Rosemont"},{"id":23,"value":"","name":"Hamilton"},{"id":24,"value":"","name":"Harford/Echodale"},{"id":25,"value":"","name":"Highlandtown"},{"id":26,"value":"","name":"Howard Park/West Arlington"},{"id":27,"value":"","name":"Inner Harbor/Federal Hill"},{"id":28,"value":"","name":"Lauraville"},{"id":29,"value":"","name":"Loch Raven"},{"id":30,"value":"","name":"Madison/East End"},{"id":31,"value":"","name":"Medfield/Hampden/Woodberry/Remington"},{"id":32,"value":"","name":"Midway/Coldstream"},{"id":33,"value":"","name":"Morrell Park/Violetville"},{"id":34,"value":"","name":"Mt. Washington/Coldspring"},{"id":35,"value":"","name":"North Baltimore/Guilford/Homeland"},{"id":36,"value":"","name":"Northwood"},{"id":37,"value":"","name":"Orangeville/East Highlandtown"},{"id":38,"value":"","name":"Patterson Park North & East"},{"id":39,"value":"","name":"Penn North/Reservoir Hill"},{"id":40,"value":"","name":"Pimlico/Arlington/Hilltop"},{"id":41,"value":"","name":"Poppleton/The Terraces/Hollins Market"},{"id":42,"value":"","name":"Sandtown-Winchester/Harlem Park"},{"id":43,"value":"","name":"South Baltimore"},{"id":44,"value":"","name":"Southeastern"},{"id":45,"value":"","name":"Southern Park Heights"},{"id":46,"value":"","name":"Southwest Baltimore"},{"id":47,"value":"","name":"The Waverlies"},{"id":48,"value":"","name":"Washington Village/Pigtown"},{"id":49,"value":"","name":"Westport/Mt. Winans/Lakeland"},{"id":50,"value":"","name":"Oldtown/Middle East"},{"id":51,"value":"","name":"Harbor East/Little Italy"},{"id":52,"value":"","name":"Upton/Druid Heights"},{"id":53,"value":"","name":"Midtown"},{"id":54,"value":"","name":"Greenmount East"}];
		var rankOrder;
		function populateData(variable){
			rankOrder = [{"id":0,"value":"","name":"Allendale / Irvington / S. Hilton"},{"id":1,"value":"","name":"Beechfield / Ten Hills / West Hills"},{"id":2,"value":"","name":"Belair-Edison"},{"id":3,"value":"","name":"Brooklyn / Curtis Bay / Hawkins Point"},{"id":4,"value":"","name":"Canton"},{"id":5,"value":"","name":"Cedonia / Frankford"},{"id":6,"value":"","name":"Cherry Hill"},{"id":7,"value":"","name":"Chinquapin Park / Belvedere"},{"id":8,"value":"","name":"Claremont / Armistead"},{"id":9,"value":"","name":"Clifton-Berea"},{"id":10,"value":"","name":"Cross-Country / Cheswolde"},{"id":11,"value":"","name":"Dickeyville / Franklintown"},{"id":12,"value":"","name":"Dorchester / Ashburton"},{"id":13,"value":"","name":"Downtown / Seton Hill"},{"id":14,"value":"","name":"Edmondson Village"},{"id":15,"value":"","name":"Fells Point"},{"id":16,"value":"","name":"Forest Park / Walbrook"},{"id":17,"value":"","name":"Glen-Falstaff"},{"id":18,"value":"","name":"Greater Charles Village / Barclay"},{"id":19,"value":"","name":"Greater Govans"},{"id":20,"value":"","name":"Greater Mondawmin"},{"id":21,"value":"","name":"Greater Roland Park / Poplar"},{"id":22,"value":"","name":"Greater Rosemont"},{"id":23,"value":"","name":"Hamilton"},{"id":24,"value":"","name":"Harford / Echodale"},{"id":25,"value":"","name":"Highlandtown"},{"id":26,"value":"","name":"Howard Park / West Arlington"},{"id":27,"value":"","name":"Inner Harbor / Federal Hill"},{"id":28,"value":"","name":"Lauraville"},{"id":29,"value":"","name":"Loch Raven"},{"id":30,"value":"","name":"Madison / East End"},{"id":31,"value":"","name":"Medfield / Hampden / Woodberry / Remington"},{"id":32,"value":"","name":"Midway / Coldstream"},{"id":33,"value":"","name":"Morrell Park / Violetville"},{"id":34,"value":"","name":"Mt. Washington / Coldspring"},{"id":35,"value":"","name":"North Baltimore / Guilford / Homeland"},{"id":36,"value":"","name":"Northwood"},{"id":37,"value":"","name":"Orangeville / East Highlandtown"},{"id":38,"value":"","name":"Patterson Park North & East"},{"id":39,"value":"","name":"Penn North / Reservoir Hill"},{"id":40,"value":"","name":"Pimlico / Arlington / Hilltop"},{"id":41,"value":"","name":"Poppleton / The Terraces / Hollins Market"},{"id":42,"value":"","name":"Sandtown-Winchester / Harlem Park"},{"id":43,"value":"","name":"South Baltimore"},{"id":44,"value":"","name":"Southeastern"},{"id":45,"value":"","name":"Southern Park Heights"},{"id":46,"value":"","name":"Southwest Baltimore"},{"id":47,"value":"","name":"The Waverlies"},{"id":48,"value":"","name":"Washington Village / Pigtown"},{"id":49,"value":"","name":"Westport / Mt. Winans / Lakeland"},{"id":50,"value":"","name":"Oldtown / Middle East"},{"id":51,"value":"","name":"Harbor East / Little Italy"},{"id":52,"value":"","name":"Upton / Druid Heights"},{"id":53,"value":"","name":"Midtown"},{"id":54,"value":"","name":"Greenmount East"}];
			var currData = data[variable];
			var max = d3.max(currData);

			if (max <= 1) {

			}

			var min = d3.min(currData);
			var avg = means[variable+1];
			// var avg = Math.round(d3.mean(currData));
			var avgPct = avg;

			var mapOpacity = d3.scale.linear()
				.domain([min, max])
				.range([.1,1]);

			mapHoods.data(currData)
				.style('fill-opacity', mapOpacity);

			d3.select('.map__legend__label--left')
				.text(min);
			d3.select('.map__legend__label--right')
				.text(max);
			d3.select('.map__legend__average')
				.style('left',avgPct + '%');
			d3.select('.map__averageLabel span')
				.text(avg);

			for (var i=0;i<55;i++) {
				rankOrder[i].value = currData[i];
			};
			rankOrder.sort(function(a,b){
				return b.value - a.value;
			});
			for (var i=0;i<55;i++){
				$('.ranks__hood__detail--name--'+i).text(rankOrder[i].name);
				$('.ranks__hood__detail--extra--'+i+' p span').text(rankOrder[i].value);
			};
		};

		var rankNum, hoodNum;
		$('.icon-location').on('click', function(){
			rankNum = $(this).data('ranknum');
			hoodNum = rankOrder[rankNum].id;
			$('.overlay__neighborhoodName h2').text(
				$('.ranks__hood__detail--name--'+rankNum).text()
			);
			d3.select('.overlay').select('.neighborhood--'+hoodNum).style('fill','#388E3C');
			$('.overlay').fadeIn();
		});
		
		$('.overlay').on('click', function(){
			d3.select('.overlay').select('.neighborhood--'+hoodNum).style('fill','#BDBDBD');
			$(this).fadeOut();
		});
	},
	triggers: function(){
		var toCat; // Holds value representing next category 
		$('.categoryBtn').on('click', function(){
			toCat = $(this).data('cat');
			$('.categoryBtn--active').toggleClass('categoryBtn--active');
			$(this).addClass('categoryBtn--active');
			bmoreHealth.optionsSwap(toCat);
		});

		$('.ranks__expandBtn__detail').on('click', function(){
			$('.ranks.ranks--mid').toggleClass('active');
			$('.ranks__expandBtn__detail').toggleClass('active');
		});
		
		$('.category__var').on('click',function(){
			$('.category__var--active').toggleClass('category__var--active');
			$(this).addClass('category__var--active');
		});
		$('.category__var__subvar').on('click',function(){
			$('.category__var__subvar--active').toggleClass('category__var__subvar--active');
			$(this).addClass('category__var__subvar--active');
		});


		$('.dataJSTrigger').one('click', function(){
			$('.ranksWrap').fadeIn();
		});
	},
	optionsSwap: function(toCat){
		$('.subhead').fadeOut(250, function(){
			$('.subhead').text($('.categoryBtn__label--'+toCat).text());
			$('.subhead').fadeIn(250);
		});

		$('.category--active').fadeOut(250, function(){
			$('.category--active').toggleClass('category--active');
			$('.category--'+toCat).addClass('category--active');
			$('.category--'+toCat).fadeIn();
		});
		return false;
	}
}
$(document).ready(function(){
	bmoreHealth.init();
	console.log("connected");
});

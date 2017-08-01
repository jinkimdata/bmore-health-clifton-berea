var bmoreHealthProfile = {
    init: function() {
        bmoreHealthProfile.otherTriggers();
        bmoreHealthProfile.dataViz();
        bmoreHealthProfile.share();
    },
    share: function() {
        $(".icon-twitter-squared").on("click", function() {
            var tweet = "Explore Clifton-Berea in this in-depth data dive.";
            var url = "http://data.baltimoresun.com/news/neighborhood-health/clifton-berea";
            var twitter_url = "https://twitter.com/intent/tweet?text=" + tweet + "&url=" + url + "&tw_p=tweetbutton";
            window.open(twitter_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
        $(".icon-facebook-squared").on("click", function() {
            var picture = "http://data.baltimoresun.com/news/neighborhood-health/clifton-berea/images/thumb.jpg";
            var title = "Baltimore Neighborhood Health 2016";
            var description = "Explore Clifton-Berea in this in-depth data dive.";
            var url = "http://data.baltimoresun.com/news/neighborhood-health/clifton-berea";
            var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link=" + url + "&picture=" + picture + "&name=" + title + "&description=" + description + "&redirect_uri=http://www.facebook.com";
            window.open(facebook_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
    },
    dataViz: function() {
        var data = [ [ 25.1, 24.9, 28, 27.2, 7.5, 22, 37.2, 25.5, 25.8, 21.1, 28.4, 27.5, 23.1, 6.1, 23.4, 10.7, 20.8, 24.5, 10.6, 23.2, 18.1, 20.4, 23.2, 24.4, 21.3, 15.3, 17.2, 11.6, 18.8, 21.7, 29.5, 14.5, 22.2, 18.8, 21.9, 15.6, 16.7, 25, 21.8, 24.6, 18.6, 25.9, 26, 11.3, 27.1, 24.4, 26.8, 17.9, 19.3, 28.5, 24.6, 22, 31.7, 6.2, 24.5 ], [ 10.3, 8.1, 8.9, 10.1, 8.2, 9.6, 10.7, 8, 10.6, 10.3, 8.9, 9.7, 9.1, 19.7, 10.1, 5.7, 9.4, 7.5, 30.3, 11.5, 19.2, 9.1, 11, 7.9, 7.2, 9.1, 6.6, 9.4, 8.1, 11.9, 14.6, 7.5, 10.5, 5.6, 3.4, 24.6, 26.2, 6.9, 9.3, 9.1, 10, 11.2, 10.7, 6.1, 6.2, 11.3, 8.4, 9.1, 11.9, 8.2, 13.4, 10.7, 11.8, 18.4, 9.5 ], [ 26.8, 25.6, 28.6, 31.3, 57.6, 30.1, 24, 27.3, 27.3, 23.6, 25, 29.6, 22.3, 53.9, 27.3, 56.5, 23, 23.3, 34.4, 25.2, 21, 20.1, 23.8, 28.5, 29.7, 45.9, 17.7, 48.8, 26.8, 26, 25, 43, 24.6, 27.1, 26.7, 23, 21.6, 32.9, 43.9, 28, 25.8, 31.1, 22.1, 57.5, 27.4, 26.1, 27.5, 31.2, 35.2, 31.4, 27.9, 36, 23.7, 43.9, 23 ], [ 24.2, 30.8, 26.1, 25.2, 16.4, 28.9, 19.9, 27.2, 27.2, 29.5, 20.4, 24.1, 29.6, 15.9, 24.4, 21, 31.5, 27, 17.7, 26.9, 26.5, 29.8, 28.8, 29.3, 30.3, 19.7, 31.5, 18.7, 34.2, 26.8, 24.4, 21.4, 29.8, 29.5, 30.7, 23.1, 21.1, 22.9, 19, 27.6, 28.5, 22.8, 29.7, 17.3, 25.8, 27.4, 26.1, 27, 25.7, 25.1, 20.8, 25.4, 22.5, 18, 30.1 ], [ 13.5, 10.6, 8.4, 6.3, 10.3, 9.4, 8.2, 12, 9.1, 15.6, 17.2, 9.1, 15.8, 4.4, 14.8, 6, 15.3, 17.8, 7.1, 13.2, 15.2, 20.6, 13.1, 9.8, 11.5, 10, 27, 11.5, 12.1, 13.6, 6.5, 13.7, 13, 18.9, 17.3, 13.8, 14.4, 12.4, 6.1, 10.7, 17.1, 9, 11.4, 7.8, 13.5, 10.9, 11.2, 14.8, 8, 6.9, 13.3, 6, 10.4, 13.6, 12.9 ], [ 46.4, 48, 42.8, 45.5, 51.1, 44, 44.3, 43.7, 45.8, 49.2, 45.1, 41.3, 44.3, 50.5, 45.8, 50.1, 44.4, 46.4, 51.1, 46.1, 43.9, 49.7, 46.2, 46, 45.2, 54.1, 46.4, 48.9, 49.8, 47.6, 48.4, 49.3, 45.2, 48.5, 44.9, 45.9, 45.2, 49.4, 50, 47, 45.8, 47.7, 44.8, 50.9, 44.9, 43, 47.5, 44.5, 49.8, 50.5, 45.5, 49.6, 45.3, 48.8, 44.5 ], [ 53.6, 52, 57.2, 54.5, 48.9, 56, 55.7, 56.3, 54.2, 50.8, 54.9, 58.7, 55.7, 49.5, 54.2, 49.9, 55.6, 53.6, 48.9, 53.9, 56.1, 50.3, 53.8, 54, 54.8, 45.9, 53.6, 51.1, 50.2, 52.4, 51.6, 50.7, 54.8, 51.5, 55.1, 54.1, 54.8, 50.6, 50, 53, 54.2, 52.3, 55.2, 49.1, 55.1, 57, 52.5, 55.5, 50.2, 49.5, 54.5, 50.4, 54.7, 51.2, 55.5 ], [ 87.6, 78.5, 88.8, 37.7, 2.5, 76.3, 90.3, 70, 57.1, 94.9, 19.3, 80.5, 93.1, 32.3, 97.5, 5.6, 95.2, 61.8, 32.4, 90.4, 94.5, 6.9, 98.6, 63.7, 54.4, 12.4, 94.1, 13, 56.5, 90.5, 89.9, 10.9, 95.1, 18.3, 25.5, 16, 86.5, 15.1, 37.8, 85, 96.3, 79.4, 96.7, 2.5, 27.5, 94.5, 74.3, 76.4, 54.2, 71.8, 88.4, 58.5, 93.3, 30.3, 96.6 ], [ 9.2, 16.4, 9.3, 48.4, 90.1, 14.4, 5.1, 24.7, 34.8, 3.3, 72.9, 9.2, 3.3, 49.3, 1.1, 80.5, 2.9, 30.3, 48.6, 6.4, 2, 82.6, .5, 31.5, 41.4, 80.1, 3.9, 79.2, 36.2, 6.6, 5.2, 78.2, 2.3, 74.2, 65.8, 70.1, 8.9, 63.9, 54.1, 10.9, 1.8, 17.2, .8, 89.7, 55.2, 3.9, 17.4, 16.5, 39.6, 24.2, 8.1, 33.1, 3.7, 54.4, 2.9 ], [ .4, .8, .5, 1.4, 3.8, 4.7, 1, .9, 1, .1, 6.4, 1.8, .3, 12, 0, 4.6, .1, 2.1, 13.9, .2, .3, 7, .2, 1.1, .6, 1.5, .1, 4.8, 2.5, 1.2, .1, 7, .4, 2.1, 6.7, 7.8, 1, 1.9, .9, .3, .3, 1.4, .4, 3.4, 1.9, .4, 1.3, 2.3, 2.6, 2.2, 2.1, 4.8, 1.5, 8.6, 0 ], [ .1, 1, .3, 8.2, 1.9, 2.2, 1.1, .2, 4.2, .9, .9, 1.2, .5, 3.3, 1, 6.7, .2, 3.8, 1.4, .3, .3, .7, .3, .5, 2.3, 3.8, .5, .7, 2.2, 1.1, 4.1, 1.1, .9, 1.7, .8, 1.4, .5, 15.1, 4.2, 2.2, .6, .3, 1.3, 2.1, 12.6, .7, 2.5, 3.2, .2, .8, 1, 2.8, .3, 2.8, .2 ], [ 2.7, 3.2, 1.1, 4.3, 1.7, 2.3, 2.5, 4.2, 2.9, .8, .6, 7.2, 2.8, 3.1, .5, 2.5, 1.6, 2, 3.8, 2.6, 2.9, 2.9, .4, 3.2, 1.2, 2.2, 1.3, 2.3, 2.6, .5, .6, 2.9, 1.3, 3.7, 1.1, 4.7, 3.1, 3.9, 3, 1.6, 1, 1.6, .8, 2.3, 2.7, .6, 4.5, 1.7, 3.4, .9, .4, .8, 1.2, 3.8, .3 ], [ 1.6, 2.8, .7, 11.3, 4.9, 3.8, 4.7, 5.5, 10.3, 2.2, 2, 2, 0, 5.5, 1.3, 13.9, 1.4, 5.7, 5.2, 2.3, .4, 2.9, 1.5, 1.5, 3.3, 17.1, .7, 4.7, 2.4, 1.8, 7, 4.5, 2, 6.6, 3.5, 3.6, 2.7, 31.9, 15.5, 1.9, .9, 1.8, .4, 5, 21.9, 2.7, 6.2, 1.3, 2.4, 5.6, 1.2, 8.7, .5, 5.8, 1.9 ], [ 76.8, 61, 73.2, 69.1, 15.1, 61.5, 83.1, 66.8, 61.2, 83.1, 16.4, 70.8, 87.6, 67.4, 78.3, 52.6, 80.1, 47.5, 55.1, 76.3, 89.6, 17.9, 81.6, 51.9, 47.3, 33.8, 62.2, 35.9, 43.8, 69.7, 76.8, 32.1, 89.5, 43.9, 21.7, 11.2, 60.9, 62.5, 58.6, 76.8, 71.5, 91.1, 86.8, 14.3, 55.1, 79.3, 75.4, 63.3, 68.7, 75.2, 94.3, 90.9, 93.5, 47.6, 86.6 ], [ 11.2, 11.1, 13.9, 21, 5, 12.5, 13.2, 13.7, 14.4, 10, 7.4, 7.2, 14.5, 8.2, 16.6, 9.6, 9.9, 15.5, 8.2, 11.6, 12.2, 3.2, 13.4, 7.3, 10.6, 16.2, 9.8, 4.9, 10.8, 10.7, 15.5, 7, 13.9, 14.8, 5.2, 4.9, 8.5, 25.8, 16.6, 10.7, 13.7, 15.3, 15.5, 7.3, 18.9, 16.8, 18.5, 14.7, 11, 14.2, 13.2, 14.2, 11.7, 8.7, 12.2 ], [ 3.2, 4.6, 6.8, 2.5, 0, 6.1, 2.7, 6.1, 8.8, 3.4, 5.5, 4.8, 2, 5, 7.5, .8, 0, 3.7, 1.3, 7.3, 4, .5, 3.2, .2, 3.7, 14, 3, 3.8, 3.3, 3.6, 6, 1.3, 2, 2.4, 3.6, .7, 2, 18.6, 9.7, 1.6, 10.1, 6, 1.5, 3.2, 14.4, 4.2, 5.7, 3.8, 8.9, 3.2, 2.8, 1.7, 3.1, 4.7, .6 ], [ 1.1, 1.1, 1.5, 5.3, 2.8, 7.6, 2.4, 2.7, 5.7, 1.6, 3.5, 1.3, 1.2, 3.9, .4, 6.6, .6, 6.9, 4.9, 1.6, .7, 3.1, .7, 1.9, 1.8, 10.7, .8, 2.3, 3, 1.8, 3.5, 3.1, .4, 3.7, 2, 5.1, 1.3, 25.9, 10.8, 1.4, .7, 2.5, 1.3, 1.4, 9, 2.3, 4.4, 2.1, 2.5, 5, .8, 3.2, 1.6, 3.7, .5 ], [ 70.9, 74.7, 72, 69.7, 78.4, 72.4, 69.5, 75.3, 70.9, 66.9, 87.1, 73.2, 73.4, 67.5, 71.8, 78.7, 74, 79.2, 74.1, 73.3, 70.4, 83.9, 70.6, 73.8, 75.7, 74.5, 76.1, 79.2, 76.5, 75.9, 68.9, 76.5, 69, 73.6, 81.5, 84, 75.6, 73, 72.4, 71.6, 68.2, 68.4, 70, 76.7, 72.7, 70.1, 68, 72, 70.1, 73.8, 70.4, 72.1, 68.2, 76.4, 67.9 ], [ 113, 92.7, 112.3, 125.1, 78.9, 107.7, 124.6, 91.1, 132.2, 134.9, 44.9, 105.2, 101.7, 151, 113, 74.1, 94.4, 70.2, 96.6, 105.2, 116.2, 54.5, 115.5, 98.8, 94, 94.5, 89.9, 75.9, 85.4, 87, 130, 88.2, 125.3, 102.7, 65.8, 52.1, 87.7, 105.9, 106.4, 109.7, 128.2, 131.4, 116, 90.7, 105.3, 119.1, 128.7, 112.8, 121.6, 99.1, 115.3, 105.1, 131.6, 84.6, 129.1 ], [ 10.6, 8.4, 10.1, 9, 3.2, 12.2, 18.8, 9, 8.6, 14.8, 5.4, 13.2, 6.4, 8.4, 9.8, 5.7, 10.6, 9.7, 11.4, 5.7, 5.2, 3.6, 11.3, 13.4, 2.6, 10.3, 5.9, 3.3, 4.2, 14.2, 12.1, 6.9, 13, 8.2, 0, 1.5, 14.1, 10.3, 10.9, 9.9, 20, 15.4, 10.1, 1.5, 8.9, 15.5, 13.9, 12, 4.6, 3.5, 12.6, 16.7, 10, 9.7, 16.2 ], [ 3.1, 2.3, 4.4, 3.9, 2.7, 2.9, 4.6, 3.1, 5.6, 9.1, 11.4, 2.9, 2.5, 6.5, 2, 5.1, 5.3, 4.8, 5.4, 5.1, 4.5, 3, 3.8, 2, 2.1, 5.8, 2.9, 5.9, 3.4, 1.8, 8.2, 4.9, 6.9, 1.8, 5.4, 4.7, 2.3, 4.8, 6.3, 7, 4.9, 6.3, 3.9, 3.4, 4.2, 7.5, 7.9, 6.2, 3.3, 2.5, 7.6, 7.7, 6.6, 4.5, 4.9 ], [ 43.8, 28.5, 39.2, 37.5, 10.1, 29.6, 44.4, 24.2, 28.9, 59.6, 9.7, 20.5, 33.9, 43.1, 44.2, 12.4, 43.1, 26.5, 39, 44.9, 52.2, 4.3, 53.6, 21.2, 19.1, 17.9, 28.7, 14.2, 25.1, 23.9, 52.7, 17.9, 62.6, 44, 11.6, 6.8, 23.8, 26.5, 29.1, 60, 47.4, 69.6, 69.1, 7.8, 21.7, 63.8, 67.3, 45.9, 48.3, 35.7, 96, 94.3, 71, 27, 76.5 ], [ 8.9, 3, 9.9, 1.3, .7, 2.8, 0, 1.2, .6, 48.7, 1.5, 0, 10.7, .8, 5.9, 1.1, 20.5, 2.5, 6.3, 10.1, 17.9, 1.5, 21.5, 3.1, .9, 4.4, 8.1, .9, 3.4, .6, 81.6, 3.3, 36.1, 1.8, 0, 1.5, 1.4, 11.6, 21.7, 21.9, 12.8, 5.5, 34.1, 0, 1.2, 16.7, 36.6, 6.1, 6.2, 3.2, 13.5, 2.2, 16.2, 1, 57.2 ], [ 764.2, 415.6, 882.6, 649.5, 169.4, 400.9, 76.3, 243.8, 58.4, 977.6, 26.2, 5.3, 216.9, 73.5, 727, 131.3, 134.4, 138.6, 156.3, 574.5, 822, 23.5, 903.8, 316.8, 354.9, 315.9, 92.9, 190.3, 467.2, 308, 915.4, 202.7, 1360.5, 747.5, 28.4, 111.2, 421.2, 1120.4, 646.6, 423.5, 412.2, 155.5, 759.5, 167.4, 730, 670.9, 518.4, 402.1, 347.6, 843.3, 155.6, 160.5, 317.6, 134.3, 716.1 ], [ 35958, 52623, 38906, 35862, 91736, 39306, 22659, 44253, 34034, 25738, 54868, 32768, 36870, 44819, 36648, 77433, 37161, 39694, 30845, 36531, 38655, 104482, 30865, 63986, 54086, 71660, 39468, 88854, 66196, 47992, 27454, 58210, 34523, 38210, 76263, 81451, 58266, 40431, 56652, 33264, 32410, 17228, 24374, 88487, 32102, 26015, 24946, 32652, 48175, 41368, 14105, 36579, 15950, 38867, 23277 ], [ 20, 12.8, 16.2, 21.5, 3.2, 10.7, 15.9, 12.8, 19.6, 17.4, 6.5, 4.8, 21.9, 5.5, 18.4, 5.2, 9.9, 16.2, 10.5, 16.1, 19, 2.3, 17.6, 7.8, 9.1, 5.4, 12.9, 5.4, 11, 13.6, 26.4, 6.9, 26.1, 13.1, 4.5, 6, 13.1, 8.1, 8.1, 17.6, 17.1, 17.9, 20.7, 6, 17.1, 23.6, 20.4, 14.7, 16.4, 18.2, 20.7, 18.1, 22.3, 6.4, 24.7 ], [ 35.1, 15.5, 29.1, 39.5, 2.6, 23.7, 57.2, 12.8, 29.6, 30.2, 10.5, 22.5, 31.6, 10.6, 28.1, 10.4, 39, 23.9, 36.3, 30.5, 28.4, 4.9, 35.8, 13.7, 14.1, 15.2, 35.1, 17, 12.5, 18.7, 45.2, 10.1, 40.5, 13.3, 9.6, 4.4, 11.7, 21.5, 38.5, 40.4, 28.4, 63.3, 50.3, 5.6, 43.6, 46.4, 45.9, 23, 33.6, 35, 60, 50.8, 60.1, 7.1, 33.8 ], [ 56.9, 42.3, 54.7, 70.5, 18.7, 51.7, 60.3, 37.3, 55.9, 63.3, 27.2, 39.9, 55.6, 21, 56.8, 19.7, 49.6, 46.2, 29.1, 52.2, 57.9, 6.9, 60.6, 45.5, 41.6, 37.3, 50.8, 20.3, 39.9, 45.3, 72, 32.3, 70.2, 68.5, 16.4, 13, 44.9, 66.8, 40.9, 46.2, 66.2, 62.8, 69.8, 22.2, 61, 69, 65.6, 50.1, 41.5, 64.1, 68.1, 50, 60.3, 23.2, 66.7 ], [ 11, 24.6, 17.4, 6.6, 67.4, 16, 11.3, 36.7, 15.4, 7.7, 55.2, 25.2, 13.7, 63.1, 8.3, 68.2, 18.1, 25.2, 51.2, 16, 14.2, 80.4, 9.4, 28.9, 25.5, 47.4, 19.5, 67, 34.1, 22.2, 6.3, 52.4, 8.2, 9.7, 68.3, 74.5, 24.3, 16.7, 41.7, 27.3, 8.6, 18.6, 5.5, 63.4, 12.5, 9.2, 8.6, 22.7, 34.7, 8.6, 15, 34.3, 16.1, 60.6, 8.2 ], [ 37.5, 53.2, 44.3, 19.8, 39.5, 33, 31.1, 44.4, 32.9, 11.8, 52.7, 82.6, 33, 8.4, 60.7, 7.3, 58.5, 31.3, 25.9, 34, 31.8, 63.6, 31.7, 36.6, 32, 3.1, 52, 15.8, 42.9, 44.6, 13.7, 38.2, 12.6, 28.1, 73.6, 53.9, 32.2, 14.4, 12.1, 74.7, 26, 14.9, 18.4, 9, 6.2, 33.7, 15.7, 21.3, 24.6, 25.2, 10.5, 9.2, 17.9, 15.4, 16.1 ], [ 19.5, 18, 18.7, 29.1, 26.5, 21.6, 21.2, 21.2, 23.1, 28.6, 18.9, 8.2, 23.3, 30.7, 15, 28, 16.3, 28.4, 29.4, 22.3, 25.7, 16.7, 24.3, 20.8, 19.6, 35.3, 20.7, 31.7, 17.5, 20.7, 28.4, 25.8, 31, 26.4, 14.3, 18.7, 20.8, 36.1, 28.4, 18.5, 29.9, 30.3, 28.3, 37.8, 45.8, 24.9, 30.3, 29.4, 33.3, 28.8, 32.7, 32.7, 32, 37.9, 27.7 ], [ 11.8, 0, 1.1, 80.9, 3.8, .4, 18.4, 0, 35.6, 14.5, 0, 0, 2.5, .7, 0, 1.2, 0, 8.9, .8, 0, 11.1, 0, 12.7, 0, 0, 9.1, 14.6, 19.4, 0, 0, 6.1, 35.1, 10.9, 50, 3.2, 0, 0, 68.7, 0, .6, 0, 1.4, 5.5, 74.5, 82.4, 6, 25, 12.4, 60.5, 50.9, 14.9, 11.3, 0, 4.7, 3.3 ], [ 872.3, 384.9, 157.9, 1013.2, 140.7, 235.6, 135.9, 308.1, 521.6, 1605, 103, 1051.6, 338.9, 681.6, 485.3, 236.4, 496.4, 477.2, 396.3, 700.9, 555.9, 396.1, 816.7, 280.9, 312, 277.9, 434.1, 364.9, 355.7, 145.2, 684.3, 559.6, 790.4, 1238.9, 755.7, 293.4, 107.9, 1138.1, 209.5, 466.9, 535.9, 2021, 1589.3, 684.7, 1561.7, 1172.6, 1249.3, 492.9, 847.6, 1235.8, 1732.6, 968.8, 1608.1, 306.4, 3391.1 ], [ 469.6, 75.9, 276.8, 422.6, 30.2, 99.3, 147.8, 98.3, 15.3, 2649.3, 7.1, 39.3, 224.1, 181, 276.4, 63, 351.8, 71.7, 213.9, 358.9, 1039.8, 5.4, 1468.2, 86.6, 61.1, 146.9, 196.7, 36.2, 183.6, 44.1, 1794.4, 50.6, 1866.7, 184.4, 11.7, 25.6, 53.9, 144.5, 306.8, 817.9, 1097.3, 716.8, 2560.4, 43.6, 105.6, 1374.5, 2477.9, 335.7, 618.6, 464.7, 692.1, 107.6, 1136.1, 85, 2747.1 ], [ 34.9, .1, 9.2, 2.8, 0, 6.7, 44.8, 0, .8, 47.9, 0, 46.3, .1, 21.7, 17.1, .2, 41.9, 8.4, 13.2, 36.2, 13.7, 0, 53.8, 0, 0, 0, 0, 0, .1, 0, 40, .1, 23.9, 0, .1, .4, 0, 3.3, 2.2, 28.9, 42.6, 56.5, 59.4, 0, 3.2, 70.2, 37.7, 60.6, 3.2, 0, 56.6, 34.5, 26.3, 9.6, 44.3 ], [ 246, 124.1, 233.2, 340.1, 71.9, 170, 187.6, 130.8, 172.3, 252.2, 46.8, 101.2, 199.3, 111.7, 215.7, 91, 228.2, 93.4, 78.1, 218.5, 245.2, 38.2, 335.1, 134.1, 134.7, 128.2, 157.2, 52, 177, 125.9, 425.2, 149.6, 314.4, 245.6, 81.1, 61.8, 151.8, 330.8, 247.7, 138.8, 239.7, 164.7, 225.5, 128.7, 350.7, 223.6, 367.4, 146.2, 294.8, 295.8, 105.5, 134.5, 173.5, 64.9, 301.9 ], [ 8.5, 4.1, 6.1, 10.4, 0, 4.2, 8, 2.1, 2.7, 20.3, 0, 4.9, 4.6, 8.4, 8.6, .9, 6.1, 4.7, 4.6, 7.5, 14.6, 0, 13.6, 1.7, 2.9, 3.6, 3.9, .3, 3.1, 3.4, 20.6, .2, 15.6, 1.5, 0, 1.1, 4.1, 3.3, 4.9, 7.4, 12.4, 14.2, 18.5, 0, 3.5, 11, 21.8, 8.5, 9.4, 9.3, 13, 5.9, 15.5, 4, 16.9 ], [ 5.3, 2.6, 4.2, 4.1, 0, 3.5, 3.4, 1.8, 1.5, 7.9, .3, 2.9, 4.9, 5.9, 4.8, 1.1, 6.1, 2.7, 3.4, 4.3, 7.3, 0, 7, 1.7, 1.4, 1.9, 2.8, 1.2, 1.3, 1.8, 7.7, .6, 11.2, 1.1, 0, .2, 1.9, 2.6, 2.3, 7.9, 7.4, 7.1, 8.9, 0, 2.2, 6, 8.2, 5.7, 5.5, 5.3, 6.8, 1.8, 7.7, 1.3, 10.5 ], [ 38.5, 39.7, 42.3, 17.8, 0, 37.7, 40.8, 23.9, 13, 107, 4.1, 0, 70.7, 10.9, 29.1, 0, 43.2, 8.6, 11.6, 21.7, 46.7, 0, 55.9, 38.7, 18.1, 11.1, 24.6, 6.8, 25.9, 31.2, 33.6, 10.3, 56, 15.5, 0, 2.7, 19.7, 13.9, 36.6, 18, 56.8, 21.8, 68.4, 0, 9.5, 48.9, 52.9, 49.3, 33.7, 27.9, 26.8, 32.8, 61, 14, 20.3 ] ];
        var currData = [];
        for (var i = 0; i < data.length; i++) {
            currData.push(data[i][9]);
        }
        var population = 84;
        var screenWidth = $(window).innerWidth();
        if (screenWidth > 600) {
            screenWidth = 600;
        }
        var dataWidth = screenWidth / 2;
        var cubeWidth = dataWidth / 10;
        var cubePadding = cubeWidth / 10;
        var dataHeight = 10 * cubeWidth;
        var textWrap = d3.select(".text");
        var dataWrap = d3.select(".data").append("div").attr("class", "data__viz");
        var dataLegend = dataWrap.append("div").attr("class", "data__viz__legend");
        var cubesSVG = dataWrap.append("svg").style("width", dataWidth).style("height", dataHeight);
        var dataLegendSVG, dataLegendSVGAvg;
        var toSlide;
        var accent;
        var darkgray = "#444444";
        var white = "#fffcf5";
        var lightgreen = "#C8E6C9";
        var orange = "#FF9800";
        var gray = "#A9A9A9";
        var oViolet = "#7950f2";
        var oTeal = "#12b886";
        var oCyan = "#15aabf";
        var darkgreen = "#388E3C";
        var oGrape = "#ae3ec9";
        var oIndigo = "#4c6ef5";
        var oRed = "#e03131";
        var oPink = "#e64980";
        var iconMan = [ 3, 4, 5, 6, 13, 14, 15, 16, 23, 24, 25, 26, 33, 34, 35, 36, 44, 45, 52, 53, 54, 55, 56, 57, 63, 64, 65, 66, 73, 74, 75, 76, 83, 84, 85, 86, 93, 96 ];
        var iconDollar = [ 13, 16, 23, 24, 25, 26, 32, 37, 42, 53, 54, 55, 56, 67, 72, 77, 83, 84, 85, 86, 93, 96 ];
        var iconHouse = [ 26, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 61, 62, 63, 64, 65, 66, 67, 68, 71, 72, 73, 74, 75, 76, 77, 78, 81, 82, 84, 85, 86, 87, 88, 91, 92, 94, 95, 96, 97, 98 ];
        var iconGrade = [ 31, 32, 40, 43, 47, 50, 53, 57, 60, 61, 62, 63, 65, 66, 67, 68, 69, 70, 73, 77, 80, 83, 87, 90, 93 ];
        var icon911 = [ 51, 52, 53, 56, 59, 61, 63, 65, 66, 68, 69, 71, 72, 73, 76, 79, 83, 86, 89, 91, 92, 96, 99 ];
        var iconHealth = [ 24, 25, 34, 35, 42, 43, 44, 45, 46, 47, 52, 53, 54, 55, 56, 57, 64, 65, 74, 75 ];
        var loop = false;
        var shapeArray = [ iconMan, iconDollar, iconHouse, iconGrade, icon911, iconHealth ];
        var colorArray = [ oCyan, darkgreen, oGrape, oIndigo, oRed, oPink ];
        var iconNum = 0;
        var numIcons = shapeArray.length;
        $(".slideBtn").on("click", function() {
            toSlide = $(this).data("toslide");
            switch (toSlide) {
              case -1:
                toSlide = 0;
                break;

              case 0:
                accent = oCyan;
                cubesSVG.selectAll("rect").remove();
                dataLegend.selectAll("svg").remove();
                $(".headline").addClass("active");
                d3.select(".headline").selectAll("p").transition().duration(200).style("opacity", 0).remove();
                d3.select(".headline").selectAll("span").transition().duration(200).style("opacity", 0).style("color", accent).text("Demographics");
                d3.select(".headline").selectAll("span").transition().duration(200).delay(200).style("opacity", 1);
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").text("8,413").style("color", accent).attr("class", "text__header");
                    textWrap.append("p").text("people live in Clifton-Berea").attr("class", "text__list");
                    $(".text").fadeIn();
                });
                for (var i = 0; i < 110; i++) {
                    if (i < 100) {
                        cubesSVG.append("rect").attr("fill", gray).style("width", cubeWidth - cubePadding).style("height", cubeWidth - cubePadding).attr("class", "cube").attr("fill", gray).attr("visibility", "hidden").attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else {
                        cubesSVG.append("rect").attr("fill", gray).style("width", cubeWidth - cubePadding).style("height", cubeWidth - cubePadding).attr("class", "cube").attr("fill", gray).attr("visibility", "hidden").attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    }
                }
                dataLegendSVG = dataLegend.append("svg").style("width", dataWidth).style("height", cubeWidth);
                dataLegendSVG.append("rect").style("opacity", 0).style("width", cubeWidth - cubePadding).style("height", cubeWidth - cubePadding).attr("fill", accent);
                dataLegendSVG.append("text").text("= 1 percent").style("opacity", 0).attr("alignment-baseline", "central").attr("dy", ".5em").attr("transform", "translate(" + cubeWidth + ",0)");
                dataLegendSVGAvg = dataLegend.append("svg").style("width", dataWidth).style("height", cubeWidth);
                dataLegendSVGAvg.append("rect").style("opacity", 0).style("width", cubeWidth - cubePadding).style("height", cubeWidth - cubePadding).attr("fill", gray).attr("stroke", darkgray).attr("class", "cube");
                dataLegendSVGAvg.append("text").text("= city overall").style("opacity", 0).attr("alignment-baseline", "central").attr("dy", ".5em").attr("transform", "translate(" + cubeWidth + ",0)");
                updateColors();
                iconShape(accent, iconMan);
                break;

              case 1:
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('<span style="color:' + accent + ';">95 percent</span> of the neighborhood\'s residents are <span style="color:' + accent + ';">black</span>.').attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">63 percent</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                cubesSVG.selectAll("rect").each(function(d, i) {
                    if (i < 63) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", accent).attr("stroke", darkgray).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 95) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", accent).attr("stroke", white).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 100) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", gray).attr("stroke", white).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    }
                });
                fadeInLegend();
                break;

              case 2:
                accent = oCyan;
                updateColors();
                updateHeadline("Demographics", false);
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('<span style="color:' + accent + ';">83 percent</span> of the neighborhood\'s children live in <span style="color:' + accent + ';">single-parent households</span>.').attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">65 percent</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                cubesSVG.selectAll("rect").each(function(d, i) {
                    if (i < 65) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", accent).attr("stroke", darkgray).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 83) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", accent).attr("stroke", white).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 100) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", gray).attr("stroke", white).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    }
                });
                fadeInLegend();
                break;

              case 3:
                accent = darkgreen;
                updateColors();
                updateHeadline("Socioeconomic", true);
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('Clifton-Berea has the 8th lowest <span style="color:' + accent + ';">median household income</span> in Baltimore at <span style="color:' + accent + ';">$25,738</span>.').attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">$47,819</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                iconShape(accent, iconDollar);
                break;

              case 4:
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('<span style="color:' + accent + ';">45 percent</span> of residents make <span style="color:' + accent + ';">under $25,000</span>.').attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">32 percent</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                cubesSVG.selectAll("rect").each(function(d, i) {
                    if (i < 32) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", accent).attr("stroke", darkgray).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 45) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", accent).attr("stroke", white).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 100) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", gray).attr("stroke", white).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    }
                });
                fadeInLegend();
                break;

              case 5:
                accent = darkgreen;
                updateColors();
                updateHeadline("Socioeconomic", false);
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('<span style="color:' + accent + ';">17 percent</span> of residents 16 or older are <span style="color:' + accent + ';">unemployed</span>.').attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">13 percent</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                cubesSVG.selectAll("rect").each(function(d, i) {
                    if (i < 13) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", accent).attr("stroke", darkgray).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 17) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", accent).attr("stroke", white).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 100) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", gray).attr("stroke", white).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    }
                });
                break;

              case 6:
                accent = oGrape;
                updateColors();
                updateHeadline("Built environment", true);
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('The neigborhood consists of <span style="color:' + accent + ';">12 percent green space</span>.').attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">33 percent</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                cubesSVG.selectAll("rect").each(function(d, i) {
                    if (i < 12) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", accent).attr("stroke", darkgray).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 33) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", gray).attr("stroke", darkgray).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 100) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", gray).attr("stroke", white).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    }
                });
                fadeInLegend();
                break;

              case 7:
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('It has one of the highest rates of <span style="color:' + accent + ';">rat complaints</span> at <span style="color:' + accent + ';">978 calls per 10,000 households</span>.').attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">409 per 10,000 households</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                iconShape(accent, iconHouse);
                break;

              case 8:
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('It has the third highest rate of <span style="color:' + accent + ';">lead paint violations</span> at <span style="color:' + accent + ';">49 per 10,000 households</span>.').attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">10 per 10,000 households</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                iconShape(accent, iconHouse);
                break;

              case 9:
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('It also has the second highest density of <span style="color:' + accent + ';">vacant buildings</span> at <span style="color:' + accent + ';">2,649 per 10,000 housing units</span>.').attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">562 per 10,000 housing units</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                iconShape(accent, iconHouse);
                break;

              case 10:
                accent = oGrape;
                updateColors();
                updateHeadline("Educational environment", false);
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('<span style="color:' + accent + ';">48 percent</span> of the neighborhood is covered by a food desert.').attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">13 percent</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                cubesSVG.selectAll("rect").each(function(d, i) {
                    if (i < 13) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", accent).attr("stroke", darkgray).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 48) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", accent).attr("stroke", white).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 100) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", gray).attr("stroke", white).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    }
                });
                fadeInLegend();
                break;

              case 11:
                accent = oIndigo;
                updateColors();
                updateHeadline("Educational environment", true);
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('Clifton-Berea has the lowest percentage of third-graders rated <span style="color:' + accent + ';">"proficient" or better in reading</span> at <span style="color:' + accent + ';">35 percent</span>.').attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">56 percent</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                cubesSVG.selectAll("rect").each(function(d, i) {
                    if (i < 35) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", accent).attr("stroke", darkgray).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 56) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", gray).attr("stroke", darkgray).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 100) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", gray).attr("stroke", white).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    }
                });
                break;

              case 12:
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('<span style="color:' + accent + ';">47 percent</span> of neighborhood high school students <span style="color:' + accent + ';">missed 20 or more days of school</span>.').attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">39 percent</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                cubesSVG.selectAll("rect").each(function(d, i) {
                    if (i < 39) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", accent).attr("stroke", darkgray).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 47) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", accent).attr("stroke", white).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 100) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", gray).attr("stroke", white).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    }
                });
                break;

              case 13:
                accent = oIndigo;
                updateColors();
                updateHeadline("Educational environment", false);
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('<span style="color:' + accent + ';">8 percent</span> of neighborhood adults have a <span style="color:' + accent + ";\">bachelor's degree or more</span>, the fourth lowest rate among neighborhoods.").attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">29 percent</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                cubesSVG.selectAll("rect").each(function(d, i) {
                    if (i < 8) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", accent).attr("stroke", darkgray).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 29) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", gray).attr("stroke", darkgray).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else if (i < 100) {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).attr("fill", gray).attr("stroke", white).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    }
                });
                fadeInLegend();
                break;

              case 14:
                accent = oRed;
                updateColors();
                updateHeadline("Safety", true);
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('Clifton-Berea has the third highest rate of <span style="color:' + accent + ';">non-fatal shootings</span> at <span style="color:' + accent + ';">20 shootings per 10,000 residents</span>.').attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">7 per 10,000 residents</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                iconShape(accent, icon911);
                break;

              case 15:
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('It has the fifth highest rate of <span style="color:' + accent + ';">homicides</span> at <span style="color:' + accent + ';">8 killings per 10,000 residents</span>.').attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">4 per 10,000 residents</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                iconShape(accent, icon911);
                break;

              case 16:
                accent = oRed;
                updateColors();
                updateHeadline("Safety", false);
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('The <span style="color:' + accent + ';">youth homicide rate</span> is the highest in the city at <span style="color:' + accent + ';">107 killings per 100,000 youth</span> (25 or younger).').attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">31 per 100,000 residents</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                iconShape(accent, icon911);
                break;

              case 17:
                accent = oPink;
                updateColors();
                updateHeadline("Health", true);
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html("These factors contribute to the neighborhood's <span style=\"color:" + accent + ';">life expectancy rate</span> of <span style="color:' + accent + ';">66.9 years</span>, the lowest in the city.').attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">73.6 years</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                iconShape(accent, iconHealth);
                break;

              case 18:
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").text("Top causes of death").style("color", accent).attr("class", "text__header");
                    textWrap.append("p").html('Heart disease: <span style="color:' + oRed + ';">21.6%</span>').attr("class", "text__list");
                    textWrap.append("p").html('Cancer: <span style="color:' + oPink + ';">19.4%</span>').attr("class", "text__list");
                    textWrap.append("p").html('Homicide: <span style="color:' + oGrape + ';">5.9%</span>').attr("class", "text__list");
                    textWrap.append("p").html('Stroke: <span style="color:' + oViolet + ';">5.7%</span>').attr("class", "text__list");
                    textWrap.append("p").html('Drug and alcohol: <span style="color:' + oIndigo + ';">5.6%</span>').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                cubesSVG.selectAll("rect").each(function(d, i) {
                    d3.select(this).attr("stroke", white).attr("transform", "translate(0,0)");
                    if (i < 21) {
                        d3.select(this).transition().duration(150).delay(20 * i).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")").attr("fill", oRed);
                    } else if (i == 21) {
                        d3.select(this).transition().duration(150).delay(20 * i).style("width", Math.floor(cubeWidth * .6)).attr("fill", oRed).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                        newRow = 8;
                    } else if (i < 41) {
                        d3.select(this).transition().duration(150).delay(20 * i).attr("fill", oPink).attr("transform", "translate(" + (i + newRow) % 10 * cubeWidth + "," + Math.floor((i + newRow) / 10) * cubeWidth + ")");
                    } else if (i == 41) {
                        d3.select(this).transition().duration(150).delay(20 * i).style("width", Math.floor(cubeWidth * .4)).attr("fill", oPink).attr("transform", "translate(" + (i + newRow) % 10 * cubeWidth + "," + Math.floor((i + newRow) / 10) * cubeWidth + ")");
                        newRow = newRow;
                    } else if (i < 46) {
                        d3.select(this).transition().duration(150).delay(20 * i).attr("fill", oGrape).attr("transform", "translate(" + (i + newRow) % 10 * cubeWidth + "," + Math.floor((i + newRow) / 10) * cubeWidth + ")");
                    } else if (i == 46) {
                        d3.select(this).transition().duration(150).delay(20 * i).style("width", Math.floor(cubeWidth * .9)).attr("fill", oGrape).attr("transform", "translate(" + (i + newRow) % 10 * cubeWidth + "," + Math.floor((i + newRow) / 10) * cubeWidth + ")");
                        newRow = newRow + 5;
                    } else if (i < 51) {
                        d3.select(this).transition().duration(150).delay(20 * i).attr("fill", oViolet).attr("transform", "translate(" + (i + newRow) % 10 * cubeWidth + "," + Math.floor((i + newRow) / 10) * cubeWidth + ")");
                    } else if (i == 51) {
                        d3.select(this).transition().duration(150).delay(20 * i).style("width", Math.floor(cubeWidth * .7)).attr("fill", oViolet).attr("transform", "translate(" + (i + newRow) % 10 * cubeWidth + "," + Math.floor((i + newRow) / 10) * cubeWidth + ")");
                        newRow = newRow + 5;
                    } else if (i < 56) {
                        d3.select(this).transition().duration(150).delay(20 * i).attr("fill", oIndigo).attr("transform", "translate(" + (i + newRow) % 10 * cubeWidth + "," + Math.floor((i + newRow) / 10) * cubeWidth + ")");
                    } else if (i == 56) {
                        d3.select(this).transition().duration(150).delay(20 * i).style("width", Math.floor(cubeWidth * .6)).attr("fill", oIndigo).attr("transform", "translate(" + (i + newRow) % 10 * cubeWidth + "," + Math.floor((i + newRow) / 10) * cubeWidth + ")");
                        newRow = newRow + 5;
                    } else {
                        d3.select(this).transition().duration(150).attr("visibility", "hidden").attr("transform", "translate(" + (i + newRow) % 10 * cubeWidth + "," + Math.floor((i + newRow) / 10) * cubeWidth + ")");
                    }
                });
                fadeInLegend();
                break;

              case 19:
                updateHeadline("Health", false);
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('<span style="color:' + accent + ';">42 percent</span> of live births are to <span style="color:' + accent + ';">mothers with BMI over 30</span>, the highest rate in Baltimore.').attr("class", "text__list");
                    textWrap.append("p").html('City overall: <span style="color:' + accent + ';">10 percent</span> ').attr("class", "text__list");
                    $(".text").fadeIn();
                });
                if (loop) {
                    setTimeout(function() {
                        slideTimeout00();
                    }, 1700);
                } else {
                    slideTimeout00();
                }
                loop = false;
                function slideTimeout00() {
                    cubesSVG.selectAll("rect").each(function(d, i) {
                        if (i < 10) {
                            d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).style("width", cubeWidth - cubePadding).style("height", cubeWidth - cubePadding).attr("fill", accent).attr("stroke", darkgray).attr("visibility", "visible").attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                        } else if (i < 42) {
                            d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).style("width", cubeWidth - cubePadding).style("height", cubeWidth - cubePadding).attr("fill", accent).attr("stroke", white).attr("visibility", "visible").attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                        } else if (i < 100) {
                            d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).style("width", cubeWidth - cubePadding).style("height", cubeWidth - cubePadding).attr("fill", gray).attr("stroke", white).attr("visibility", "visible").attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                        }
                    });
                    fadeInLegend();
                }
                break;

              default:
                toSlide = 20;
                loop = true;
                iconNum = 0;
                iconShape(colorArray[iconNum], shapeArray[iconNum++]);
                shapeLooper();
                d3.select(".headline").selectAll("span").transition().duration(200).style("opacity", 0);
                $(".text").fadeOut(function() {
                    textWrap.selectAll("p").remove();
                    textWrap.append("p").html('<a href="" target="_blank">Read more about Clifton-Berea</a>').attr("class", "text__stat");
                    textWrap.append("p").html('<a href="http://data.baltimoresun.com/news/neighborhood-health/" target="_blank">Explore more neighborhood data</a>').attr("class", "text__stat");
                    textWrap.append("p").append("hr");
                    textWrap.append("p").html("Visualization by Jin Bae Kim, " + '<a href="http://www.baltimoresun.com/data">The Baltimore Sun Data Desk</a>').attr("class", "text__stat");
                    textWrap.append("p").html("Data from " + '<a href="http://health.baltimorecity.gov/neighborhoods/neighborhood-health-profile-reports">Baltimore City Health Department’s 2017 Neighborhood Health Profiles</a>').attr("class", "text__stat");
                    $(".text").fadeIn();
                });
                break;
            }
            $(".icon-left-open").data("toslide", toSlide - 1);
            $(".icon-right-open").data("toslide", toSlide + 1);
            function updateHeadline(headline, fade) {
                if (fade) {
                    d3.select(".headline").selectAll("span").transition().duration(200).style("opacity", 0);
                    d3.select(".headline").selectAll("span").transition().duration(200).text(headline).style("color", accent).style("opacity", 1);
                } else {
                    d3.select(".headline").selectAll("span").transition().duration(200).style("color", accent).text(headline);
                }
            }
            function updateColors() {
                $(".slideBtn").css("color", accent);
                dataLegendSVG.select("rect").transition().duration(1e3).style("fill", accent);
            }
            function fadeInLegend() {
                dataLegendSVG.select("rect").transition().duration(1e3).style("opacity", 1).style("fill", accent);
                dataLegendSVG.select("text").transition().duration(1e3).style("opacity", 1);
                dataLegendSVGAvg.select("rect").transition().duration(1e3).style("opacity", 1);
                dataLegendSVGAvg.select("text").transition().duration(1e3).style("opacity", 1);
            }
            function iconShape(color, array) {
                var shapeCounter = 0;
                cubesSVG.selectAll("rect").each(function(d, i) {
                    if (array[shapeCounter] == i) {
                        shapeCounter++;
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).style("width", cubeWidth - cubePadding).style("height", cubeWidth - cubePadding).attr("visibility", "visible").attr("fill", color).attr("stroke", "none").attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    } else {
                        d3.select(this).attr("stroke", "none").transition().duration(150).delay(20 * i).style("width", cubeWidth - cubePadding).style("height", cubeWidth - cubePadding).attr("visibility", "visible").attr("fill", gray).attr("stroke", white).attr("transform", "translate(" + i % 10 * cubeWidth + "," + Math.floor(i / 10) * cubeWidth + ")");
                    }
                });
                dataLegendSVG.select("rect").transition().duration(1e3).style("opacity", 0);
                dataLegendSVG.select("text").transition().duration(1e3).style("opacity", 0);
                dataLegendSVGAvg.select("rect").transition().duration(1e3).style("opacity", 0);
                dataLegendSVGAvg.select("text").transition().duration(1e3).style("opacity", 0);
            }
            function shapeLooper() {
                if (loop) {
                    setTimeout(function() {
                        iconShape(colorArray[iconNum], shapeArray[iconNum++]);
                        if (iconNum == shapeArray.length) {
                            iconNum = 0;
                        }
                        shapeLooper();
                    }, 1700);
                }
            }
        });
    },
    otherTriggers: function() {
        $(".startButton i").one("click", function() {
            $(this).fadeOut();
            $(".navButtons").fadeIn();
        });
    }
};

$(document).ready(function() {
    bmoreHealthProfile.init();
    console.log("connected");
});
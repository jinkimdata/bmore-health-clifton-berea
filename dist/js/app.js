var bmoreHealth = {
    init: function() {
        bmoreHealth.navigation();
        bmoreHealth.data();
    },
    share: function() {
        $(".icon-twitter").on("click", function() {
            var tweet = "";
            var url = "";
            var twitter_url = "https://twitter.com/intent/tweet?text=" + tweet + "&url=" + url + "&tw_p=tweetbutton";
            window.open(twitter_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
        $(".icon-facebook").on("click", function() {
            var picture = "";
            var title = "";
            var description = "";
            var url = "";
            var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link=" + url + "&picture=" + picture + "&name=" + title + "&description=" + description + "&redirect_uri=http://www.facebook.com";
            window.open(facebook_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
    },
    dataVis: function() {},
    navigation: function() {
        var btn;
        var toCat;
        $(".categoryBtn").focus(function() {
            btn = $(this);
            toCat = btn.data("cat");
            $(".categoryBtn--active").toggleClass("categoryBtn--active");
            btn.addClass("categoryBtn--active");
            $(".subhead").fadeOut(250, function() {
                $(".subhead").text($(".categoryBtn__label--" + toCat).text());
                $(".subhead").fadeIn(250);
            });
            $(".category--active").fadeOut(250, function() {
                $(".category--active").toggleClass("category--active");
                $(".category--" + toCat).addClass("category--active");
                $(".category--" + toCat).fadeIn();
            });
        });
    }
};

$(document).ready(function() {
    bmoreHealth.init();
    console.log("connected");
});
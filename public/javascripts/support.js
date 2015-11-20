google.load("search", "1");

function findImagesOnGoogle(options) {
  options.container.empty();
  options.container.append($("<p>").text("Searching..."));

  var imageSearch = new google.search.ImageSearch();
  imageSearch.setSearchCompleteCallback(this, createSearchCompleteCallback(imageSearch, options), null);
  imageSearch.setResultSetSize(8);
  imageSearch.execute(options.keywords);
};

function createSearchCompleteCallback(search, options) {
  return function(arg) {
    google.search.Search.getBranding('google-branding');
    options.container.empty();
    for (var i = 0; i < search.results.length; i++) {
      var result = search.results[i];
      var img = $("<img>");
      img.attr('src', result.tbUrl);
      img.data('url', result.url);
      options.container.append(img);
    }
  }
};

function saveParametersToHash() {
  $('input, select').change(function() {
    var hash = {};
    hash.caption = $("#caption-text").val();
    hash.size = $('#caption-size').val();
    hash.left = $('#caption-left').val();
    hash.top = $('#caption-top').val();
    hash.width = $('#caption-width').val();
    hash.colour = $('#caption-colour').val();
    hash.align = $('#caption-align').val();
    hash.url = $('#workspace img').attr("src");
    hash.keyword = $('#search-term').val();
    window.location.hash = escape(JSON.stringify(hash));
    updateTweetButton();
  });
};

function loadParametersFromHash() {
  try {
    var hash = JSON.parse(unescape(window.location.hash).replace('#', ''));
    $('#caption-text').val(hash.caption);
    $('#caption-size').val(hash.size);
    $('#caption-left').val(hash.left);
    $('#caption-top').val(hash.top);
    $('#caption-width').val(hash.width);
    $('#caption-colour').val(hash.colour);
    $('#caption-align').val(hash.align);
    $('input, select').trigger('change');
    $('#workspace').append($('<img>').attr("src", hash.url));
    $('#search-term').val(hash.keyword);
  } catch (err) {}
};

function updateTweetButton() {
  if (typeof twttr == 'undefined') {
    return;
  }
  $('#twitter').empty();
  var a = $('<a>')
            .attr("href", "https://twitter.com/share")
            .addClass("twitter-share-button")
            .attr("data-text", "Today I finished building a 'Motivational Posters' website with @makersacademy!")
            .append($("Tweet"));
  a.appendTo('#twitter');
  twttr.widgets.load();
};

$(function() {
  loadParametersFromHash();
  saveParametersToHash();
  $('#caption-text').trigger("input");
});
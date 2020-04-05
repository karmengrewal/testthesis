new fullpage('#fullpage', {
  sectionsColor: ['#006699', 'white', '#006699', '#990000'],
});

window.onload = function onLoad() {
  var progressBar = 
    new ProgressBar.Circle('#progress', {
      color: '#990000',
      strokeWidth: 7,
      duration: 2000, // milliseconds
      easing: 'easeInOut'
    });

  progressBar.animate(0.63); // percent
};

// var API_KEY = '2934328-2653f6eda521c27b63be23ab2';
// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });



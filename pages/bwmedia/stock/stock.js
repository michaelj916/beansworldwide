function getData(min, max) {
  min = Math.ceil(5);
  max = Math.floor(500);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var config = {responsive: true};

var layout = {
  title: 'Real-Time Zendeya Coin Tracker!',
  font: { size:18 }
};


Plotly.plot('chart', [{
  y:[getData()],
  type: 'line'
}], config, layout );

var cnt = 0;


setInterval(function() {
  
  Plotly.extendTraces('chart', {y:[[getData()]]}, [0] );
  cnt++;

  if( cnt > 15 ) {
    Plotly.relayout('chart', {
      xaxis: {
        range: [cnt-15,cnt]
      }
    });
  }
}, 740);
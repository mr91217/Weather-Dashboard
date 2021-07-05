function wheather() {
    fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5fe393209d55b4e37bf544246eb4f69b'
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data);
        });
      
}
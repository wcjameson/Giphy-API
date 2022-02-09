export default class ReturnGif {
  static getGif(theme) { 
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${theme}&limit=10&offset=0&rating=g&lang=en`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
  static getGifTrend() { 
    return new Promise(function(resolve, reject) {
      let requestTrend = new XMLHttpRequest();
      const urlTrend = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=10&offset=0&rating=g`;
      requestTrend.onload = function() {
        if (this.status === 200) {
          resolve(requestTrend.response);
        } else {
          reject(requestTrend.response);
        }
      };
      requestTrend.open("GET", urlTrend, true);
      requestTrend.send();
    });
  }
  // static getGifRandom() { 
  //   return new Promise(function(resolve, reject) {
  //     let requestRandom = new XMLHttpRequest();
  //     const urlRandom = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&rating=g`;
  //     requestRandom.onload = function() {
  //       if (this.status === 200) {
  //         resolve(requestRandom.response);
  //       } else {
  //         reject(requestRandom.response);
  //       }
  //     };
  //     requestRandom.open("GET", urlRandom, true);
  //     requestRandom.send();
  //   });
  // }
}
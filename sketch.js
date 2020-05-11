var myResults = []
var consumerKey = 'jJKwYVKkqnSkbr63NpK7Vzvkx';
var consumerSecret = 'lTMfwMs7rDxz8vPcxBD7Gy5lDO8GXnlIzPw2d8xVhqa1L4xOTw';

var token = '364475473-kMBumzdzoxKZcduTwFGizG0iyMldRx1CQtcRXm2w';
var tokenSecret = 'KBjBbqUZ0of2SQZDFEqSFof7kQPpENigIh7d3BMUQyCjN';

var cb = new Codebird();

var font;
var txtWidth;

function preload() {
  font = loadFont('https://fonts.gstatic.com/s/newscycle/v14/CSR54z1Qlv-GDxkbKVQ_dFsvWNRevA.ttf');
}

function setup() {

  background(0);

  createCanvas(windowWidth, windowHeight, WEBGL);

  cb.setConsumerKey(consumerKey, consumerSecret);
  cb.setToken(token, tokenSecret);


  // codebird
  var params = {
    q: "room",
    result_type: 'recent',
    count: 10
  };


    cb.__call(
    "search_tweets",
    params,
    function(reply) {
      //background(0, 0, 0);
      var statuses = reply.statuses;
      for (var i = 0; i < statuses.length; i++) {
        var tweet = statuses[i];
        if (!tweet.retweeted_status) {
          //print(tweet.text);
          //fill('#' + tweet.user.profile_background_color);

          fill(255);

          //let myResults = statuses;
         myResults = tweet.text;
          let words = tweet.text.split(" ");
          console.log(words);
          let hyphenated = words.join("-")
         // text(tweet.text , 0, i * 120);
        }
      }
      // print the max_id which helps if you want to grab pages of data
      //print('max_id: ' + reply.search_metadata.max_id);

    }
  );

 // openGL
  textFont(font);
  textSize(20);
  textAlign(CENTER, CENTER);
  //fill(255);
	colorMode(RGB);
  background(0);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var P1 = 3;
var P2 = 5;
//var txt = 'p5.js  ';
var N = Math.floor(900);

  background(0);

function draw() {




  //background(0, 30);
  var txt = myResults ;              //scope issue
  print(txt);
  //delay(2000);
  //background(20);
	rotateY(millis()/13000);
// 	rotateX(1);
// 	for (var i = 0; i < N; i ++) {
// 		var n = 2 * PI * P1 * P2 * i / N - millis()/1700;

// 		//fill(i * 40 / N, 255, 255, i);
//         fill(255, i/N);

// 		push();
// 		rotateY(n/P1);
// 		translate(0, 0, 200);
// 		rotateX(n/P2);
// 		translate(0, 0, 100);
// 		rotateZ(-PI/3);
// 		text(txt, 0, 0);
// 		pop();
// 	}

  	for (var i = 0; i < N; i ++) {
		var y = 2 * PI * P1 * P2 * i / N - millis()/2700;

		fill(35, 210, 228, 10);
        //fill(255, i/N);

		push();
		rotateY(y/P1);
		translate(0, 0, 200);
		rotateX(2*y/P2);
		translate(0, 0, 100);
		rotateZ(-PI/3+500);
        var tx = String(txt);
        text(tx.charAt(i % tx.length), 0, 0);
		//text(txt, 0, 0);
		pop();
  //         fill(0);
  // rect(width/2, height/2, width, height);

	}



}



(function() {
  var script = document.createElement('script');
  script.onload = function() {
    var stats = new Stats();
    stats.domElement.style.cssText =
      'position:fixed;left:0;top:0;z-index:10000';
    document.body.appendChild(stats.domElement);
    requestAnimationFrame(function loop() {
      stats.update();
      requestAnimationFrame(loop);
    });
  };
  script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';
  document.head.appendChild(script);
})();

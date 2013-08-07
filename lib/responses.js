module.exports = function(){

  var RESPONSES = [
    "\\o You Rock, {{nick}}",
    "{{nick}} \\o!!!",
    "{{nick}} http://24.media.tumblr.com/tumblr_m6h84mAoMS1rwcc6bo1_500.gif",
    "\\o you never cease to amaze me, {{nick}}!",
    "{{nick}}: \\o",
    "{{nick}}: wow, just.. wow. \\o",
    "\\o this is just incredible {{nick}}!",
    "{{nick}}: NO. jk! \\o"
  ],
  max = RESPONSES.length;

  return function( nick ) {
    var idx = Math.floor( Math.random() * max );
    return RESPONSES[ idx ].replace( "{{nick}}", nick );
  };
}

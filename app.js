/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var Habitat = require( "habitat" ),
    irc = require( "irc" ),
    env,
    client,
    hi5regex;

Habitat.load();
env = (new Habitat()).all();

if ( !env.HOST, !env.NICK, !env.CHANNELS ) {
  throw new Error( "Missing config options, check your config!" );
}

hi5regex = new RegExp( "^" + env.NICK + ": o\/$" );

client = new irc.Client( env.HOST, env.NICK, {
  channels: env.CHANNELS.split( "," ).map(function( channel ) {
    if ( /^#.+$/.test( channel ) ) {
      return channel;
    }
    return "#" + channel;
  })
});

client.addListener( "message", function( from, to, message ) {
  if ( hi5regex.test( message ) ) {
    client.say( to, "\\o You Rock, " + from + "!!!" );
  }
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});

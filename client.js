const net = require('net');

/**
 * Established connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: '50.64.116.162',
    // host: 'localhost',
    port: 50541
    
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: RWC');
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
import mongoose from 'mongoose';
import db_init from './models/taser';

var db = (function() {
  var conn = null;
  /**
   * connecting database initializes the data
   */
  let init = () => {
    // check for environment variable
    let db_url = `mongodb://${process.env['MONGODB_APPLICATION_USER']}:${
      process.env['MONGODB_APPLICATION_PASS']
    }@${process.env['MONGODB_HOST']}:27017/products`;
    var options = {
      autoIndex: false, // Don't build indexes
      reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
      reconnectInterval: 500, // Reconnect every 500ms
      poolSize: 10, // Maintain up to 10 socket connections
      // If not connected, return errors immediately rather than waiting for reconnect
      bufferMaxEntries: 0,
      promiseLibrary: global.Promise,
    };

    conn = mongoose.connection;

    mongoose.connect(
      db_url,
      options,
      function(error) {
        if (error) {
          console.log(error);
        }
      }
    );
    conn.on('error', console.error.bind(console, 'connection error:'));

    conn.once('open', function() {
      console.log('db connection open');
      console.log('inserting data into the database');
      db_init(conn);
    });
    return conn;
  };

  /**
   * Disconnect the database on exits
   */
  let close = () => {
    if (db) {
      db.close(() => {
        console.log(
          'Mongoose default connection disconnected through app termination'
        );
        process.exit(0);
      });
    }
  };
  return {
    conn: conn,
    init: init,
    close: close,
  };
})();

export default db;

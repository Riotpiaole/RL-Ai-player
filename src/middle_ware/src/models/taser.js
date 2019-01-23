import faker from 'faker';
import { Product } from './schema';

export default function db_init(db) {
  // check for connection
  db.once('open', () => {
    for (let i = 0; i < parseInt(process.env[`TASER_SIZE`]); i++) {
      // insert data over here
    }
  });
}

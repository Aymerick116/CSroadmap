import { pool } from './database.js'; // Assuming the pool is defined in database.js
import './dotenv.js'
import itemsData from '../data/items.js';



const createItemsTable = async () => {
    const createTableQuery = `
      DROP TABLE IF EXISTS items;
  
      CREATE TABLE IF NOT EXISTS items (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          pricePoint VARCHAR(10) NOT NULL,
          audience VARCHAR(255) NOT NULL,
          image VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          submittedBy VARCHAR(255) NOT NULL,
          submittedOn TIMESTAMP NOT NULL
      )
    `;
  
    try {
      const res = await pool.query(createTableQuery);
      console.log('🎉 gifts table created successfully');
    } catch (err) {
      console.error('⚠️ error creating gifts table', err);
    }
  };
  

const seedGiftsTable = async () => {
    await createItemsTable();
  
    itemsData.forEach((item) => {
      const insertQuery = {
        text: 'INSERT INTO items (name, pricePoint, audience, image, description, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        values: [
          item.name,
          item.pricePoint,
          item.audience,
          item.image,
          item.description,
          item.submittedBy,
          item.submittedOn
        ]
      };
  
      pool.query(insertQuery.text, insertQuery.values, (err, res) => {
        if (err) {
          console.error('⚠️ error inserting gift', err);
          return;
        }
  
        console.log(`✅ ${item.name} added successfully`);
      });
    });
  };
  
  seedGiftsTable();
  
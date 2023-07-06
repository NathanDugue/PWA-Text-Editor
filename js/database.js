import { openDB } from 'idb';

const initdb = async () =>
    openDB('jate', 1, {
        upgrade(db){
            if (db.objectStoreNames.contains('jate')) {
                console.log('jate databse already exists');
                return;
            }
            db.createObjectStore('jate', {keyPath: 'id', autoIncrement: true});
            console.log('jate database created');
        }
    });
    //Add logic to a method that accepts some content and add it to the database
    export const putDb = async (content) => {
        const jate = await openDB ('jate', 1);
    }
        // Add logic to a method that gets all content from a database
        export const getDb = async () => console.error('getDb not implemented');

        initdb();
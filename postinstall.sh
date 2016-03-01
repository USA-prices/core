#!/bin/bash
export $(cat .env | xargs)

mongoimport --db $DB_NAME --collection areas --drop --file server/static/us-states-json-array.json --jsonArray
mongoimport --db $DB_NAME --collection petroleumlocations --drop --file server/static/us-states-json-array.json --jsonArray

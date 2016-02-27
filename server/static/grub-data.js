'use strict';

const _ = require('underscore');
const http = require('http');
const config = require('./../config/config.js');
const PetroleumLocation = require('./models/petroleum-location');
const PetroleumPrice = require('./../api/models/petroleum-prices');
const Area = require('./../api/models/area');

let mongoose = require('./../config/mongoose');
let connection = mongoose.connect();

PetroleumLocation.find(function(err, locations) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    let completed_requests = 0;
    _.each(locations, (value, index) => {
        let url = config.api_url + '/?series_id=' + value.req_code + '&api_key=' + config.api_key + '&num=1';

        http.get(url, function(response) {
            let buffer = "";

            response.on('data', (chunk) => {
                buffer += chunk;
            });

            /* response example

                "request": {
                    "command": "series",
                        "series_id": "PET.EMM_EPM0_PTE_R50_DPG.W"
                },
                "series": [
                {
                    "series_id": "PET.EMM_EPM0_PTE_R50_DPG.W",
                    "name": "West Coast All Grades All Formulations Retail Gasoline Prices, Weekly",
                    "units": "Dollars per Gallon",
                    "f": "W",
                    "unitsshort": "$/gal",
                    "description": "West Coast All Grades All Formulations Retail Gasoline Prices",
                    "copyright": "None",
                    "source": "EIA, U.S. Energy Information Administration",
                    "geography": "USA-AK+USA-AZ+USA-CA+USA-HI+USA-NV+USA-OR+USA-WA",
                    "start": "19930405",
                    "end": "20160222",
                    "updated": "2016-02-22T17:21:49-0500",
                    "data": [
                        [
                            "20160222",
                            2.206
                        ],
                        ...
                    ]
                }]
            */

            response.on('end', (err) => {
                completed_requests++;
                let data = JSON.parse(buffer);
                let series =  data.series[0];
                let geography = series.geography.split('+');
                let price = series.data[0][1];
                let date = series.updated;
                _.each(geography, (value, index) => {
                    Area.find({iso_code: value}, (err, item) => {
                        let priceModel = new PetroleumPrice();
                        priceModel.price = price;
                        priceModel.date = date;
                        priceModel.area = item[0]._id;
                        //@todo add transaction
                        priceModel.save(function(err) {
                            if (err) console.log(err);
                        });

                        if ((completed_requests === locations.length) && (geography.length - 1 === index)) {
                            // All downloads are completed
                            console.log('Grubbing data is done');
                            mongoose.disconnect(connection);
                            process.exit(1);
                        }
                    });
                });

            });
        });
    });
});

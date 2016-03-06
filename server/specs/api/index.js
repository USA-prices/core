'use strict';

const Server = require('./../../server');
const chai = require('chai');
const superagent = require('superagent');

const port = '8080';
const server = new Server();
const expect = chai.expect;
const url = 'http://localhost:' + port + '/api';

const areaSpecs = require('./area');

module.exports = function() {
    describe('server', function() {
        before(function() {
            server.start(port);
        });
        describe('homepage', function() {
            it('should respond to GET', function(done) {
                superagent
                    .get(url)
                    .end(function(req, res) {
                        expect(res.status).to.equal(200);
                        done();
                    });
            })
        });
        //run specs for area request
        areaSpecs(url);
        after(function () {
            server.stop();
        });
    });
};
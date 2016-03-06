'use strict';

const superagent = require('superagent');
const chai = require('chai');
const expect = chai.expect;


module.exports = function(url) {
    describe('get areas', function() {
        it('should respond to GET', function(done) {
            superagent
                .get(url + '/areas')
                .end(function (req, res) {
                    expect(res.body.status).to.equal('ok');
                    done();
                });
        });
        it('should respond with data', function(done) {
            superagent
                .get(url + '/areas')
                .end(function(req, res) {
                    expect(res.body.results).to.be.not.empty;
                    done();
                });
        });
        it('should have amount of data', function(done) {
            superagent
                .get(url + '/areas')
                .end(function(req, res) {
                    expect(res.body.results.length).to.equal(51);
                    done();
                });
        });
    });
};
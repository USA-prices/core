'use strict';

/**
 * Sends success response data
 * @param {Object} data
 */
function responseOk(data) {
    this.json({
        results: data,
        status: 'ok'
    });
}

/**
 * Sends error response data
 * @param {Object} error
 */
function responseError(error) {
    this.json({
        results: error,
        status: 'error'
    });
}

/**
 * Sends welcome message
 */
function responseMessage() {
    this.json({
        message: 'Welcome to api'
    });
}

module.exports = {
    responseOk: responseOk,
    responseError: responseError,
    responseMessage: responseMessage
};
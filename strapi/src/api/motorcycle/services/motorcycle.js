'use strict';

/**
 * motorcycle service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::motorcycle.motorcycle');

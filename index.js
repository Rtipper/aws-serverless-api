'use strict';

const friendModel = require('./schema.js');

const uuid = require('uuid').v4;

exports.handler = async (event) => {

  console.log(event);

  try {

    const body = JSON.parse(event.body);
    const { name, phone } = body;
    const id = uuid();

    const record = new friendModel({ id, name, phone });
    const data = await record.save();
    const savedRecord = JSON.stringify(data);


    return {
      statusCode: 201,
      body: savedRecord
    }

  } catch (e) {
    return {
      statusCode: 500,
      body: e.message
    }

  }

};
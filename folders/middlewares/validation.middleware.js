const { body, validationResult } = require("express-validator");
const { TASKSTATUS } = require("../utility/enum");
const { sendError } = require('../utility/responses');
require('dotenv').config();

const validateTaskCreation = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("status").optional().isIn(Object.values(TASKSTATUS)).withMessage("Invalid status"),
  handleValidationErrors
];

function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return sendError(res, 400, 'Request Not Processed Due to Validation Errors', { status: false, errors: errors.array() });
  }
  next();
}

module.exports = {
  validateTaskCreation
};

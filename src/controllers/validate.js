/**
 * Validate user data based on a validation schema.
 * @param {Object} userData - User data to be validated.
 * @param {Object} validationSchema - Validation schema for user data.
 * @throws {Error} - Throws an error if validation fails.
 */
function validator(userData, validationSchema) {
  if (!validationSchema) {
    console.error("🚨 At validator()");
    console.error(
      "🚨 Schema not loaded! Kindly provide the validation schema as a param"
    );
    return;
  }
  for (const field in validationSchema) {
    const fieldValue = userData[field];
    const { type, required, validate } = validationSchema[field];

    if (required && (fieldValue === undefined || fieldValue === null)) {
      throw new Error(`${field} is required.`);
    }

    if (fieldValue !== undefined && fieldValue !== null) {
      if (type && typeof fieldValue !== type) {
        throw new Error(`${field} must be of type ${type}.`);
      }

      if (validate && !validate(fieldValue)) {
        throw new Error(`Validation failed for ${field}.`);
      }
    }
  }
}

module.exports = {
  validator,
};

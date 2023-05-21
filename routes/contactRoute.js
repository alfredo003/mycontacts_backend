const express = require('express');
const router = express.Router();
const validateToken = require('./../middleware/validateTokenHandler');
const contactController = require('./../controllers/contactController')

router.use(validateToken);

router.route('/')
  .get(contactController.getContacts)
  .post(contactController.createContact);
router.route('/:id')
  .get(contactController.getContact)
  .put(contactController.updateContact)
  .delete(contactController.deleteContact);

module.exports = router;
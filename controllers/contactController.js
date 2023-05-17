
/**
 * @desc Get all Contacts
 * @route GET /api/contacts
 * @access public 
 */
const getContacts = (req,res)=>{
  res.status(200).json({message:'Get All Contacts'})
}
/**
 * @desc Get Contacts
 * @route GET /api/contacts/id
 * @access public 
 */
 const getContact = (req,res)=>{
  res.status(200).json({message:'Get All Contacts'})
}

/**
 * @desc create new contacts
 * @route POST /api/contacts
 * @access public 
 */
 const createContact = (req,res)=>{
  res.status(200).json({message:'Get All Contacts'})
}
/**
 * @desc update contacts
 * @route PUT /api/contacts/id
 * @access public 
 */
 const updateContact = (req,res)=>{
  res.status(200).json({message:'Get All Contacts'})
}
/**
 * @desc delete contacts
 * @route DELETE /api/contacts/id
 * @access public 
 */
 const deleteContact = (req,res)=>{
  res.status(200).json({message:'Get All Contacts'})
}
module.exports =  {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
}
const asyncHandler = require("express-async-handler")
const Contact = require('../models/contactModel')
/**
 * @desc Get all Contacts
 * @route GET /api/contacts
 * @access public 
 */
const getContacts = asyncHandler(async (req,res)=>{
  const contacts = await Contact.find({ user_id:req.user.id});
  res.status(200).json(contacts)
})
/**
 * @desc Get Contacts
 * @route GET /api/contacts/id
 * @access public 
 */
 const getContact = asyncHandler(async (req,res)=>{
 const contact = await Contact.findById(req.params.id);
 res.status(200).json(contact)
});

/**
 * @desc create new contacts
 * @route POST /api/contacts
 * @access public 
 */
 const createContact = asyncHandler(async (req,res)=>{
  const { name , email , phone} = req.body;
  if(!name || !email || !phone){
    res.status(400)
    throw new Error("All fields are mandatory")
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id:req.user.id
  })
  
  res.status(200).json(contact);
});

/**
 * @desc update contacts
 * @route PUT /api/contacts/id
 * @access public 
 */
 const updateContact = asyncHandler(async (req,res)=>{
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }

  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );

  res.status(200).json(updateContact)
});
/**
 * @desc delete contacts
 * @route DELETE /api/contacts/id
 * @access public 
 */
 const deleteContact = asyncHandler(async (req,res)=>{
  const contact =await Contact.findById(req.params.id);
  if(!contact){
    res.status(400);
    throw new Error("Contact not found")
  }
   await Contact.remove();
  res.status(200).json(contact)
  });

module.exports =  {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
}
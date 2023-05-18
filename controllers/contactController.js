const asyncHandler = require("express-async-handler")
const Contact = require('../models/contactModel')
/**
 * @desc Get all Contacts
 * @route GET /api/contacts
 * @access public 
 */
const getContacts = asyncHandler(async (req,res)=>{
  const contacts = await Contact.find();
  res.status(200).json(contacts)
})
/**
 * @desc Get Contacts
 * @route GET /api/contacts/id
 * @access public 
 */
 const getContact = asyncHandler(async (req,res)=>{
 const contact = await Contact.find();
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
  })
  res.status(200).json(contact);
});

/**
 * @desc update contacts
 * @route PUT /api/contacts/id
 * @access public 
 */
 const updateContact = asyncHandler(async (req,res)=>{
  res.status(200).json({message:'Get All Contacts'})
});
/**
 * @desc delete contacts
 * @route DELETE /api/contacts/id
 * @access public 
 */
 const deleteContact = asyncHandler(async (req,res)=>{
  res.status(200).json({message:'Get All Contacts'})
  });

module.exports =  {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
}
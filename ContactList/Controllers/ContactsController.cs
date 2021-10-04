using ContactList.Data.Models;
using ContactList.Data.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        public ContactsService _contactsService;

        public ContactsController(ContactsService contactsService)
        {
            _contactsService = contactsService;
        }

        [HttpGet("get-contacts")]
        public IActionResult GetContacts()
        {
            var contacts = _contactsService.GetContacts();
            return Ok(contacts);
        }
        [HttpPost("add-contact")]
        public IActionResult AddContact([FromBody] Contact contact)
        {
            var newContact = _contactsService.AddContact(contact);
            return Created(nameof(AddContact), newContact);
        }
        [HttpDelete("delete-contact/{id}")]
        public IActionResult DeleteContact(int id)
        {
            try
            {
                _contactsService.DeleteContact(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("update-contact")]
        public IActionResult UpdateContactById([FromBody] Contact contact)
        {
            var updatedContact = _contactsService.UpdateContactById(contact);
            return Ok(updatedContact);
        }
    }
}

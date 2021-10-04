using ContactList.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactList.Data.Services
{
    public class ContactsService
    {
        private readonly AppDbContext _context;
        public ContactsService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Contact> GetContacts()
        {
            var contacts = _context.Contacts;
            return contacts;
        }
        public Contact AddContact(Contact contact)
        {
            var _contact = new Contact()
            {
                Name = contact.Name,
                Phone = contact.Phone,
                Email = contact.Email,
                Status = contact.Status,
                Gender = contact.Gender,
                Image = contact.Image,
            };
            _context.Contacts.Add(_contact);
            _context.SaveChanges();

            return _contact;
        }
        public void DeleteContact(int id)
        {
            var contact = _context.Contacts.FirstOrDefault(b => b.Id == id);
            if (contact != null)
            {
                _context.Contacts.Remove(contact);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception($"Contact with id: {id} not found");
            }
        }
        public Contact UpdateContactById(Contact contact)
        {
            var _contact = _context.Contacts.FirstOrDefault(n => n.Id == contact.Id);

            if (_contact != null)
            {
                _contact.Name = contact.Name;
                _contact.Phone = contact.Phone;
                _contact.Email = contact.Email;
                _contact.Status = contact.Status;
                _contact.Gender = contact.Gender;
                _contact.Image = contact.Image;

                _context.SaveChanges();
            }

            return _contact;
        }
    }
}

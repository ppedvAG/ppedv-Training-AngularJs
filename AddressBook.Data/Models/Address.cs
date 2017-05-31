using System;
using System.ComponentModel.DataAnnotations;

namespace AddressBook.Data.Models
{
    public class Address
    {
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(255)]
        public string SurName { get; set; }

        [Phone]
        public string TelephoneNumber { get; set; }

        [EmailAddress]
        public string Email { get; set; }
        public DateTime? Birthday { get; set; }
    }
}

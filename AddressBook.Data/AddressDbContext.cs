using System.Data.Entity;
using AddressBook.Data.Models;

namespace AddressBook.Data
{
    public class AddressDbContext : DbContext
    {
        public AddressDbContext() : base("AddressDb")
        { }

        public DbSet<Address> Addresses { get; set; }
    }
}

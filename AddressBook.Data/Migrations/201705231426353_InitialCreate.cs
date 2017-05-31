namespace AddressBook.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
 
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Addresses",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(nullable: false, maxLength: 255),
                        SurName = c.String(nullable: false, maxLength: 255),
                        TelephoneNumber = c.String(),
                        Email = c.String(),
                        Birthday = c.DateTime(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Addresses");
        }
    }
}

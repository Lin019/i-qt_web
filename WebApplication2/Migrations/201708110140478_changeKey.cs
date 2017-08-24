namespace WebApplication2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeKey : DbMigration
    {
        public override void Up()
        {
            CreateTable(
            "dbo.Flights",
            c => new
            {
                id = c.Guid(nullable: true, identity: true),
                flightCode = c.String(),
                departureAirport = c.String(),
                arrivalAirport = c.String(),
                departureDateTime = c.DateTime(),
                arrivalDateTime = c.DateTime(),
                flightStats = c.String(),
                reason = c.String(),
                seat = c.String(),
                price = c.Int()
            })
            .PrimaryKey(t => t.id);
        }
        
        public override void Down()
        {
            DropTable("dbo.Flights");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace Chipn.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ChipCount = table.Column<long>(type: "bigint", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Age = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Games",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Games", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AccountGames",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AccountId = table.Column<int>(type: "int", nullable: false),
                    GameId = table.Column<int>(type: "int", nullable: false),
                    Payouts = table.Column<int>(type: "int", nullable: false),
                    Wagers = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountGames", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AccountGames_Accounts_AccountId",
                        column: x => x.AccountId,
                        principalTable: "Accounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AccountGames_Games_GameId",
                        column: x => x.GameId,
                        principalTable: "Games",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Accounts",
                columns: new[] { "Id", "Age", "ChipCount", "Email", "Password", "UserName" },
                values: new object[,]
                {
                    { 1, 2147483647, 9223372036854775807L, "admin@chipn.gov", "NoneOfYourBusiness", "ChipnAdministrator" },
                    { 2, 36, -9223372036854775808L, "carlos@chipn.gov", "NoneOfYourCarlos", "ChipnAdministratorCarlos" },
                    { 3, 27, -9223372036854775808L, "davis@chipn.gov", "NoneOfYourDavis", "ChipnAdministratorDavis" },
                    { 4, 22, -9223372036854775808L, "gavin@chipn.gov", "NoneOfYourGavio", "ChipnAdministratorGavin" }
                });

            migrationBuilder.InsertData(
                table: "Games",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "BlackJack" },
                    { 2, "Slots" },
                    { 3, "Craps" },
                    { 4, "Roulette" }
                });

            migrationBuilder.InsertData(
                table: "AccountGames",
                columns: new[] { "Id", "AccountId", "GameId", "Payouts", "Wagers" },
                values: new object[,]
                {
                    { 1, 1, 1, 0, 100 },
                    { 2, 2, 2, 210, 700 },
                    { 3, 3, 3, 20, 200 },
                    { 4, 4, 4, 45, 80 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AccountGames_AccountId",
                table: "AccountGames",
                column: "AccountId");

            migrationBuilder.CreateIndex(
                name: "IX_AccountGames_GameId",
                table: "AccountGames",
                column: "GameId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AccountGames");

            migrationBuilder.DropTable(
                name: "Accounts");

            migrationBuilder.DropTable(
                name: "Games");
        }
    }
}

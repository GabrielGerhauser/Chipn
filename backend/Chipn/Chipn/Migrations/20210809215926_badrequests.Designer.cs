﻿// <auto-generated />
using Chipn;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Chipn.Migrations
{
    [DbContext(typeof(ChipnDBContext))]
    [Migration("20210809215926_badrequests")]
    partial class badrequests
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.8")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Chipn.Models.Account", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Age")
                        .HasColumnType("int");

                    b.Property<long>("ChipCount")
                        .HasColumnType("bigint");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Accounts");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Age = 2147483647,
                            ChipCount = 9223372036854775807L,
                            Email = "admin@chipn.gov",
                            Password = "NoneOfYourBusiness",
                            UserName = "ChipnAdministrator"
                        },
                        new
                        {
                            Id = 2,
                            Age = 36,
                            ChipCount = -9223372036854775808L,
                            Email = "carlos@chipn.gov",
                            Password = "NoneOfYourCarlos",
                            UserName = "ChipnAdministratorCarlos"
                        },
                        new
                        {
                            Id = 3,
                            Age = 27,
                            ChipCount = -9223372036854775808L,
                            Email = "davis@chipn.gov",
                            Password = "NoneOfYourDavis",
                            UserName = "ChipnAdministratorDavis"
                        },
                        new
                        {
                            Id = 4,
                            Age = 22,
                            ChipCount = -9223372036854775808L,
                            Email = "gavin@chipn.gov",
                            Password = "NoneOfYourGavio",
                            UserName = "ChipnAdministratorGavin"
                        });
                });

            modelBuilder.Entity("Chipn.Models.AccountGame", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AccountId")
                        .HasColumnType("int");

                    b.Property<int>("GameId")
                        .HasColumnType("int");

                    b.Property<int>("Payouts")
                        .HasColumnType("int");

                    b.Property<int>("Wagers")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("AccountId");

                    b.HasIndex("GameId");

                    b.ToTable("AccountGames");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            AccountId = 1,
                            GameId = 1,
                            Payouts = 0,
                            Wagers = 100
                        },
                        new
                        {
                            Id = 2,
                            AccountId = 2,
                            GameId = 2,
                            Payouts = 210,
                            Wagers = 700
                        },
                        new
                        {
                            Id = 3,
                            AccountId = 3,
                            GameId = 3,
                            Payouts = 20,
                            Wagers = 200
                        },
                        new
                        {
                            Id = 4,
                            AccountId = 4,
                            GameId = 4,
                            Payouts = 45,
                            Wagers = 80
                        });
                });

            modelBuilder.Entity("Chipn.Models.Game", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Games");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "BlackJack"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Slots"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Craps"
                        },
                        new
                        {
                            Id = 4,
                            Name = "Roulette"
                        });
                });

            modelBuilder.Entity("Chipn.Models.AccountGame", b =>
                {
                    b.HasOne("Chipn.Models.Account", "Account")
                        .WithMany("AccountGames")
                        .HasForeignKey("AccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Chipn.Models.Game", "Game")
                        .WithMany()
                        .HasForeignKey("GameId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Account");

                    b.Navigation("Game");
                });

            modelBuilder.Entity("Chipn.Models.Account", b =>
                {
                    b.Navigation("AccountGames");
                });
#pragma warning restore 612, 618
        }
    }
}

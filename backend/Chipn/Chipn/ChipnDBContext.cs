using Chipn.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chipn
{
	public class ChipnDBContext : DbContext
	{
		private DbSet<Account> AccountSet{get;set;}
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			var connectionString = "Server=(localdb)\\mssqllocaldb;Database=ChipnDB;Trusted_Connection=True;";
			optionsBuilder.UseSqlServer(connectionString).UseLazyLoadingProxies();
			base.OnConfiguring(optionsBuilder);
		}
		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Account>().HasData(
				new Account(){Id=1,UserName="ChipnAdministrator",ChipCount=long.MaxValue,Email="admin@chipn.gov",Password="NoneOfYourBusiness",Age=int.MaxValue},
				new Account(){Id=2,UserName="ChipnAdministratorCarlos",ChipCount=long.MinValue,Email="carlos@chipn.gov",Password="NoneOfYourCarlos",Age=36},
				new Account(){Id=3,UserName="ChipnAdministratorDavis",ChipCount=long.MinValue,Email="davis@chipn.gov",Password="NoneOfYourDavis",Age=27}
			);
		}
	}
}

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chipn
{
	public class Startup
	{
		private readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

		public Startup(IConfiguration configuration)
		{
			Configuration=configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddControllers().AddNewtonsoftJson(o =>
			{
				o.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
			});

			services.AddDbContext<ChipnDBContext>();

			services.AddCors(options =>
			{
				options.AddPolicy(MyAllowSpecificOrigins, builder =>
				{
					builder.WithOrigins("http://localhost:8080", "https://localhost:8080").AllowAnyHeader().AllowAnyMethod();
					builder.WithOrigins("http://localhost:8081", "https://localhost:8081").AllowAnyHeader().AllowAnyMethod();
				});
			});

			services.AddSwaggerGen(c =>
			{
				c.SwaggerDoc("v1",new OpenApiInfo { Title="Chip'n",Version="v1" });
			});
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app,IWebHostEnvironment env)
		{
			if(env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseSwagger();
				app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json","Chipn v1"));
			}

			app.UseHttpsRedirection();

			app.UseRouting();
			app.UseCors(MyAllowSpecificOrigins);

			app.UseAuthorization();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
			});
		}
	}
}

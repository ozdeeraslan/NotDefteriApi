using Microsoft.EntityFrameworkCore;
using NotDefteriApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(setup => setup.AddDefaultPolicy(
    policy => policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));

var cs = builder.Configuration.GetConnectionString("BaglantiCumlem");
builder.Services.AddDbContext<UygulamaDbContext>(
    optionsBuilder => optionsBuilder.UseSqlServer(cs));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();


app.UseAuthorization();

app.MapControllers();

app.Run();

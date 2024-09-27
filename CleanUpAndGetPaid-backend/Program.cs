var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddCors(options => {
    var frontendURL = builder.Configuration.GetValue<string>("AllowedHosts");
    
    if (!string.IsNullOrEmpty(frontendURL)) 
    {
        options.AddDefaultPolicy(builder => {
            builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
        });
    }
});

var app = builder.Build();

// In-memory storage
var items = new List<Item>();

// Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();


app.MapPost("/items", (Item newItem) =>
{
    newItem.Id = items.Count + 1;
    items.Add(newItem);
    return Results.Created($"/items/{newItem.Id}", newItem);
})
.WithName("AddItem")
.WithOpenApi();


app.MapGet("/items", () =>
{
    return Results.Ok(items);
})
.WithName("ViewItems")
.WithOpenApi();

app.Run();



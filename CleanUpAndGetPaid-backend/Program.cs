using MySql.Data.MySqlClient;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// MySQL connection
string connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddScoped<MySqlConnection>(_ => new MySqlConnection(connectionString));

builder.Services.AddCors(options =>
{
    var frontendURL = builder.Configuration.GetValue<string>("AllowedHosts");
    
    if (!string.IsNullOrEmpty(frontendURL))
    {
        options.AddDefaultPolicy(builder =>
        {
            builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
        });
    }
});

var app = builder.Build();

// Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();

// POST endpoint för att lägga till objekt i databasen
app.MapPost("/items", async (Item newItem, MySqlConnection db) =>
{
    var query = "INSERT INTO items (name, description) VALUES (@name, @description);";
    using var cmd = new MySqlCommand(query, db);
    cmd.Parameters.AddWithValue("@name", newItem.Name);
    cmd.Parameters.AddWithValue("@description", newItem.Description);

    await db.OpenAsync();
    await cmd.ExecuteNonQueryAsync();
    
    newItem.Id = (int)cmd.LastInsertedId;
    return Results.Created($"/items/{newItem.Id}", newItem);
})
.WithName("AddItem")
.WithOpenApi();

// GET endpoint för att hämta alla objekt från databasen
app.MapGet("/items", async (MySqlConnection db) =>
{
    var query = "SELECT id, name, description, created_at FROM items;";
    using var cmd = new MySqlCommand(query, db);

    await db.OpenAsync();
    using var reader = await cmd.ExecuteReaderAsync();

    var items = new List<Item>();
    while (await reader.ReadAsync())
    {
        items.Add(new Item
        {
            Id = reader.GetInt32(0),
            Name = reader.GetString(1),
            Description = reader.GetString(2)
            // Skapa en CreatedAt-egenskap om du behöver det
        });
    }

    return Results.Ok(items);
})
.WithName("ViewItems")
.WithOpenApi();

app.Run();

public class Item
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Description { get; set; }
}

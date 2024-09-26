using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder(args);

// L�gg till tj�nster i containern
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IItemService, ItemService>(); // L�gg till din tj�nst h�r

// CORS-konfiguration
// /*https://localhost:5001/swagger/index.html*/
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder => builder.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

var app = builder.Build();

// Konfigurera HTTP-f�rfr�gningspipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection(); // Aktivera HTTPS-redirection
app.UseCors("AllowAllOrigins"); // Aktivera CORS-policyn h�r

// Endpoint f�r att l�gga till ett objekt
app.MapPost("/api/items", async (Item item, IItemService itemService, ILogger<Program> logger) =>
{
    logger.LogInformation("Received item: {@Item}", item); // Logga objektet

    try
    {
        await itemService.AddItemAsync(item);
        logger.LogInformation("Item added successfully.");
        return Results.Created($"/api/items/{item.Id}", item);
    }
    catch (Exception ex)
    {
        logger.LogError(ex, "Error while adding item.");
        return Results.BadRequest(new { Message = ex.Message });
    }
});

// Starta applikationen
app.Run();

// Modeller
public class Item
{
    public int Id { get; set; } // Endast om du genererar Id
    public string? Name { get; set; } // G�r 'Name' nullable
    public string? Description { get; set; } // G�r 'Description' nullable
}

// Implementera din tj�nst f�r att hantera logik
public interface IItemService
{
    Task AddItemAsync(Item item);
}

public class ItemService : IItemService
{
    public Task AddItemAsync(Item item)
    {
        // Logik f�r att spara objekt i databasen
        return Task.CompletedTask;
    }
}



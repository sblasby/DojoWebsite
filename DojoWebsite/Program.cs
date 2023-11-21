using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);

// Add services required for Razor Pages
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the app to use Razor Pages
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/Error");
    app.UseStatusCodePagesWithReExecute("/Error/{0}");
}

app.UseStaticFiles(); // Enable static file serving (for example, wwwroot)

app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapRazorPages();

});

app.Run();

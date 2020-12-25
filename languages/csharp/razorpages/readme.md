# IRepository Pattern

Create a  some few projects for separation of concern. 

1. Taste : Razor Pages Project.
2. Taste.DataAccess: Persistence Layer with the database code in it.
3. Taste.Modeles : This is where our modeles lives.
4. Taste. Utilities: This is where our Utilities are.

Asp dotnet core 3.1 added Automatically razor live reload as a package, Lets add that first to the **Taste** project in order to be able to reflesh the pages.

When you add packages always ensure the **package** number match with the **runtime values**.

```bash
dotnet add package Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation --version 3.1.10
```

The package will not work right off. We need to register it in the **startup** configure services.

```csharp
 services.AddRazorPages().AddRazorRuntimeCompilation();
```

Adding more **Microsoft.AspNetCore.EntityFrameworkCore** to **Taste.DataAcess** and **Taste.Models** Projects. Always ensure you are in the right folder.

```bash
dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore --version 3.1.8
```

For **data access project.** **csproj**.

```bash
 <PackageReference Include="Microsoft.EntityFrameworkCore.Sqlite" Version="3.1.8" />
```

Since we will need to use dropdown, selectable list we also need to add **microsoft.aspnetcore.mvc** to both **DataAcess** and **Models** Project.

```bash
dotnet add package Microsoft.AspNetCore.Mvc --version 2.2.0
```

Since We will be handling payments in our application we need to **to Add Stripe.net** to our projects **Taste** and **Taste.DataAcess**.

```bash
dotnet add package Stripe.net --version 39.31.0
```

## Changing the Theme with Bootswatch

Go to bootswatch .com and download a **bootstrap.min.css** come with it and replace the content of **bootsrap.min.css** in the **wwwroot/lib/bootrap/css**.

### Enable routing.

This means setting up **mvc**. Types of rounting in mvc include.
TODO check on types or routing in mvc.

```csharp
services.AddMvc(options => options.EnableEndpointRouting = false).SetCompatibilityVersion(Microsoft.AspNetCore.Mvc.CompatibilityVersion.Version_3_0);
```

Since we disabled **EndpointRouting** we need to remove the following code from **UseServices**.

```csharp
app.UseRouting();
app.UseEndpoints(endpoints =>
{
    endpoints.MapRazorPages();
});
```
Replace the above code with 

```csharp
app.UseMvc();
```

### ThirdParty Plugins in Use

* Jqurey User Interface.
   - Datepicker
* DataTables
- fontawesome fonts. - create an account.
  - free icons for you website.
- toastr.js for notifications.
- **sweet aleart**.
- **TinyMCe** - create an account.
- **jquery timepicker**


### Unit of work.

The unit of work class coodinates the work of multiple repositories by creating a single database context class shared by all of theme.







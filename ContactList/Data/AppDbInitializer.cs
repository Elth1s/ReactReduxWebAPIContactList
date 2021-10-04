using ContactList.Data.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactList.Data
{
    public class AppDbInitializer
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<AppDbContext>();

                if (!context.Contacts.Any())
                {
                    context.Contacts.AddRange(
                    new Contact()
                    {
                        Name = "Anton Karton",
                        Phone = "+1-800-600-9898",
                        Email = "ak@gmain.com",
                        Status = "Work",
                        Gender = "men",
                        Image = 0,
                    },
                    new Contact()
                    {
                        Name = "Karton Anton",
                        Phone = "+1-800-700-9898",
                        Email = "ka@gmain.com",
                        Status = "Friends",
                        Gender = "men",
                        Image = 1
                    },
                    new Contact()
                    {
                        Name = "Anna Lee",
                        Phone = "+1-800-800-9898",
                        Email = "al@gmain.com",
                        Status = "Private",
                        Gender = "women",
                        Image = 0
                    },
                    new Contact()
                    {
                        Name = "Olga Verdnam",
                        Phone = "+1-800-900-9898",
                        Email = "ov@gmain.com",
                        Status = "Family",
                        Gender = "women",
                        Image = 1

                    });
                    context.SaveChanges();
                }
            }
        }
    }
}
using ApiNetCore.Models;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

public class UserDbContext : DbContext
{
    public UserDbContext([NotNull] DbContextOptions options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>()
            .HasKey(b => b.Id);
    }
}
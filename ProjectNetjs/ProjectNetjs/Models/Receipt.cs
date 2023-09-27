using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System.Runtime.InteropServices;

namespace ProjectNetjs.Models;

public partial class Receipt
{
    public int Id { get; set; }

    public int IdCoins { get; set; }

    public decimal?Amount { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public string? Address { get; set; }

    public string? FullName { get; set; }

    public int IdDocumentType { get; set; }

    public int IdUsers { get; set; }

    public virtual Coin? IdCoinsNavigation { get; set; } = null!;

    public virtual DocumentType? IdDocumentTypeNavigation { get; set; } = null!;

    public virtual User? IdUsersNavigation { get; set; } = null!;
}

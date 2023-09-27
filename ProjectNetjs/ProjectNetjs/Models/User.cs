using System;
using System.Collections.Generic;

namespace ProjectNetjs.Models;

public partial class User
{
    public int Id { get; set; }

    public string? Name { get; set; }
    public string? LastName { get; set; }

    public int IdTypeUser { get; set; }

    public virtual TypeUser IdTypeUserNavigation { get; set; } = null!;

    public virtual ICollection<Receipt> Receipts { get; set; } = new List<Receipt>();
}

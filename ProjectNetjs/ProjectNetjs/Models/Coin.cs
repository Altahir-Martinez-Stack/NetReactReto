using System;
using System.Collections.Generic;

namespace ProjectNetjs.Models;

public partial class Coin
{
    public int Id { get; set; }

    public string? Code { get; set; }

    public string? Name { get; set; }

    public string? Symbol { get; set; }

    public virtual ICollection<Receipt> Receipts { get; set; } = new List<Receipt>();
}

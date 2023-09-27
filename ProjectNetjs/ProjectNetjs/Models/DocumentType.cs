using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProjectNetjs.Models;

public partial class DocumentType
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public virtual ICollection<Receipt> Receipts { get; set; } = new List<Receipt>();
}

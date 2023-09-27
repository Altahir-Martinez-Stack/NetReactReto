using System;
using System.Collections.Generic;

namespace ProjectNetjs.Models;

public partial class TypeUser
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}

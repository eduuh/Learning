using System.ComponentModel.DataAnnotations;
namespace Taste.Models.ViewModels
{
    public class Category
    {
        [Key]
        public int  Id { get; set; }

        [Required]
        [Display(Name = "Category Name")]
        public string Name { get; set; }

        [Required]
        [Display(Name = "Display Order")]
        public string DisplayOrder { get; set; }
    }
}

namespace psp515.Models;

public interface IMood
{
    bool IsHappy { get; set; }
    string Emoji { get; set; }
    string Text { get; set; } 
}
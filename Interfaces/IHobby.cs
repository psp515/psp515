namespace psp515.Models;

public interface IHobby<TGame, TPrinter>
{
    List<TGame> FavouriteGames { get; }
    List<TPrinter> Printers { get; }
    string SupportedFootballClub { get; }
}
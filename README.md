```cs
public class Me : Person<Language>, IAdditionalInformations, ICarrer<Work>, IHobby<Game, Printer>, IComputerScience<ProgrammingLanguage>
{

    public IMood Mood;

    public Me(IMood mood)
    {
        /* Try to guess ;D */
        Mood = mood;
    }

    protected override string Name => "Łukasz";
    protected override string Surname => "Kolber";

    public string Nick => "psp515";

    public string FavoriteMeal => "https://en.wikipedia.org/wiki/Lasagna";
    public string FavoriteSong => "https://www.youtube.com/watch?v=xvFZjo5PgG0";

    protected override List<Language> Languages => new List<Language>
    {
        new Language("pl", "C2"),
        new Language("en", "B2")
    };

    public bool IsStudent => true;

    public bool IsWorking => false;

    public List<Work> Works => new List<Work>()
    {
        new Work("TECH Sterowniki", "Intern", "3 months", 2021, new string[]{"C++", "Python"})
    };

    public List<ProgrammingLanguage> ProgrammingLanguages => new List<ProgrammingLanguage>
    {
        new ProgrammingLanguage("C#", true, "My first programming language, mostly used for Xamarin / .NET MAUI / console apps. I Really like it."),
        new ProgrammingLanguage("Python", true, "I met it a bit before studies and extended my knowledge on them."),
        new ProgrammingLanguage("C", false, "I met it on studies. I didn't enjoy writing in it. Yet it really helped to understand few things."),
        new ProgrammingLanguage("C++", true, "I used it on my first intersip."),
    };

    public List<ProgrammingLanguage> LearingProgrammingLanguages => new List<ProgrammingLanguage>
    {
        new ProgrammingLanguage("HTML/CSS/JS", false, "Learning it on AGH UST Couse."),
        new ProgrammingLanguage("Java", true, "Learning it on AGH UST Couse."),
        new ProgrammingLanguage("Haskell", false, "Learning it on AGH UST Couse.")
    };

    public List<Game> FavouriteGames => new List<Game>
    {
        new Game("Total War: ROME 2"),
        new Game("Arma 3"),
        new Game("Battlefield 1"),
        new Game("Battlefield 4"),
    };

    public List<Printer> Printers => new List<Printer>
    {
        new Printer("Ender 5 Pro",2020, "Cool printer for start, easy to understand and manage.")
    };

    public string SupportedFootballClub => "FC Barcelona";

}
```
```cs 
public abstract class Person<TLanguage>
{
    protected virtual string Name { get; }
    protected virtual string Surname { get; }
    protected virtual List<TLanguage> Languages { get; }
}

```
```cs 
public interface IAdditionalInformations
{
    string Nick { get; }
    string FavoriteMeal { get; }
    string FavoriteSong { get; }
}
```

```cs 
public interface ICarrer<T>
{
    bool IsStudent { get; }
    bool IsWorking { get; }
    List<T> Works { get; }
}
```

```cs 
public interface IComputerScience<TProgrammingLanguage>
{
    List<TProgrammingLanguage> ProgrammingLanguages { get; }
    List<TProgrammingLanguage> LearingProgrammingLanguages { get; }
}
```

```cs 
public interface IHobby<TGame, TPrinter>
{
    List<TGame> FavouriteGames { get; }
    List<TPrinter> Printers { get; }
    string SupportedFootballClub { get; }
}
```

```cs 
public interface IMood
{
    bool IsHappy { get; set; } 
    string WhyIsHappy { get; set; } 
}
```

```cs 
public record Language(string Name, string CEFRLevel);
```

```cs
public record ProgrammingLanguage(string Name, bool InterestedInFutureWork, string Description); 
```

```cs 
public record Game(string Name);
```

```cs 
public record Work(string Company, string Position, string Length, short Year, string[] ProgrammingLanguagesInvolved); 
```

```cs 
public record Printer(string Nmase, short BoughtInYear, string Opinion);
```



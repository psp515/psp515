```cs

namespace psp515;

public class Me : Person<Language>, IAdditionalInformations, ICarrer<Work>, IHobby<Game, Printer>, IComputerScience<ProgrammingLanguage>
{

    public IMood Mood;

    public Me(IMood mood)
    {
        /* Try to guess ;D */
        Mood = mood;
    }

    #region Overrides

    public override string Introduce() => base.Introduce()+$"{Mood.Emoji}" ;

    #endregion

    protected override string Name => "Łukasz";
    protected override string Surname => "Kolber";
    public string Nick => "psp515";

    public string FavoriteMeal => "https://en.wikipedia.org/wiki/Lasagna";
    public string FavoriteSong => "https://www.youtube.com/watch?v=xvFZjo5PgG0";

    protected override List<Language> Languages => new List<Language>
    {
        new Language("pl", "C2"),
        new Language("en", "B2 / C1")
    };

    public bool IsStudent => true;

    public bool IsWorking => false;

    public List<Work> Jobs => new List<Work>()
    {
        new Work("TECH Sterowniki", "Intern", "3 months", 2021, new string[]{"C++", "Python"})
    };

    public List<ProgrammingLanguage> ProgrammingLanguages => new List<ProgrammingLanguage>
    {
        new ProgrammingLanguage("C#", InterestedInFutureWork:true, "My first programming language, mostly used for Xamarin / .NET MAUI / console apps. I really like it."),
        new ProgrammingLanguage("Python", InterestedInFutureWork:true, "I met it a bit before studies and extended my knowledge on them."),
        new ProgrammingLanguage("C", InterestedInFutureWork:false, "I met it on studies. I didn't enjoy writing in it. Yet it really helped to understand few things."),
        new ProgrammingLanguage("C++", InterestedInFutureWork:true, "I used it on my first intersip. Fast with interesting concepts. The only downside is that it's quite old."),
        new ProgrammingLanguage("HTML/CSS/JS", InterestedInFutureWork:false, "HTML and CSS but JavaScript (TypeScript), this language sucks dynamicly typed but much worse than python."),
        new ProgrammingLanguage("Java", InterestedInFutureWork:false, "I didn't enjoy writing in it. Definitely worse than C#."),
        new ProgrammingLanguage("SQL", InterestedInFutureWork:true, "Really cool. Simple way of storing dozen of data.")
        new ProgrammingLanguage("Haskell", InterestedInFutureWork:false, "Tried a bit but I didn't like it.")
    };

    public List<ProgrammingLanguage> EnchancingSkillsInProgrammingLanguages => new List<ProgrammingLanguage>
    {
        new ProgrammingLanguage("Python", InterestedInFutureWork:true, "Working on MicroPico project and PicoLamp."),
    };

    public List<Game> FavouriteGames => new List<Game>
    {
        new Game("Total War: ROME 2"),
        new Game("Arma 3"),
        new Game("Battlefield 1"),
        new Game("Battlefield 4"),
        new Game("The Witcher 3: Wild Hunt"),
    };

    public List<Printer> Printers3D => new List<Printer>
    {
        new Printer("Ender 5 Pro", 2020, "Cool printer for start, easy to understand and manage.")
    };

    public string SupportedFootballClub => "FC Barcelona";

}
```

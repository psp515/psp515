namespace psp515.Models;

public interface IComputerScience<TProgrammingLanguage>
{
    List<TProgrammingLanguage> ProgrammingLanguages { get; }
    List<TProgrammingLanguage> LearingProgrammingLanguages { get; }
}
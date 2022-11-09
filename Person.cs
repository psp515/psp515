
namespace psp515;

public abstract class Person<TLanguage>
{
    protected virtual string Name { get; }
    protected virtual string Surname { get; }
    protected virtual List<TLanguage> Languages { get; }

    public virtual string Introduce() => $"Hi! My name is {Name}";

}
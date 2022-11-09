namespace psp515.Models;

public interface ICarrer<T>
{
    bool IsStudent { get; }
    bool IsWorking { get; }
    List<T> Works { get; }
}
<h3 align="center">
Hello There 🖐
</h3>

<p align="center">
Kraków · .NET · Software Engineer
</p>

<div align="center">

[![Page](https://img.shields.io/badge/psp515.com-0B1120?style=flat&logo=astro&logoColor=white)](https://psp515.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/psp515)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lukasz-psp515-kolber/)
[![Thingiverse](https://img.shields.io/badge/Thingiverse-248BFB?style=flat&logo=thingiverse&logoColor=white)](https://www.thingiverse.com/psp515/designs)
[![Codewars](https://img.shields.io/badge/Codewars-B1361E?style=flat&logo=codewars&logoColor=white)](https://www.codewars.com/users/psp515)
[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:kolberu@gmail.com)

[![Followers](https://img.shields.io/github/followers/psp515?style=flat&logo=github&label=Followers)](https://github.com/psp515?tab=followers)
[![Stars](https://img.shields.io/github/stars/psp515?style=flat&logo=github&label=Stars)](https://github.com/psp515?tab=repositories)
[![Public repos](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Fusers%2Fpsp515&query=%24.public_repos&style=flat&logo=github&label=Public%20repos)](https://github.com/psp515?tab=repositories)
[![Last commit](https://img.shields.io/github/last-commit/psp515/psp515?style=flat&logo=github&label=Last%20commit)](https://github.com/psp515/psp515/commits)
[![Stars given](https://img.shields.io/badge/Stars_given-112-DEA584?style=flat&logo=github&logoColor=white)](https://github.com/psp515?tab=stars)
![Visitors](https://komarev.com/ghpvc/?username=psp515&color=green&style=flat&label=Visitors)

</div>


🔧 Technologies & Tools
---

![C#](https://img.shields.io/badge/C%23-239120?style=flat&logo=dotnet&logoColor=white) 
![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=cplusplus&logoColor=white) 
![C](https://img.shields.io/badge/C-A8B9CC?style=flat&logo=c&logoColor=black) 
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=ffdd54) 
![MicroPython](https://img.shields.io/badge/MicroPython-2B2E3B?style=flat&logo=micropython&logoColor=white) 
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) 
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) 
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat&logo=openjdk&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-512BD4?style=flat&logo=dotnet&logoColor=white) 
![ASP.NET Core](https://img.shields.io/badge/ASP.NET_Core-512BD4?style=flat&logo=dotnet&logoColor=white) 
![Blazor](https://img.shields.io/badge/Blazor-512BD4?style=flat&logo=blazor&logoColor=white) 
![.NET MAUI](https://img.shields.io/badge/.NET_MAUI-512BD4?style=flat&logo=dotnet&logoColor=white) 
![Entity Framework](https://img.shields.io/badge/Entity_Framework-512BD4?style=flat&logo=dotnet&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white) 
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white) 
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) 
![CSS](https://img.shields.io/badge/CSS-663399?style=flat&logo=css&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white) 
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white) 
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat&logo=jenkins&logoColor=white)

🤵 About Me
---

```cs

namespace psp515;

public class Me : Person, IEngineer, ICreator, IStudent, IMood
{
    private IMood Mood;

    public Me(IMood mood)
    {
        // Try to guess ;D 
        Mood = mood; 
    }

    public string Name => "Łukasz";

    public string Surname => "Kolber";

    public string Nick => "psp515";

    public string Location => "Kraków, Poland";

    public List<Experience> Experiences =>
    [
        new Experience(
            "Software Engineer Intern",
            "Tech Sterowniki",
            "2021-06",
            "2021-08",
            "STM32, C/C++, serial protocols, Python."),

        new Experience(
            "Software Engineer Intern",
            "Dassault Systèmes",
            "2023-07",
            "2024-10",
            "C#, .NET, Docker, Jenkins, cloud."),

        new Experience(
            "Software Engineer",
            "Dassault Systèmes",
            "2024-10",
            "----------",
            "C#, .NET, PostgreSQL HA, queues, OpenTelemetry.")
    ];

    public List<Degree> Universities =>
    [
        new Degree(
            "AGH University of Krakow",
            "Computer Science",
            "Bachelor's Degree",
            "2021-2025"),

        new Degree(
            "Warsaw University of Technology",
            "Computer Science",
            "Master's Degree",
            "2025-2027")
    ];

    public List<Language> Languages =>
    [
        new Language("pl", "Native"),
        new Language("en", "C2")
    ];

    public List<string> OffHours =>
        ["Airsoft", "3D printing", "Cycling", "Football"];
}

```

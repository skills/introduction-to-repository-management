# Introduction to Repository Management

_Learn the basics of several GitHub features that can help support a collaborative, friendly, and healthy project._

## Description

<details>
<summary>Activity description</summary><br/>


- **Who is this for**: Developers with the need to start collaborating.
- **What you'll learn**: The different ways to protect your repository's content as more people join as collaborators.
- **What you'll build**: You will prepare Mergington High School's extracurricular activities website repository so additional teachers can safely collaborate.
- **Prerequisites**:
  - Skills exercise: [Introduction to GitHub](https://github.com/skills/introduction-to-github)
  - Skills exercise: [Communicate using Markdown](https://github.com/skills/communicate-using-markdown)
  - Skills exercise: [Review pull requests](https://github.com/skills/review-pull-requests)
- **How long**: This exercise takes less than one hour to complete.

In this exercise, you will:

1. Add a simple rulesets and configuration to restrict repository content.
1. Communicate procedures to help guide collaborators.
1. Assign responsibility of parts of the code to particular collaborators.
1. Learn the difference between collaboration in a personal repository and organization repository.
1. Establish ground rules to promote a health collaboration environment.
1. Establish a process for managing security updates.

> [!IMPORTANT]
> This exercise is meant to provide an overview of many GitHub features.
> It will provide references to learn more but not a detailed explanation for any specific subject.

### How to start this exercise

Simply copy the exercise to your account, then give your favorite Octocat (Mona) **about 20 seconds** to prepare the first lesson, then **refresh the page**.

[![](https://img.shields.io/badge/Copy%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/new?template_owner=skills&template_name=introduction-to-repository-management&owner=%40me&name=skills-introduction-to-repository-management&description=Exercise:+introduction+to+repository+management&visibility=public)

</details>

## Adding rules to the repository

<details>
<summary>Settings</summary><br/>
  
1. Access settings -> Branchs -> Add branch ruleset:

<img width="600" src="https://github.com/user-attachments/assets/d8d361a6-97ab-47c5-936f-693d59aa6ead"/>

2. Set a name -> Add status as active -> Define which branches to apply the rules to:

<img width="600" src="https://github.com/user-attachments/assets/3d53e791-2a09-4dae-81d1-c24c214d4550"/>

3. Check the following options:

<img width="600" src="https://github.com/user-attachments/assets/a33a53d5-526d-469a-8f4d-4895f1b09ef0"/>

 4. Click "Create" to create the branch protection rules:

<img width="600" src="https://github.com/user-attachments/assets/a47392f3-20c1-4540-a3f3-cd7b1e8d33b9"/>

5. You can see in "Rulesets":

<img width="600" src="https://github.com/user-attachments/assets/d1db1706-1ec3-4c6e-a0de-0af319915e62"/>

</details>

## installation

<details>
<summary>Commands</summary><br/>
  
Clone the repository:
```
git clone https://github.com/thainarapenha/introduction-to-repository-management.git
```

Install Python dependencies (backend) - Windows:

```
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

Install MongoDB locally:
- I downloaded and installed MongoDB Community Server from the [official website](https://www.mongodb.com/try/download/community)

Run backend:
```
uvicorn src.app:app --reload
```

</details>

&copy; 2025 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)

# Step 2: Prepare to collaborate

Your simple school website has become quite popular! After showing it at the last staff meeting, Ms. Rodriguez from the Art Club and Mr. Chen from the Chess Club came up to you super excited. They have tons of ideas for new features!

- Ms. Rodriguez wants to add a photo gallery
- Mr. Chen dreams of adding a tournament bracket system for the chess/sports activities! 🎨♟️

While you're thrilled about their enthusiasm, you realize you need to set up some guidelines before letting them start changing code. The last thing you want is conflicting changes breaking the registration system right before spring break!

Opening your project to other teachers at Mergington High means thinking about how everyone will collaborate together without breaking each other's code.

**Collaborators** are the people you have granted write access to the project through repository settings.

- Provide other people permissions to change project files while still protecting repository settings.
- Personal repositories have simple permissions. Organization repositories allow flexible permissions such as read, write, maintain, and admin.

To help with collaboration, GitHub provides two special files:

1. **`CONTRIBUTING.md` file** - A "How to Help" guide. Some example content:

   - How to prepare a developer setup of the extra-curricular activities website.
   - The process for suggesting changes.
   - The project's coding style preference, to keep things consistent.
   - How to ask for help when stuck.

1. **`CODEOWNERS` file** - Assign specific people or teams responsible for a portion of the project.

   - When someone creates a pull request, GitHub will automatically ask the right person to review it.

## ⌨️ Activity: Create a welcoming contribution guide

The IT Club meeting is tomorrow, and you need to prepare for Ms. Rodriguez and Mr. Chen to join the project. Let's start a document to help them contribute effectively.

1. At the top navigation, return to the **Code** tab. Ensure you are on the `prepare-to-collaborate` branch.

   <img width="350" alt="image showing the correct branch" src="https://github.com/user-attachments/assets/68cd1e7a-1b34-47eb-9f0b-095d47442b12" />

1. In the top directory, create a new file called `CONTRIBUTING.md` (case sensitive).

1. Add a welcoming message.

   ```md
   # Contributing to the Mergington High Extra-Curricular Activities Website

   Thank you for your interest in helping improve our school's website!
   Whether you want to add your club's activities, fix a bug, or suggest
   new features, this guide will help you get started. 🎉
   ```

1. Add instructions to help teachers quickly start developing.

   ```md
   ## Development Setup

   1. Clone the repository to your computer.
   2. Install Python requirements: `pip install -r requirements.txt`.
   3. Run the development server: `python src/app.py`.
   4. Visit http://localhost:8000 in your browser to see the website.

   ## Making Changes

   1. Create a new branch for your changes.
      - Use descriptive names like `art-gallery-feature` or `fix-chess-signup`
   2. Make your changes and test them locally with sample student data.
      - Use the MongoDB extension to preview the included sample date.
   3. Push your branch and create a pull request.
   4. Wait for review and address any feedback.

   ## Code Style

   - Follow PEP 8 for Python code (backend).
   - Use clear, descriptive variable names (student_name, start_time, etc.)
   - Add comments to describe blocks of logic.
   ```

1. Add a section for getting help.

   ```md
   ## Need help or have ideas?

   - Check the open issues first.
     - If your problem is there, add a comment or up-vote.
     - If not there, create a new issue. Be as descriptive as possible.
   - Ask in our weekly IT Club office hours (Thursdays at lunch in Room 203).
   - For other general problems, email the tech team at techclub@mergingtonhigh.example.edu
   ```

1. In the top right, use the **Commit changes...** button and commit your changes directly to `prepare-to-collaborate` branch.

## ⌨️ Activity: Assign code ownership

With others joining the fun, you want to stay involved on anything affecting architecture and core functionality. Let's assign you to the related files.

1. At the top navigation, return to the **Code** tab. Ensure you are on the `prepare-to-collaborate` branch.

1. In the top directory, create a new file called `CODEOWNERS` (case sensitive and no extension).

1. Add the following content:

   ```codeowners
   # Core functionality - changes here should be rare!
   /src/app.py                   @{{ login }}
   /src/backend/database.py      @{{ login }}
   /src/backend/routers/auth.py  @{{ login }}

   # The frontend will need refactored soon to be more object oriented.
   /src/static/   @{{ login }}
   ```

1. In the top right, use the **Commit changes...** button and commit your changes directly to `prepare-to-collaborate` branch.

1. With the files committed, wait a moment for Mona to check your work, provide feedback, and share the next lesson.

## ⌨️ Activity: (Optional) Add your first collaborator

Ready to let your colleague start working on that photo gallery feature? Let's do it!

> [!IMPORTANT]
> This step is optional because it requires another person with a GitHub account to participate.

1. In the top navigation, select the **Settings** tab.

1. In the left navigation, select **Collaborators**.

1. Find the **Manage access** area and click the **Add people** button.

   <img width="350" alt="" src="https://github.com/user-attachments/assets/686c32c6-11c2-4e69-bad1-39062d5b4376" />

1. Enter a friend/colleague's GitHub username or email then press the **Add to repository** button.

   <img width="350" alt="" src="https://github.com/user-attachments/assets/d0eaf344-baf0-4a9c-9291-c11e7a9fdaa3" />

> [!IMPORTANT]
> Personal repositories only have one collaboration role type. A "collaborator" receives **write** permissions but NOT **admin** permissions. If you need finer permissions, consider starting a free [organization](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/about-organizations) and assigning [repository roles](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization).

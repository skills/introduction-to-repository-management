# Step 2: Prepare to collaborate

_Your simple school website has become quite popular! After showing it at the last staff meeting, Ms. Rodriguez from the Art Club and Mr. Chen from the Chess Club came up to you super excited. They have tons of ideas for new features - Ms. Rodriguez wants to add a virtual art gallery, and Mr. Chen dreams of an interactive chess tournament bracket system! 🎨♟️_

_While you're thrilled about their enthusiasm, you realize you need to set up some guidelines before letting them dive into the code. The last thing you want is conflicting changes breaking the club registration system right before the big school fair! 📚_

## Theory

Opening your project to other teachers at Mergington High means thinking about how everyone will work together without stepping on each other's toes. For a successful collaboration, GitHub provides two special files:

1. `CONTRIBUTING.md` - Think of this as your "How to Help" guide that tells other teachers:

   - How to set up the extra-curricular activities website on their computers
   - The steps for suggesting changes (like adding their club's features!)
   - Your coding style preferences (to keep things consistent)
   - Where to ask for help when stuck

2. `CODEOWNERS` - This is like assigning "department heads" for different parts of the website. When someone wants to change something in a specific area (like the event calendar or the club registration system), GitHub will automatically ask the right person to review it.

> ❕ **Important:** While your school has a GitHub organization account, Principal Martinez suggested keeping the project in your personal repository for now, since you're still in the initial development phase.

## Activity 1: Create a welcoming contribution guide

The IT Club meeting is tomorrow, and you need to prepare for Ms. Rodriguez and Mr. Chen to join the project. Let's create a `CONTRIBUTING.md` file:

1. In your `prepare-to-collaborate` branch, create a new file called `CONTRIBUTING.md`
2. Add the following content:

   ```markdown
   # Contributing to the Mergington High Extra-Curricular Activities Website

   Thank you for your interest in helping improve our school's website! Whether you want to add your club's activities, fix a bug, or suggest new features, this guide will help you get started. 🎉

   ## Development Setup

   1. Clone the repository to your computer
   2. Install Python requirements: `pip install -r requirements.txt`
   3. Run the development server: `python src/app.py`
   4. Visit http://localhost:5000 in your browser to see the club registration system

   ## Making Changes

   1. Create a new branch for your changes
      - Use descriptive names like `art-gallery-feature` or `fix-chess-signup`
   2. Make your changes and test them locally with sample student data
   3. Push your branch and create a pull request
   4. Wait for review and address any feedback

   ## Code Style

   - Follow PEP 8 for Python code in the club management backend
   - Use clear, descriptive variable names (studentName, clubRegistration, etc.)
   - Add comments for complex logic in the registration system
   - Test your changes before submitting to ensure student data handling works correctly

   ## Need Help?

   - Create an issue describing what you're trying to do
   - Ask in our weekly IT Club office hours (Thursdays at lunch in Room 203)
   - Email the tech team at techclub@mergingtonhigh.example.edu
   ```

## Activity 2: Assign code ownership

Now that Ms. Rodriguez and Mr. Chen are eager to contribute to the website, you need to make sure critical parts of the codebase get proper review. As the original developer, you should remain the primary reviewer for the core functionality:

1. In your `prepare-to-collaborate` branch, create a new file called `CODEOWNERS`
2. Add the following content (replace YOUR_USERNAME with your GitHub username):

   ```
   # Core website functionality - changes here could affect all clubs' registration systems!
   /src/app.py @YOUR_USERNAME

   # Database and student data models - we need to be extra careful with student information
   /src/models/ @YOUR_USERNAME

   # Frontend styling and assets - where Ms. Rodriguez's art gallery will live!
   /src/static/ @YOUR_USERNAME
   ```

## Optional Activity: Add your first collaborator

Ready to let Ms. Rodriguez start working on that art gallery feature for the upcoming student showcase?

1. Go to your repository's Settings tab
2. Click on "Collaborators and teams" in the sidebar
3. Click "Add people"
4. Enter Ms. Rodriguez's GitHub username or email address
5. Select "Write" access so she can suggest changes to the website's frontend

> 💡 **Tip:** Start with one club sponsor at a time - maybe Ms. Rodriguez for the art gallery feature. This will help you get comfortable reviewing changes before the Chess Club, Drama Club, and others start submitting their own feature requests.

When you've completed these activities, commit your changes to the `prepare-to-collaborate` branch so you can show your progress at tomorrow's IT Club meeting.

## What's next?

With contribution guidelines in place and code ownership set up, your fellow teachers can start working on their exciting new features safely! In the next step, we'll add some important files to make the project even more collaboration-friendly and set ground rules for everyone to follow so the website remains stable as more clubs come on board. 🤝

### References

- [Setting guidelines for repository contributors](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)
- [About code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [Repository roles for an organization](https://docs.github.com/organizations/managing-user-access-to-your-organizations-repositories/repository-roles-for-an-organization)

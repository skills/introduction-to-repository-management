# Step 1: Protect your code

It's been a busy month at Mergington High! Your simple website for managing extra-curricular activities has really taken off. What started as a basic sign-up form for a few activities has grown into the go-to place for half the school activities. 📚✨

Principal Martinez was so impressed with your work that they announced at the last staff meeting that ALL clubs should start using the website. While this is exciting, you're a bit nervous - the last thing you want is an accidental change breaking the system right before the big Fall Activities Fair! 😰

When more teachers start helping with the Mergington High activities website, it's important to add some safeguards. Thankfully, GitHub provides several ways to protect your repository:

1. **Repository Rulesets** - These provide safeguards to limit:

   - Pushing code directly to important branches
   - Deleting or renaming branches
   - Force pushing (which can overwrite history)
   - (and much more)

1. **`.gitignore`** - This special file tells Git which files it should NOT track, like:

   - Temporary files that your code creates while running
   - Secret configuration files with sensitive information
   - System files that other developers don't need

> [!TIP]
> Think of these settings like the editorial process of a school yearbook. Various student committees will take photos and write articles, then the yearbook president will make adjustments to make sure everything flows together properly. Finally, a teacher/advisor will sign off that all content is appropriate.

## ⌨️ Activity: Add a branch ruleset

Now let's add some protections so that no one accidentally breaks the club registration system:

1. In the top navigation, select the **Settings** tab.

1. In the left navigation, expand the **Rules** area and select **Rulesets**.

1. Click the **New ruleset** dropdown and select **New branch ruleset**.

   <img width="350" alt="image" src="https://github.com/user-attachments/assets/1e9fd519-1421-4d6b-b654-a3fe53a8fb75" />

1. Set the **Ruleset Name** as `Protect main` and change the **Enforcement status** to `Active`.

   <img width="350" alt="image" src="https://github.com/user-attachments/assets/ce30fd34-39b5-4e22-b348-4af61fd05cd1" />

1. Locate the the **Targets** section. Use the **Add target** dropdown to add 2 entries:

   1. Add the **Include default branch** option to ensure protections aren't bypassed by switching the default branch.

      <img width="300" alt="image" src="https://github.com/user-attachments/assets/217263cc-d5c2-4ac0-b03c-a72494e5c812" />

   1. Use the **include by pattern** option and enter the pattern `main`.

      <img width="300" alt="image" src="https://github.com/user-attachments/assets/47a835de-62dc-4f34-96d8-c2562f03af1a" />

      <img width="300" alt="image" src="https://github.com/user-attachments/assets/ddc52767-d93e-4c9e-a77a-90c3b5c08fb5" />

1. Locate the **Rules** section. Ensure the following items are checked.
   - [x] Restrict deletions
   - [x] Require a pull request before merging
     - Required approvals: `1`
     - [x] Require review from Code Owners (explained in next step)
   - [x] Require status checks to pass before merging

## ⌨️ Activity: Create a `.gitignore` file

Let's start by making sure we don't accidentally commit files:

1. If necessary, open another tab and navigate to this repository. We will start on the **Code** tab.

1. Above the list of files, select the **branch dropdown menu**.

1. Create a new branch with the name `prepare-to-collaborate`.

   <img width="300" alt="image" src="https://github.com/user-attachments/assets/1c04a3e4-e492-4857-9527-2b43908a1da1"/>

1. Above the list of files, click the **Add file** dropdown and select **Create new file**.

   <img width="300" alt="New file button" src="https://github.com/user-attachments/assets/8f3f8da8-1471-485a-9df5-8c03ecba2d8e"/>

1. Enter the file name `.gitignore` and copy following example content into it.

   <img width="300" alt="preview of new file" src="https://github.com/user-attachments/assets/580d1a63-a264-4d44-8901-50ad708b8822"/>

   ```gitignore
   # Python backend for club management
   __pycache__/
   *.py[cod]      # Python compiled files
   *$py.class
   *.so
   .Python
   env/
   .env           # Where database passwords are stored
   venv/          # Virtual environment for testing
   .venv

   # Teacher IDE settings
   .vscode/       # Ms. Rodriguez uses VS Code
   .idea/         # Mr. Chen uses PyCharm

   # Local development & testing
   instance/
   .pytest_cache/
   .coverage      # Test coverage reports
   htmlcov/

   # Staff computer files
   .DS_Store      # For teachers with Macs
   Thumbs.db      # For teachers with Windows
   ```

1. In the top right, select the **Commit changes...** button. Notice that it won't let us commit to the `main` branch! Nice!

   <img width="400" alt="image" src="https://github.com/user-attachments/assets/4e85948d-75c8-4c13-8ddd-4707bf9b0805" />

1. Enter `prepare-to-collaborate` for the branch name then click the **Propose changes** button.

1. With the file committed, wait a moment for Mona to check your work, provide feedback, and share the next lesson.

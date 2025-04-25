# Step 1: Protect your code

It's been a busy month at Mergington High! Your simple website for managing extra-curricular activities has really taken off. What started as a basic sign-up form for a few activities has grown into the go-to place for half the school activities. 📚✨

Principal Martinez was so impressed with your work that they announced at the last staff meeting that ALL clubs should start using the website. While this is exciting, you're a bit nervous - the last thing you want is an accidental change breaking the system right before the big Fall Activities Fair! 😰

## Theory

When more teachers start helping with the Mergington High activities website, it's important to add some safeguards. Thankfully, GitHub provides several ways to protect your repository:

1. **`.gitignore`** - This special file tells Git which files it should NOT track, like:

   - Temporary files that your code creates while running
   - Secret configuration files with sensitive information
   - System files that other developers don't need

2. **Repository Rulesets** - These provide safeguards to limit:
   - Pushing code directly to important branches
   - Deleting or renaming branches
   - Force pushing (which can overwrite history)
   - (and much more)

> [!NOTE]
> Think of these protections like the editorial process of the Mergington High yearbook. Just as Ms. Peterson reviews all photos and articles before publishing in the yearbook (to prevent typos or inappropriate content), rulesets ensure changes are reviewed before the website is published.

## ⌨️ Activity: Create a `.gitignore` file

Let's start by making sure we don't accidentally commit files:

1. If necessary, open another tab and navigate to this repository. We will start on the **Code** tab.

1. Above the list of files, select the **branch dropdown menu**.

1. Create a new branch with the name `prepare-to-collaborate`.

   <img width="300" alt="image" src="https://github.com/user-attachments/assets/1c04a3e4-e492-4857-9527-2b43908a1da1" />

1. Above the list of files, click the **Add file** dropdown and select **Create new file**.

   <img width="350" alt="New file button" src="https://github.com/user-attachments/assets/8f3f8da8-1471-485a-9df5-8c03ecba2d8e"/>

1. Enter the file name `.gitignore` and copy following example content into it.

   <img width="400" alt="preview of new file" src="https://github.com/user-attachments/assets/580d1a63-a264-4d44-8901-50ad708b8822"/>

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


Now let's add some protections so that no one accidentally breaks the club registration system:

1. Go to your repository's Settings tab
2. Click "Branches" in the left sidebar
3. Under "Branch protection rules", click "Add rule"
4. For "Branch name pattern" enter `main` (this is where the live website runs)
5. Check these options:
   - ✓ "Require a pull request before merging" (so you can review changes to the club website)
   - ✓ "Require approvals" (set it to 1 - you'll need to approve all changes)
   - ✓ "Dismiss stale pull request approvals when new commits are pushed" (to ensure you review the final version)
   - ✓ "Require status checks to pass before merging" (to make sure the club website still works)

> 💡 **Tip:** Think of these settings like the field trip permission forms at Mergington High - just as Ms. Martinez needs to sign off before students leave campus, you'll need to approve code before it affects the live website!

When you've completed the activities, commit your new `.gitignore` file to the `add-protections` branch.

## What's next?

Now that we've protected the Mergington High activities website, we can start setting up guidelines to help your fellow teachers contribute new features for their clubs. In the next step, we'll create documents that explain how they can add new features (like Ms. Rodriguez's art gallery and Mr. Chen's chess tournament system) without breaking the existing registration system. 📝

### References

- [Ignoring files](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files)
- [About protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)
- [Managing a branch protection rule](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule)

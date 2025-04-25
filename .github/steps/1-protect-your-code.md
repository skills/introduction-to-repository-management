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


## Activity 1: Create a .gitignore file for the club website

Let's start by making sure we don't accidentally commit files we shouldn't:

1. Create a new branch called `add-protections` from `main`
2. Create a new file called `.gitignore`
3. Add the following content:

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

## Activity 2: Protect the school website from accidental changes

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

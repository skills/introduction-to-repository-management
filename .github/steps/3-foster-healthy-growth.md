# Step 3: Foster healthy growth

_The word has spread throughout Mergington High! After the last IT Club meeting, even more teachers want to join your project. Ms. Williams from the Drama Club is planning a ticket reservation system, Coach Taylor wants to track sports team attendance, and Mr. Garcia from the Science Club needs a way to organize the upcoming Science Fair participants._ 🎭 🏀 🔬

_With so many eager contributors, Principal Martinez pulled you aside after morning announcements: "Your website is becoming critical school infrastructure! We need to make sure it grows in a healthy way as more teachers join. Can you add some guidelines to keep everything organized?"_

## Theory

As your extra-curricular activities website grows, you'll need more than just technical protections and contribution guides. Here are three important elements for fostering a healthy project:

1. **Code of Conduct** - This document sets expectations for how community members should interact. Think of it like the Student Handbook at Mergington High - it outlines respectful behavior, how to report problems, and consequences for violations.

2. **Issue Templates** - These provide structure when someone reports a problem or suggests a new feature. Just like how the school office has different forms for different requests (absence notes, field trip permission slips, etc.), issue templates guide contributors to provide the right information.

> ❕ **Important:** These files don't just help new contributors; they protect your project and its users (in this case, the students and teachers at Mergington High)!

## Activity 1: Create a Code of Conduct

Let's start by establishing some community guidelines for your growing team of teacher-contributors:

1. Create a new branch called `foster-healthy-growth` from `main`
2. Create a new file called `CODE_OF_CONDUCT.md` at the root of your repository
3. Add the following content:

   ```markdown
   # Mergington High School Code of Conduct

   ## Our Pledge

   In the interest of fostering an open and welcoming environment for our school community, we as contributors and maintainers pledge to make participation in the Extra-Curricular Activities project a respectful and harassment-free experience for everyone.

   ## Our Standards

   Examples of behavior that contributes to creating a positive environment include:

   - Using welcoming and inclusive language
   - Being respectful of differing viewpoints and experiences
   - Gracefully accepting constructive criticism
   - Focusing on what is best for the students and the school community
   - Showing empathy towards other community members

   Examples of unacceptable behavior include:

   - The use of inappropriate language or imagery
   - Trolling, insulting comments, and personal attacks
   - Public or private harassment
   - Publishing others' private information without explicit permission
   - Other conduct which could reasonably be considered inappropriate in a school setting

   ## Responsibilities

   Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

   Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, issues, and other contributions that are not aligned to this Code of Conduct.

   ## Scope

   This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or the school. Examples of representing the project include using an official project email address, posting via an official social media account, or acting as an appointed representative at an online or offline event.

   ## Enforcement

   Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the IT Club faculty advisor. All complaints will be reviewed and investigated promptly and fairly.

   Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by the school administration.

   ## Attribution

   This Code of Conduct is adapted from the [Contributor Covenant](https://www.contributor-covenant.org), version 1.4, available at [https://www.contributor-covenant.org/version/1/4/code-of-conduct.html](https://www.contributor-covenant.org/version/1/4/code-of-conduct.html)
   ```

## Activity 2: Create Issue Templates

Now let's create templates so other teachers can report bugs or request features in a standardized way:

1. In your `foster-healthy-growth` branch, create a new directory at `.github/ISSUE_TEMPLATE`
2. In that directory, create a file called `bug_report.md` with:

   ```markdown
   ---
   name: Bug Report
   about: Create a report to help us improve the Extra-Curricular Activities website
   title: "[BUG] "
   labels: bug
   assignees: ""
   ---

   **Describe the bug**
   A clear and concise description of what the bug is.

   **To Reproduce**
   Steps to reproduce the behavior:

   1. Go to '...'
   2. Click on '...'
   3. Scroll down to '...'
   4. See error

   **Expected behavior**
   A clear and concise description of what you expected to happen.

   **Screenshots**
   If applicable, add screenshots to help explain your problem.

   **Device Information (please complete the following information):**

   - Device: [e.g. School Computer, Personal Laptop, Tablet]
   - Browser: [e.g. Chrome, Safari, Firefox]
   - Operating System: [e.g. Windows, macOS, iOS]

   **Additional context**

   - Which club/activity were you working with?
   - Were any students affected by this issue?
   - Is this blocking an upcoming event?
   ```

3. In the same directory, create a file called `feature_request.md` with:

   ```markdown
   ---
   name: Feature Request
   about: Suggest a new feature for the Extra-Curricular Activities website
   title: "[FEATURE] "
   labels: enhancement
   assignees: ""
   ---

   **Is your feature request related to a problem? Please describe.**
   A clear and concise description of what the problem is. Ex. My club needs a way to [...]

   **Describe the solution you'd like**
   A clear and concise description of what you want to happen.

   **Describe alternatives you've considered**
   A clear and concise description of any alternative solutions or features you've considered.

   **Which club or activity would benefit from this feature?**
   Let us know which club(s) or school activities need this feature.

   **What is the timeline for this feature?**
   Is this needed for an upcoming event? By when?

   **Additional context**
   Add any other context or screenshots about the feature request here.
   ```

When you've completed these activities, commit your changes to the `foster-healthy-growth` branch and create a pull request. These files will provide a strong foundation for healthy collaboration as more teachers join your project!

## What's next?

With these community guidelines and issue templates in place, Mergington High's extra-curricular activities website is now ready to welcome a larger group of teacher-contributors. In the next step, we'll explore how to prepare for security challenges and establish a process for managing security updates! 🚀

### References

- [Adding a code of conduct to your project](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)
- [Configuring issue templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)

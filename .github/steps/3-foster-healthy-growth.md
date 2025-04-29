# Step 3: Foster healthy growth

With so many eager contributors, Principal Martinez pulled you aside after morning announcements: "Your website is becoming critical school infrastructure! We need to make sure it grows in a healthy way as more teachers join. Can you add some guidelines to keep everything organized?"

As your extra-curricular activities website grows, you'll need more than just technical protections and contribution guides. You'll also have to encourage healthy and constructive communication.

Let's look at a couple ways to do that:

1. **Code of Conduct** - This document sets expectations for how community members should interact. Think of it like the Student Handbook at Mergington High - it outlines respectful behavior, how to report non-technical problems, and consequences for violations.

2. **Issue Templates** - These provide structure when someone reports a problem or suggests a new feature. They can help the community effectively communicate their needs for new features and provide enough information to solve bugs.

## ⌨️ Activity: Set expectations with a Code of Conduct

Let's start by establishing some community guidelines for your growing team of teacher-contributors.

> [!TIP]
> The [Contributor Covenant](https://www.contributor-covenant.org/) is a popular code of conduct used by many projects.

1. At the top navigation, return to the **Code** tab. Ensure you are on the `prepare-to-collaborate` branch.

1. In the top directory, create a new file called `CODE_OF_CONDUCT.md` (case sensitive).

1. Add the following content:

   ```markdown
   # Mergington High School Code of Conduct

   ## Our Pledge

   In the interest of fostering an open and welcoming environment for
   our school community, we as contributors and maintainers pledge to
   make participation in the Extra-Curricular Activities project a
   respectful and harassment-free experience for everyone.

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

   Project maintainers are responsible for clarifying the standards of
   acceptable behavior and are expected to take appropriate and fair
   corrective action in response to any instances of unacceptable behavior.

   Project maintainers have the right and responsibility to remove, edit,
   or reject comments, commits, code, issues, and other contributions that
   are not aligned to this Code of Conduct.

   ## Scope

   This Code of Conduct applies both within project spaces and in public spaces
   when an individual is representing the project or the school. Examples of
   representing the project include using an official project email address,
   posting via an official social media account, or acting as an appointed
   representative at an online or offline event.

   ## Enforcement

   Instances of abusive, harassing, or otherwise unacceptable behavior may be
   reported to the IT Club faculty advisor. All complaints will be reviewed and
   investigated promptly and fairly.

   Project maintainers who do not follow or enforce the Code of Conduct in good faith may
   face temporary or permanent repercussions as determined by the school administration.

   ## Attribution

   This Code of Conduct is adapted from the [Contributor Covenant](https://www.contributor-covenant.org),
   version 1.4, available at [https://www.contributor-covenant.org/version/1/4/code-of-conduct.html](https://www.contributor-covenant.org/version/1/4/code-of-conduct.html)
   ```

1. In the top right, use the **Commit changes...** button and commit your changes directly to `prepare-to-collaborate` branch.

## ⌨️ Activity: Communicate easier with issue templates

Now let's create templates so other teachers can report bugs or request features in a standardized way.

> [!TIP]
> You might consider trying the public preview for [issue forms](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms), which provide a friendlier user experience when creating issues.

1. In the top navigation, select the **Settings** tab.

1. Find the **Features** section and verify **Issues** is enabled.

   <img width="350" alt="" src="https://github.com/user-attachments/assets/dafb976b-4b8c-4c5e-8989-04d3e7bbe70d" />

1. Click the **Set up templates** button to enter the issue templates editor.

   <img width="350" alt="image" src="https://github.com/user-attachments/assets/bd94af1e-d564-472f-a435-f12fa1bf3b5c" />

1. Click the **Add template** dropdown and select **Bug report**.

   <img width="350" alt="" src="https://github.com/user-attachments/assets/baee263d-b233-4029-b629-9544eacf1e27" />

1. Click the **Preview and edit** button to show the current template. Click the **Edit icon** (pencil) to make the fields editable.

   <img width="350" alt="image" src="https://github.com/user-attachments/assets/1c8500f7-10b2-406b-9385-d5b9480e2f71" /><br/>

   <img width="350" alt="image" src="https://github.com/user-attachments/assets/77e312e2-af3c-4015-94f0-b1cf7409cc40" /><br/>

   <img width="700" alt="image" src="https://github.com/user-attachments/assets/c2aecd6e-d021-4149-b088-7cbf883a7e33" />

1. (Optional) Let's keep it simple for our students and fellow teachers. Remove the sections about Desktop and Smartphone details.

1. Repeat the above steps for the "Feature request" template.

   <img width="350" alt="image" src="https://github.com/user-attachments/assets/6456e261-fcd8-4845-b1ab-f2c2d5883c77" />

1. With our templates prepared, let's commit them. In the top right, click the **Propose changes** button. Enter a description and set the branch to `add-issue-templates`, then click **Commit changes**. You can ignore the automatically created pull request.

   <img width="350" alt="image" src="https://github.com/user-attachments/assets/a00a3740-ce0c-430c-9541-e56b7d9b45d6" />

1. With the files committed, wait a moment for Mona to check your work, provide feedback, and share the next lesson.

> [!TIP]
> Did you notice that you are working in parallel on 2 branches now? That's exactly what working with multiple collaborators is like.

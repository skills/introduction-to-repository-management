# Step 4: Prepare for the inevitable

As you settle into the teachers' lounge with your coffee, you realize something: With more and more teachers contributing to the code, it's only a matter of time before security vulnerabilities creep in. 😱

Every codebase, no matter how well-maintained, will eventually face security challenges. Let's try to proactively prepare for that day by configuring a few tools GitHub offers:

1. **Dependabot** - Track and create alerts for vulnerabilities found in upstream dependencies used in your project. Automatically create pull requests to upgrade dependencies to safe versions.

1. **Code Scanning** - Analyze your repository's code to find security vulnerabilities and coding errors. Use GitHub Copilot Autofix to automatically suggest fixes for these alerts.

1. **Security Policy and Private vulnerability reporting** - Provide a guide and simple form for security researchers and end users to responsibly report vulnerabilities directly to the repository maintainer. This prevents sensitive issues from being publicly disclosed before they're fixed.

> [!NOTE]
> This is just a quick setup guide. For a more detailed setup of each service, we recommend the related GitHub Skills exercises and/or GitHub documentation.

## ⌨️ Activity: Automate security updates with Dependabot

Let's configure Dependabot to use default settings and automatically combine fixes for open alerts, and create pull requests. This will allow us to stay up to date with very little overhead! Nice!

> [!TIP]
> For a deeper dive, check out the [Secure Repository Supply Chain](https://github.com/skills/secure-repository-supply-chain) Skills exercise!

1. In the top navigation, select the **Settings** tab.

1. In the left navigation, select **Advanced Security**.

1. Find the **Dependabot** section. Verify or change the settings to match the following:

   - **Dependabot alerts**: `enabled`
   - **Dependabot security updates**: `enabled`
   - **Grouped security updates**: `enabled`
   - **Dependabot on Actions runners**: `enabled`

1. Find **Dependabot version updates** and click the **Enable** button. This will open an editor to create a configuration file.

   <img width="350" alt="image" src="https://github.com/user-attachments/assets/a4d7ae19-0439-4b78-bcbf-9fce5c5410ff" />

1. In the left files list, at the top, click the **Expand file tree** button to show the list of files. At the top, change the branch to `prepare-to-collaborate`. Remember, our ruleset won't let us directly change files on `main`.

   <img width="500" alt="image" src="https://github.com/user-attachments/assets/18a3cd1a-75ab-4e5e-a4c4-efd175d91ced" />

1. Set the `package-ecosytem` to `pip` so Dependabot will automatically monitor our Python requirements.

   <img width="500" alt="image" src="https://github.com/user-attachments/assets/0bc90e67-4b71-4780-8272-20dc0fff5c4c" />

1. In the top right, use the **Commit changes...** button and commit your changes directly to `prepare-to-collaborate` branch.

## ⌨️ Activity: Detect dangerous patterns with code scanning

None of us at the high school are professional software developers. Let's enable code scanning to alert us if we are potentially doing something unsafe. And, let's configure GitHub Copilot to create pull requests with solutions.

> [!TIP]
> Want to learn more about code scanning and writing custom queries? Check out the [Introduction to CodeQL](https://github.com/skills/introduction-to-codeql) Skills exercise after you finish this one!

1. In the top navigation, select the **Settings** tab.

1. In the left navigation, select **Advanced Security**.

1. Find the **Code scanning** section. Click the **Set up** button and select the **Default** option to open a configuration panel.

   <img width="350" alt="image" src="https://github.com/user-attachments/assets/5b3a89e5-c71a-44d9-b917-d1a21dc52181" />

1. Click the **Enable CodeQL** button to accept the default configuration.

   <img width="350" alt="image" src="https://github.com/user-attachments/assets/6d5f7164-d8ed-4b5d-bbcf-8aed9e7acc5d" />

1. Below the **Tools** section. Verify **Copilot Autofix** is set to `On`.

   <img width="350" alt="image" src="https://github.com/user-attachments/assets/b9d57e7a-f392-4c51-b137-f205a77adb79" />

## ⌨️ Activity: Provide a safe path for security findings

Now that the automated options are ready, let's create a guide for real-life humans to report any security vulnerabilities they find in a safe way.

1. In the top navigation, select the **Settings** tab.

1. In the left navigation, select **Advanced Security**.

1. Find the **Private vulnerability reporting** setting and verify it is `enabled`.

1. At the top navigation, click the **Security** tab.

1. In the left navigation, click the **Policy** option.

1. Click the **Start setup** button. An editor will be started to create the file `SECURITY.md`.

   <img width="350" alt="" src="https://github.com/user-attachments/assets/183b9fcc-1521-47fd-8165-b476a8ccb370"/><br/>

   <img width="350" alt="" src="https://github.com/user-attachments/assets/36c272d1-bc4a-48c8-b234-56173a214cdb"/>

1. In the left files list, at the top, click the **Expand file tree** button to show the list of files. At the top, change the branch to `prepare-to-collaborate`. Remember, our ruleset won't let us directly change files on `main`.

1. We will ignore the provided template and instead use a recommendation from Mergington High School's IT department. Add the following content:

   > 💡**Tip** If you switch to a branch that does not contain the same file, the editor will become empty. Press the **Restore** button to retrieve the previous editor's content.

   ```markdown
   # Mergington High School Security Policy

   ## Reporting a Vulnerability

   At Mergington High, we take the security of our Extra-Curricular Activities website seriously, especially
   since it contains student information. If you discover a security vulnerability, please follow these steps:

   1. **Do not** create an issue on this repository, disclose the vulnerability publicly, or discuss it with other teachers/students.
   1. In the top navigation of this repository, click the **Security** tab.
   1. In the top right, click the **Report a vulnerability** button.
   1. Fill out the provided form. It will request information like:
      - A description of the vulnerability
      - Steps to reproduce the issue
      - Potential impact on student data or website functionality
      - Suggested fix (if you have one)
   1. Email the IT Club faculty advisor at techsupport@mergingtonhigh.example.edu and inform them you have made a report. **Do not** include any vulnerability details.

   ## Response Timeline

   - We will acknowledge receipt of your report within 2 school days
   - We will provide an initial assessment within 5 school days
   - Critical issues affecting student data will be addressed immediately
   - We will create a private fork to solve the issue and invite you as a collaborator so you can see our progress and contribute.

   ## Thank You

   Your help in keeping our school's digital resources secure is greatly appreciated!
   Responsible disclosure of security vulnerabilities helps protect our entire school community.
   ```

1. In the top right, use the **Commit changes...** button and commit your changes directly to `prepare-to-collaborate` branch.

1. With the files committed, wait a moment for Mona to check your work, provide feedback, and share the next lesson.

# Step 4: Prepare for the inevitable

As you settle into the teachers' lounge with your coffee, you realize something: With more and more teachers contributing to the code, it's only a matter of time before security vulnerabilities creep in. 😱

Every codebase, no matter how well-maintained, will eventually face security challenges. Let's try to proactively prepare for that day by configuring a few tools GitHub offers:

1. **Dependabot** - Track and create alerts for vulnerabilities found in upstream code like our python and javascript libraries.

1. **Code Scanning** - Identify dangerous coding patterns that can cause vulnerabilities.

1. **Security Policy** - A clear policy helps users know how to report security vulnerabilities responsibly. This prevents sensitive issues from being publicly disclosed before they're fixed.

> [!NOTE]
> This is just a quick setup guide. For a more detailed setup of each service, we recommend the related GitHub Skills exercises and/or GitHub documentation.

## ⌨️ Activity: Automate security updates with Dependabot

Let's configure Dependabot to use default settings and automatically combine fixes for open alerts, and create pull requests. This will allow us to stay up to date with very little overhead! Nice!

> [!TIP]
> For a deeper dive, check out the [Secure Repository Supply Chain](https://github.com/skills/secure-repository-supply-chain) Skills exercise!

1. In the top navigation, select the **Settings** tab.

1. In the left navigation, select **Code Security**.

1. Find the **Dependabot** section. Verify or change the settings to match the following:

   - **Dependabot alerts**: `enabled`
   - **Dependabot security updates**: `enabled`
   - **Grouped security updates**: `enabled`
   - **Dependabot on Actions runners**: `enabled`

1. Find **Dependabot version updates** and click the **Enable** button. This will open an editor to save the settings.

   <img width="350" alt="image" src="https://github.com/user-attachments/assets/a4d7ae19-0439-4b78-bcbf-9fce5c5410ff" />

1. In the left files list, at the top, change the branch to `prepare-to-collaborate`. Remember, our ruleset won't let us directly change files on `main`.

   <img width="500" alt="image" src="https://github.com/user-attachments/assets/074db7d4-6088-4c5e-9a8b-158b651b345e" />

1. Set the `package-ecosytem` to `pip` so Dependabot will automatically monitor our Python requirements.

   <img width="500" alt="image" src="https://github.com/user-attachments/assets/0bc90e67-4b71-4780-8272-20dc0fff5c4c" />

1. In the top right, use the **Commit changes...** button to save your changes.

## ⌨️ Activity: Detect dangerous patterns with code scanning

None of us at the high school are professional software developers. Let's enable code scanning to alert us if we are potentially doing something unsafe. And, let's configure GitHub Copilot to create pull requests with solutions.

> [!TIP]
> Want to learn more about code scanning and writing custom queries? Check out the [Introduction to CodeQL](https://github.com/skills/introduction-to-codeql) Skills exercise after you finish this one!

1. If necessary, return to the **Code Security** page in your repository settings.

1. Find the **Code scanning** section. Click the **Set up** button and select the **Default** option to open a configuration panel.

   <img width="350" alt="image" src="https://github.com/user-attachments/assets/5ba119da-1fa2-4e16-b86c-05475e949f73" />

1. Click the **Enable CodeQL** button to accept the default configuration.

   <img width="350" alt="image" src="https://github.com/user-attachments/assets/30e90cb2-e6f9-4173-8522-18193fef0b81" />

1. Below the **Tools** section. Verify **Copilot Autofix** is set to `On`.

   <img width="350" alt="image" src="https://github.com/user-attachments/assets/b9d57e7a-f392-4c51-b137-f205a77adb79" />

## ⌨️ Activity: Provide a safe path for security findings

Now that the automated options are ready, let's create a guide for real-life humans to report any security vulnerabilities they find in a safe way.

1. In your repository, navigate back to the **Code** tab.

1. Ensure you you are on the `prepare-to-collaborate` branch at the root directory.

1. Above the list of files, click the **Add file** dropdown and select **Create new file**.

   <img width="300" alt="New file button" src="https://github.com/user-attachments/assets/8f3f8da8-1471-485a-9df5-8c03ecba2d8e"/>

1. Set the file name as `SECURITY.md`.

1. Add the following content:

   ```markdown
   # Mergington High School Security Policy

   ## Reporting a Vulnerability

   At Mergington High, we take the security of our Extra-Curricular Activities website seriously, especially
   since it contains student information. If you discover a security vulnerability, please follow these steps:

   1. **Do not** disclose the vulnerability publicly or to other teachers/students
   2. Email the IT Club faculty advisor at techsupport@mergingtonhigh.example.edu with details about the vulnerability
   3. Include the following information:
      - A description of the vulnerability
      - Steps to reproduce the issue
      - Potential impact on student data or website functionality
      - Suggested fix (if you have one)

   ## Response Timeline

   - We will acknowledge receipt of your report within 2 school days
   - We will provide an initial assessment within 5 school days
   - Critical issues affecting student data will be addressed immediately
   - We will keep you informed about our progress in resolving the issue

   ## Thank You

   Your help in keeping our school's digital resources secure is greatly appreciated!
   Responsible disclosure of security vulnerabilities helps protect our entire school community.
   ```

1. In the top right, use the **Commit changes...** button to save your changes.

1. With the files committed, wait a moment for Mona to check your work, provide feedback, and share the next lesson.

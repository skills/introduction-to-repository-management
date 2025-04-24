# Step 4: Prepare for the inevitable

_A week after implementing all your collaboration guidelines, you arrive at Mergington High to find Principal Martinez waiting for you outside the computer lab. "Good news! The district IT security team will be conducting an audit next month. Since your extracurricular activities website has become so important, they'll be checking it too!"_ 😱

_As you settle into the teachers' lounge with your coffee, you realize this is actually a perfect opportunity. With so many teachers now contributing to the code, it's only a matter of time before security vulnerabilities creep in. Better to be proactive than reactive!_

## Theory

Every codebase, no matter how well-maintained, will eventually face security challenges:

1. **Dependencies** - The Python packages your activities website relies on get regular security updates. Without automating these updates, vulnerabilities could expose student data.

2. **Automated Scanning** - Having GitHub automatically scan your code for common security issues helps catch mistakes before they affect the school website.

3. **Security Policy** - A clear policy helps teachers know how to report security vulnerabilities responsibly. This prevents sensitive issues from being publicly disclosed before they're fixed.

> ❕ **Important:** Automated tools can help, but they're just one layer of security. Your team's security awareness and practices are equally important!

## Activity 1: Enable Dependabot security updates

Let's enable GitHub's built-in security features to automatically monitor dependencies in your school website:

1. Create a new branch called `add-security-features` from `main`
2. Navigate to the Security tab in your repository
3. Select "Enable Dependabot alerts" to activate vulnerability scanning
4. Click "Enable" to allow GitHub to automatically create security update pull requests

This will help protect your application by:

- Alerting you when vulnerabilities are found in dependencies
- Creating pull requests to update vulnerable dependencies
- Helping you stay ahead of security issues that could affect student data

> 💡 **Tip:** For a deeper dive into securing your repository's supply chain, check out the [Secure Repository Supply Chain](https://github.com/skills/secure-repository-supply-chain) Skills exercise after completing this one!

## Activity 2: Enable code scanning

Now let's enable GitHub's code scanning to automatically detect security vulnerabilities in your Python code:

1. In your `add-security-features` branch, navigate to the Security tab
2. Click on "Code scanning" in the left sidebar
3. Select "Set up code scanning"
4. Choose "CodeQL Analysis" from the options
5. Click "Enable CodeQL"

This will automatically set up security scanning for your Python code, helping you identify potential security issues before they affect the Mergington High activities website.

> 💡 **Tip:** Want to learn more about code scanning and writing custom queries? Check out the [Introduction to CodeQL](https://github.com/skills/introduction-to-codeql) Skills exercise after you finish this one!

## Activity 3: Create a security policy

Finally, let's create a clear security policy to guide teachers on how to report security vulnerabilities responsibly:

1. In your `add-security-features` branch, create a new file called `SECURITY.md` at the root of your repository
2. Add the following content:

   ```markdown
   # Mergington High School Security Policy

   ## Reporting a Vulnerability

   At Mergington High, we take the security of our Extra-Curricular Activities website seriously, especially since it contains student information. If you discover a security vulnerability, please follow these steps:

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

   Your help in keeping our school's digital resources secure is greatly appreciated! Responsible disclosure of security vulnerabilities helps protect our entire school community.
   ```

3. Commit your changes to the `add-security-features` branch
4. Create a pull request from `add-security-features` to `main`
5. Give it a title like "Add automated security features for district audit"
6. In the description, explain:
   - How you've enabled Dependabot alerts and security updates
   - How CodeQL scanning will help protect student data
   - That these changes will help prepare for the upcoming district security audit
7. Merge the pull request to finish this step

When you merge this pull request, GitHub will immediately start scanning your code and dependencies, helping you prepare for the upcoming audit!

## What's next?

Congratulations! You've successfully prepared Mergington High's extracurricular activities website for safe collaboration. You've:

1. Protected your code from accidental mistakes with `.gitignore` and branch protections
2. Set clear guidelines for teacher contributions with `CONTRIBUTING.md` and `CODEOWNERS`
3. Established community standards with a Code of Conduct and structured issue templates
4. Prepared for the inevitable security challenges with automated scanning and updates

Principal Martinez will be thrilled to show the district IT security team all the measures you've put in place to keep student data safe while enabling teachers to contribute new features for their clubs!

### References

- [About Dependabot security updates](https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)
- [About code scanning with CodeQL](https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql)
- [Adding a security policy to your repository](https://docs.github.com/en/code-security/getting-started/adding-a-security-policy-to-your-repository)
- [Secure Repository Supply Chain Skills exercise](https://github.com/skills/secure-repository-supply-chain)
- [Introduction to CodeQL Skills exercise](https://github.com/skills/introduction-to-codeql)

# Netlify

Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for **static websites**.

Netlify is an excellent option for deploying VuePress sites. Netlify is a unified platform that automates your code to create performant, easily maintainable sites and web apps. They provide continuous deployment (Git-triggered builds); an intelligent, global CDN; full DNS (including custom domains); automated HTTPS; asset acceleration; and a lot more.

Their free tier includes unlimited personal and commercial projects, HTTPS, continuous deployment from public or private repositories, and more.

## Creating an Account

First action to perform is to create a Netlify account. Natigate to [netlify.com](https://www.netlify.com/) and click the `Sign up` button.

Luckily this is a quick and painless operation if you choose to login using your GitHub account. You will need to provide access to your GitHub profile.

![Allow Netlify to Access Your GitHub Profile](./assets/authorization_signup.png)

Once logged in, you should get the dashboard overview of your current projects and their statuses.

![Logged in to Netlify](./assets/logged_in_netlify.png)

## Creating a New Website

Once logged in, hit the `New Site from Git` button. This should bring you to the next page.

![New Site from Git](./assets/new_site_from_git.png)

Now select to use `GitHub`. Netlify will again request authorization to your GitHub account. This time to access your public and private repositories. Please allow it access.

![Authorize Netlify to Access Repositories](./assets/authorization_repos.png)

Next select the correct GitHub repository that contains your VuePress course website. In our case it is `communicatie-technologie`.

![Select the Correct GitHub Repository](./assets/select_github_repo.png)

The basic configuration should not have to be changed. Your VuePress website has been made Netlify ready by the use of the configuration file `netlify.toml` in the root of your project.

![Setup Your Site Deployment](./assets/deploy_settings.png)

Hit the `Deploy Site` button and wait for the build to finish.
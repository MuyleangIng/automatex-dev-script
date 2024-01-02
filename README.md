# AutomateX

Is a website that automate the process of creating a new project. It is a CLI tool that will create a new project with
the following features:

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

1. You need to clone the repo and install the dependencies :

   git url: [https://github.com/AutomatesX/automate-x-ui.git](https://github.com/AutomatesX/automate-x-ui.git)


2. After you clone u need to add some env variables in a .env.local file in the root of the project
   ### Env Variables
       Copy file .env.example to .env and fill the environment variable
    ```bash
      NEXT_PUBLIC_BASE_URL=https://automatex.begoingdev.me/api/v1

      #Gitlab
   
      NEXT_PUBLIC_GITLAB_URL=https://gitlab-ce.sen-pai.live/api/v4
   
      # next-auth
   
      NEXTAUTH_SECRET=shTm0XQPhKqSXmAdHTSsBg==
   
      NEXTAUTH_URL=http://localhost:3000/
      ......
3. Run the project with the following commands:

   ```bash
   npm install 
   npm run dev
   npm run build
   npm run start
   ```

   ### Website Link
   
   The website is hosted at [https://automatex.dev](https://automatex.dev). You can access it to see the live version of
   the project.
   
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

 After you run the project you will see the following page URL:

---
   - Homepage: /
   - Features-service: `/features-services`
   - Documentation: https://docs.automatex.dev
   - StartBuilding:` /start-building`
   - About us: `/about-us`
   - Privacy Policy: `/privacy-policy`

---

 But first you need to create an account and login to the website
to create your own project .

- Sigh up with your email or with your github account.
- after you login you will see the dashboard and following page URL: 
  *  Dashboard: `/app/dashboard`
  *  Deployments: `/app/deploy-apps`
  *  Account-Setting : `/app/useraccount`
  *  Private Cloude Url : https://cloud.automatex.dev

---
- You can create a new App by clicking on the button "New Depoy App" and can choose the method of creating the app :
  * `using gitlab`
  * `using github`
  * `using AutomateX cli`
  * `using zip file`

- **After you create the app you will see the Card of the app in the dashboard and you can click on it to see the details :**
  - You can also delete the app by clicking on icon "Delete" in the card of the app;
  - See the details of the app at : `app/deploy-apps/[id]/overview`
  - See the resources of the app at : `app/deploy-apps/[id]/resources`
  - See the logs of the app at : `app/deploy-apps/[id]/activities`
  - See can also see the access members of the app at : `app/deploy-apps/[id]/access`
  - See the trivy scan of the app at : `app/deploy-apps/[id]/trivy`
  - **You can also customize the domain name of the app at : `app/deploy-apps/[id]/settings`**
---




   
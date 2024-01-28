# LessonPlan
## Portfolio project 5: LessonPlan
LessonPlan is a educational site where teachers or other users working with education can find lessons that they find interesting, and they can create their lessons as well.
Users can also colaborate with other users by register as a teacher where you can find teachers to colaborate with.

**It is time to educate!**

Johan Lindelöf

[Visit LessonPlan](https://lesson-plan-a44885014d75.herokuapp.com/)

[Github Repository](https://github.com/jlindeloef/lesson-plan-backend)


![the responsive image](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/responsive.png)

## About the website
### Project planning and Agile
I notice around my fellow musicteachers that it would be great to have a site to find and create lessons. Therefore I landed in to create a lesson site for my fifth project at Code Institute where I´m attending the fullstack program. 

This is my first education site creation so first I needed to look at different sites for education, both of how to code and what I wanted on my site. I looked at youtube and looked through some code I could find on the internet that matches what I wanted. I also brought with me knowledge from my diploma course in coding. I wanted an easy website with posts regarding every subject. To begin with I will start with only music lessons but I want to expand to other subjects as well.
Why music? In many school subjects are a lot of material they can use directly with the students. There are a lot of educational platforms that schools buy but often there are no material for the practical/estetical subjects.
Therefore I want to start with the music subject.

I have used Balsamiq to plan how the website should look like. I did  a very easy layout and it looks different compare to the end result. I made decisions to change the layout during the development phase and some things I hade to prospone because of time presure.   
Here is my rough plan: [LessonPlan wireframe main](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/Main%20page.png) , [LessonPlan wireframe lessonpage](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/Individual%20Category.png)


#### Agile Planning
This project was planned using Agile methodology where features were added in small, incremental sprints over numerous weeks. The project was illustrated by 9 initial Milestone entitled "Profiles", "Posts", "Likes", "Comments", "Followers", "Reviews"
and "Teachers".

Throughout the development process, new milestones were added, where tasks started from "Todo," progressing to "In Progress," and finally "Done". The issues were labeled as "could-have," "should-have,", "must-have" and "won't-have". The agileboard was created using github projects and it shows all the stories implemented during this project.

![](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/board.png)

#### Database Design

![DB](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/lessonplan%20DBD.drawio.png)

#### Methodology CRUD
When performing CRUD (Create, Retrieve, Update, Delete) function based views, the user can manipulate the table in the database. To add,change or delete something on the website. With this in mind during planning I implemented CRUD function so the user can:
- CRUD Profiles
- CRUD Posts
- CRUD Comments
- CRUD Likes
- CRUD Followers
- CRD Teachers
- CR Reviews

As a superuser I have the ability to perform the following through the django admin panel:
- CRUD Profiles
- CRUD Posts
- CRUD Comments
- CRUD Likes
- CRUD Followers
- CRUD Teachers
- CRud Reviews
- Change Passwords
- Make users to Superuser

#### Combining Workspaces
The following guides were provided by Code Institute to merge the react files into the Django API and deploy both applications:

 - [combine workspaces](https://code-institute-students.github.io/advfe-unified-workspace/combining-workspaces/01-adding-the-react-files)
 - [deploy applications](https://code-institute-students.github.io/advfe-unified-workspace/deployment/00-deployment)

The following articles were provided by Code Institute to merge the react files into the Django API and deploy both applications:


### UX
The website turns to those who want to find lessons, share lessons or to colaborate with other users. 

### Users stories
- As a developer, I need to create the backend in order to have features present for users on the site
- As a developer, I need to create a base project set up so that I can build out the features that will be shown on the frontend.
- As a developer, I need to create a connection to Cloudinary so static images can be uploaded
- As a developer, I have to connect Cloudinary to the project so static images can be uploaded by the users
- As a developer, I want a user to have a blank profile page with a default avatar photo when its created by any user
- As a user I want to read and experience content on the website.
- As a user I want to navigate easy and quickly through the website.
- As a user I want to log in so that I can take part of the content.
- As a user I want to create lessons so I can share my knowledge.
- As a user I want to make comments, like and reviews so that I can interact with the site.
- As a user I want to find colaboration with other users so I can develope as an educator.
- As a user I want to delete/edit lessons and comments I made so that I can change or regret.
- As a user I want to follow users that I like so I can easily find content that suits me.
- As a user I want to be able to search for lessons or profile so that I can easily find what am looking for.
I want to give the user a website where they can find relevant content regarding musiclessons.


## Website structure
**When logged out:**
+ **LessonPlan/Home:** The logo and "Home" link will always take you back to the main page.
+ **Sign Up:** For the user to sign up to get access to the whole content of the webpage.
+ **Sign in:** For the user to log in and get access to the whole webpage.
+ **Main page:** Here the user finds the published lessons. The user can click on the lessons of interest and will then to redirect to the whole lessons content. Users can also search for a lesson or profile.
+ **Profiles:** The user can view most popular profiles to help them in their search.
+ **Reviews:** The user can view how many reviews a lesson have and also see the rating of that lesson.

**When logged in:**
+ **LessonPlan/Home:** The logo and "Home" link will always take you back to the main page.
+ **Log Out:** When the user wants to log out from the website.
+ **Profilepage:** Where users can edit, delete and view your own information.
+ **Teachers Colaboration:** Here the user can register as a teacher and find other teachers to colaborate with. Users can also use the searchbar to find teachers.
+ **Liked:** The users can view the lessons the users liked.
+ **Create lesson:** The users can create and publish a comment to a lesson.
+ **Feed:** The users can view the lessons from the user follows.
+ **Create lesson:** The users can create and publish a lesson.
+ **Reviews:** The user can view and create a review.

### Colours
 **Background:** I decided to use white background with grey to the navigation bar. I have chosen green to be used on most of the buttons and active links. The text is in black and in the navbar turns blue when hovering over them. The navbar icons are white and turns black when hover over them. The function buttons are with a green with black text and most of them turns black with white text when hovering over. The links are in black text and turns blue when hovering over it.

**The colors used was:**
+ Grey #b0b0b0 - For navigation bar,sign in/register/sign up background and buttons.
+ Blue #10a4e8 - Links and icons button.
+ White #f8f8f8 - used for background and text.
+ Black #000 - For text and background on buttons.
+ Green #21b234 - Buttons and links.
+ Grey #dadadf - borders.

### Technologies
1. Django - Main framework used for application creation
2. Django REST Framework - Used for creating the API
3. React - Main framework used for creating the user interface
4. ElephantSQL - Database
5. Heroku - Used for hosting the application
6. Git - Used for version control
7. Github - Repository for storing code base and docs
8. Balsamiq - To create a wireframe.
9. app.diagram.net - To create the flowchart.
10. Gitpod to write the code.
11. Cloudinary - Static & Media host.

### Existing Features
I have divided the feature section into two parts. What features depend on if you are:
- Logged out
  
  **or**
- Logged in

### ***When logged out:***

+ #### Navigation Bar

![Navbar logged out](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/navbar%20logged%20out.png)

**DrumWorld/Home:** The navigation bar will view a logo of the website “LessonPlan” and a “Home”- link. Both of these are links to the home page from wherever you are on the webpage.


![sign up](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/signup.png)

**Sign Up:** For the user to sign up to get access to the whole LessonPlan content. The sign up page will redirect user to the sign up page.
    
![Sign in](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/signin.png)

**Sign in:** For the user to log in and get access to the whole LessonPlan. The sign in page will redirect users to home page.


+ #### Main page
 
 ![Lesson logged out](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/lesson%20logged%20out.png)

 
  - Here the user find the lessons. The user can click on a lesson to be redirected to the whole lesson content and only read.
  - Every published lesson has an image, the user that has created the lesson and when it was published.
  - Every published lesson users can view ratings in stars.
  - Recent published lesson displays as the first lesson.


![searchbar main](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/searchbar%20main.png)

Users can also search for lessons using the searchbar.


 ![mpp logged out](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/most%20poppro%20logged%20out.png)

On the main page users find most popular profiles.


### ***When logged in:***
+ #### Navigation Bar
![Navbar logged in](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/navbar_loggedin.png)
  - **LessonPlan/Home:** The navigation bar will view a title of the blog “DrumWorld” and a “Home”- link. Both of these are links to the home page from wherever you are on the webpage.
  - **Log Out:** When the user wants to log out from the blog. The user will be redirected to a new page where user confims logging out.
  - **Profilepage:** Where users can edit, delete and view your own information.
  - **Teachers Colaboration:** Here the user can register as a teacher and find other teachers to colaborate with. 
  - **Liked:** The users can view the lessons the users liked.
  - **Feed:** The users can view the lessons from the user follows.
  - **Create lesson:** The users can create and publish a lesson.

+ #### Main page

 ![Lesson logged in](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/lesson.png)
 
 except what the user can do when logged out, the user can:
   - The user can like, comment and review and read reviews of a lesson.

![create review](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/create_review.png)

 Create a review. After createed a view users will be redirected to the review page.
 
 ![viewreview](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/view_reviews.png)
 
 Read reviews
 
 ![like_comment](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/like_comment_icons.png)
 
 Like and comment icons on lessons. After the user click the like icons the heart turns read. If click on the comment icon the user will be redirected to the comment page.
 
 ![comments](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/comments.png)
 
 Read and add comments. After user add a comment, the comment will be published under the post.

![comment crud](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/edit_delete_comment.png)  

The user can edit and delete their own comment by clicking the three dots in right-uper-corner.. The change will be made in the comment page and the user will not be redirected.
 
 

![mpp logged in](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/most%20popular%20profiles.png)
  
When logged in users can choose to follow or unfollow profiles.The most popular profiles will be viewed on every page exept for the edit/delete/create pages.
+ #### Liked and Feed pages.
  - The Liked and Feed pages contains the same as the main page only that:
    - Liked: Views the lessons you have liked.
    - Feed: Views the lessons from the profiles you follow.
  - Both views the most recent lessons first.

+ #### Profiles
![profilespage](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/profilepage.png)

- On the profile link in navbar the user can view, edit and delete information about them self.
- It views the profiles post, how many followers and how many the user follows.

![Profiles dropdown](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/profile%20dropdown.png)

- The user can from the three dots dropdown change password and username, edit their profile and register as a teacher.
- When save or delete changes the user will be redirect to the profile page.


+ #### Lesson page

![create_lesson](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/create_lesson.png)

- In navbar the user finds the "Create lesson" link. It will redirect the user to a create lesson form.
- The user will be redirected to the lesson page.

![edit_delete-lesson](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/posts%20dropdown.png)  

- The user can delete and edit their on posts by clicking the three dots in right-uper-corner. Users will be redirected to lesson page after delete or editing.


+ #### Teachers

![teacherscard](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/teachercard.png)

- Views a list of registered teachers.
- Every registered teacher leaves information of name of the teacher, which School they work on, location and email. The information can be used to seek out colaboration e.g.by find a teacher in nearby location.

![searchbar teacher](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/searchbar_teacher.png)

  - Users can search from the list teacher,location or school.

![regteachlink](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/linkregteacher.png)

  - Users can register as a teacher by clicking the link "Register now".
    
![reg teach_form](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/regteacher.png)

  - The register form. After submit the user will be redirect to teachers page.

### Features to Implement
Further there could be an about Us page, categories and subcategories to other subjects. More features for registered teachers e.g. chat forum, colaboration with lessons. Videos of lessons.

## Testing
If you want to know more about my automated and manually testing you can click [here.](https://github.com/jlindeloef/lesson-plan-backend/blob/main/Testing.md)
+ I tested the site, and it works in different web browsers: Chrome, Firefox, and Microsoft Edge.
+ On mobile devices, I tested the blog on a Samsung Galaxy A13 with the Samsung browser and an iPhone SE with the Safari browser.
+ I confirmed that the site is responsive and functions on different screen sizes using the devtools device toolbar.
+ I confirmed that the website readable and easy to understand.

### Validator Testing
I did test locally during the development phase but after in testing phase I run these tests:
+ HTML No errors were returned when passing through the official W3C validator.
+ CSS No errors were found when passing through the official  W3C validator for css.
+ Javascript No errors were found when passing through JSHint validator.
+ Python  No errors were found when passing through the CI Python Linter.

  ### Bugs
+ Solved bugs
  - The deployment were unsuccessful.
  - The log in viewed error.
  - Changes were not made when redeplyed.
  All these bugs are fixed with help from the tutors at Code Institute. 
+ Unsolved bugs
  - No unsolved bugs.

   ## Deployment

I followed the steps written below to deploy my project to Heroku:
 + First created a Heroku account by flollowing the instructions given from Code Institute.
 + "Create new App".
 + Give the App an unique name and enter region europe.
 + Click on "Create App".
 + Go to Deploy section tab and scroll down to the Deployment Method.I connect to Github pages and then could search for my Github Repository "DrumWorld" and then click connect.
 + Scroll down to Automatic and Manual Deploys sections. I clicked on Manual Deployment.
 + Deploy Branch.
 + After the project has been deployed successfully I clicked the View-button to see the program run in the terminal.

In github:
The site was deployed to Git Hub pages using the following steps:
+ After logging into GitHub I located my repository for my Portfolio Project 4.
+ I then clicked the "Settings" button at the top of my repository
+ Under General, navigate to Code and Automation and select "Pages".
+ In the Build and Deployment section for Source, select 'Deploy from a branch' from the drop-down list.
+ For Branch, select "main" from the drop-down list and "/root" in the next bar and Save.
+ On the top of the page, the link to the complete website is provided.
+ The deployed site will update automatically upon new commits to the master branch.

  ## Credits
**Code:** Some code parts were taken from W3Schools (https://www.w3schools.com/), Stack Overflow (https://stackoverflow.com/) modified for the purpose of my website. 
Code used in "Django REST framework" and "Moments" was used and changed for creating my website.

### Acknowledgements
My mentor Gareth Mcgirr for guidance and inspiration and reviewing. Also a great thanks to Code Institutes tutors and Student support who has been a great help during this project:
Ideas and inspiration were taken from The Code Institute's "Django REST framework" and "Moments".

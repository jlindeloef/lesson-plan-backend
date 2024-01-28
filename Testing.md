# LessonPlan Testing #
![responsive](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/responsive.png)

[Visit LessonPlan](https://lesson-plan-a44885014d75.herokuapp.com/)

## Automated testing ##
I used the W3C validator for automated testing of:
- HTML
- CSS
  
I used jshint for testing of:
- Javascript
  
And CI python Linter to validate:
- Python

**Here are my results:**

| Page | Screenshot | Notes |
| --- | --- | --- |
| CSS | |  |  |
| CSS | ![](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/CSS.png) | Pass |
|HTML | |  |  |
| html code from the sitesource(homepage) | ![](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/homepagehtml.png) | Pass |
|Python | |  |  |
| Pythoncode from every app: views,urls, serializers, models has been tested. Also App.js | ![](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/python.png) | Pass |


### Testing using Google Lighthouse:
I used Google Lighthouse via devtools to assess the website.

![lighthouse](https://github.com/jlindeloef/lesson-plan-backend/blob/main/readmedocs/images/lighthouse.png)
 
## Manual testing ##
Full testing was made on the following devices:

- Laptop:
  - Macbook Pro 2022 14 inch screen
  - Samsung 2023 15 inch screen
- Mobile devices:
  - Iphone SE 2020
    
### Testing userstories ###
| Goals | How are they achieved? | images |
| --- | --- | --- |
| **First time user**| |  |  |
| Understand what the website is for and how to navigate the website | The lessons are on the main page and is the first thing you see when enter the blog. |:-- |
| Register for an account. | A register link is displayed on the navbar if a user wants to sign up. | :-- |
|View reviews | When not logged in a user can view reviews a lesson and comments. | :-- |
| **Returning user**| |  |  |
| Log in | 	If a user is not logged in, a login link is provided on the navbar. | :-- |
| Add a comment | When logged in the comment view display and the user can add a comment. | :-- |
| edit a comment | When published a comment the user can edit it through the edit icon. | :--
| delete a comment | When published a comment the user can delete it through the delete icon. | :-- |
| Add a lesson | When logged in the lessons view display and the user can add a lesson with the icon in navbar. | :-- |
| edit a lesson | When published a lesson the user can edit it through the edit icon in the dropdown link at the uper left corner on the published lesson. | :-- |
| delete a lesson |  When published a lesson the user can delete it through the delete icon in the dropdown link at the uper left corner on the published lesson. | :-- |
| Like a lesson | When logged in the user can like/unlike a lesson. | :--|
| Add a review | When logged in a user can review a lesson and add a comment. | :-- |
| logout | If user want to log out there is a log out link in the navbar. | :-- |
| Admin| |  |  |
| Full crud admin | From django admin panel a superuser can delete, edit and create the functions on the website. |:-- |
| Teacher| |  |  |
| Register for a  teacheraccount. | A register link is displayed on the teacherspage if a user wants to sign up and also in the profile edit section. | :-- |
| Delete registration as a Teacher | When logged in a user can delete their registration as a teacher. | :-- |
| Profile| |  |  |
| Register as a Profile | when user sign up a profile| :-- |
| Edit profile | When logged in a user can edit profile info, password and username and add bio and change image. | :-- |
| Follow other profiles |As a logged in user I can follow other users. | :-- |



### Full testing ###

| Feature | Expected Outcome | Testing Performed | Result | pass/failed |
| --- | --- | --- | --- | --- |
| Navbar | |  |  |
| LessonPlan logo | When clicked the user will be redirected to the home page. | Clicked Logo and Home-link | Redirected to the home page. |Pass |
| Home-link | When clicked the user will be redirected to the home page. | Clicked Home-link | Redirected to the home page. |Pass |
| Sign Up link | When clicked the user will be redirected to the Sign up page. | Clicked Sign up-link | Redirected to the  Sign up page. |Pass |
| Sign In link | When clicked the user will be redirected to the Sign in page. | Clicked Sign In-link | Redirected to the Sign in page. |Pass |
| Sign Out link | When clicked the user will be redirected to the home page. | Clicked Log out-link | Redirected to the home page. |Pass |
| Liked link | When clicked the user will be redirected to the liked page where the users liked page views. | Clicked Liked-link | Redirected to the Liked page. |Pass |
| Feed link | When clicked the user will be redirected to the feed page where the users followed users lessons views. | Clicked Feed-link | Redirected to the Feed page. |Pass |
| Teachers colaboration Link | When clicked the user will be redirected to the Teachers page where the Teachers list is viewed. | Clicked Teacher colaboration-link |  Redirected to the Teachers page. |Pass |
| Create lesson link | When clicked the user will be redirected to the create lesson page where the users Can create a lesson. | Clicked Create lesson-link | Redirected to the Create lesson page. |Pass |
| Signup page | |  |  |
| Sign Up button | When clicked the user will be redirected to the Sign in page and submit form. | Clicked Sign up-button | Redirected to the  Sign in page. |Pass |
| Username input - empty |This is a required field so the form should not submit if empty | Tried to submit the form with this field empty | Tooltip tells me this field is required. |Pass |
| Password input - empty |This is a required field so the form should not submit if empty | Tried to submit the form with this field empty | Tooltip tells me this field is required. |Pass |
| Confirm password input - empty |This is a required field so the form should not submit if empty | Tried to submit the form with this field empty | Tooltip tells me this field is required. |Pass |
| Already have an account- sign in link |If already have an account the link redirect you to the Sign in page. | Clicked the Sign In link | Redirect to the sign in page |Pass |
| Signin page | |  |  |
| Sign In button | When clicked the user will be redirected to the home page and submit form. | Clicked Sign up-button | Redirected to the  home page. |Pass |
| Username input - empty |This is a required field so the form should not submit if empty | Tried to submit the form with this field empty | Tooltip tells me this field is required. |Pass |
| Password input - empty |This is a required field so the form should not submit if empty | Tried to submit the form with this field empty | Tooltip tells me this field is required. |Pass |
| Don´t have an account- sign up link |If user don´t  have an account the link redirect you to the Sign up page. | Clicked the Sign up link | Redirect to the sign up page |Pass |
| Log Out page | |  |  |
| Log Out button | When clicked the user will be redirected to the home page signed out. | Clicked Log Out-button | Redirected to the  home page signed out. |Pass |
| Post page (Home) | |  |  |
| Link to individual post | When clicked the user will be redirected to a page to view the whole content of the post | Clicked the post link | Redirected to the the individual post page |Pass |
| Create lesson | |  |  |
| save button in create lesson| When clicked the user will submit the lesson and the lesson will be displayed as a published lesson and redirect to the home page.| Clicked the Save-button | publish and redirect to home  |Pass |
| title input - empty |This is a required field so the form should not submit if empty | Tried to submit the form with this field empty | Tooltip tells me this field is required. |Pass |
| Content input - empty |This is not a required field so the form should submit if empty | Tried to submit the form with this field empty | publish and redirect to home. |Pass |
| Image upload - empty |This is a required field so the form should not submit if empty | Tried to submit the form with this field empty | Tooltip tells me this field is required. |Pass |
| Cancel button | When clicked the user will be redirected to the lesson page and no lessons is done. | Clicked Cancel-button | Redirect to lesson page without any lesson made. |Pass |
| Comments | |  |  |
| Comment icon underneath the Lesson | When clicked the user will redirect to the the comment page where the user can add a comment| Clicked thecomment icon| Redirect to the comment page |Pass |
| Add comment button | When clicked the user will submit the made comment and the comment will be displayed as a published comment.| Clicked the Add comment-button | submits and view message |Pass |
| Add comment button- no value entered |The form requires this field be filled in before submission|Left input blank | Nothing happens |Pass |
| Dropdown menu three dots | |  |  |
| Three dots menu |  When clicked the delete and edit icons views |Clicked the three dots |The delete and edit icons views |Pass |
| Edit comment | |  |  |
| Edit Icon |  When clicked the users comment field will be able to take changes. | Clicked the edit icon. |I can make changes. |Pass |
| Comment save and cancel buttons | When clicked the user will be able to save the changes in the comment or cancel the changes. | Clicked Save and cancel-buttons | Save-Saved the made changes and published the new comment. Cancel- Canceled the operation and published without changes |Pass |
| Delete comment | |  |  |
| Delete Icon | When clicked the users comment will be deleted and will not be viewed in comment. | Clicked Delete-icon | The deleted comment deleted. |Pass |
| Most followed profiles | |  |  |
| Follow- button | When clicked on a followed button the button changes to unfollow and a user start following the chosen profile. | Clicked the Follow button | Changed to "unfollow" and user follows the profile. |Pass |
| Unfollow- button | When clicked on a unfollowed button the button changes to follow and a user stops following the chosen profile. | Clicked the unollow button | Changed to "follow" and user stops following the profile. |Pass |
| Like | |  |  |
| Like icon underneath the Lesson | When clicked the icon turns red . | Clicked the Like icon| It turns red |Pass |
| Review | |  |  |
| Leave a review-button in post | When clicked the user will be redirected to the create a review page. | Clicked Leave a review-button | Redirected to the create review page. |Pass |
| Lesson review-button in post | When clicked the user will be redirected to the review page where the user can display the reviews on the lessons and read the comments. | Clicked Lesson reviews-button | Redirected to the review page. |Pass |
| save button in create a review | When clicked the user will submit the review and the review will be displayed as a published review and redirect to the home page.| Clicked the Save-button | publish and redirect to home  |Pass |
| save button- no value entered |The form requires this field be filled in before submission|Left input blank |  Tooltip tells me this field is required. |Pass |
| Cancel button | When clicked the user will be redirected to the homepage page and no review is done. | Clicked Cancel-button | Redirect to home page without any reviews made. |Pass |
| Teachers Page | |  |  |
| Teacher registration link | When clicked the user will be redirected to the Teachers registration page where the user can register as Teacher | Clicked Liked-link | Redirected to the Teacher registration page. |Pass |
| create button | When clicked the user will be redirected to the teachers page and submit form and school field is required. | Clicked Create-button | Redirected to the Teachers page. |Pass |
| Teacher input - empty |This is a required field so the form should not submit if empty | Tried to submit the form with this field empty | Tooltip tells me this field is required. |Pass |
| School input - empty |This is a required field so the form should not submit if empty | Tried to submit the form with this field empty | Tooltip tells me this field is required. |Pass |
| Location input - empty |This is a required field so the form should not submit if empty | Tried to submit the form with this field empty | Tooltip tells me this field is required. |Pass |
| Email input - empty |This is a required field so the form should not submit if empty | Tried to submit the form with this field empty | Tooltip tells me this field is required. |Pass |
| Cancel button | When clicked the user will be redirected to the teachers page and no registration is done. | Clicked Cancel-button | Redirect to Teachers page without any registrations made. |Pass |
| Three dots menu |  When clicked the delete icon views |Clicked the three dots |The delete icons views |Pass |
| Delete Icon | When clicked the teachers registration will be deleted and will not be viewed in the teacherslist for colaboration. | Clicked Delete-icon | The registration is deleted. |Pass |
| Profile page | |  | |
| Three dots menu |  When clicked the edit profile, Change username, Change password and register as teacher links views and icons views |Clicked the three dots |The links and icons views |Pass |
| Edit profile-link | When clicked the user will be redirected to the edit profile page. | Clicked edit profile-link | Redirected to the edit profile page. |Pass |
| Change username link | When clicked the user will be redirected to the change username page. | Clicked change username-link | Redirected to the  change username page. |Pass |
| Change password link | When clicked the user will be redirected to the change password page. | Clicked change password-link | Redirected to the change password page. |Pass |
| Teacher registration link | When clicked the user will be redirected to the Teachers registration page where the user can register as Teacher | Clicked Liked-link | Redirected to the Teacher registration page. |Pass |
| Edit profile | |  | |
| save button in edit profile | When clicked the user will submit the changes and the profile will be displayed and redirect to the profile page.| Clicked the Save-button | publish and redirect to profile page  |Pass |
| Cancel button | When clicked the user will be redirected to the progile page and no changes is done. | Clicked Cancel-button | Redirect to profile page without any changes made. |Pass |
|  Change username | |  | |
| save button in edit username | When clicked the user will submit the change and the profile will be displayed and redirect to the profile page.| Clicked the Save-button | publish and redirect to profile page  |Pass |
| Cancel button | When clicked the user will be redirected to the profile page and no changes is done. | Clicked Cancel-button | Redirect to profile page without any changes made. |Pass |
| Change password | |  | |
| save button in change password | When clicked the user will submit the change and the profile will be displayed and redirect to the profile page.| Clicked the Save-button | publish and redirect to profile page  |Pass |
| Cancel button | When clicked the user will be redirected to the profile page and no changes is done. | Clicked Cancel-button | Redirect to profile page without any changes made. |Pass |

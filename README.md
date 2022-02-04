# Introduction
![logo](https://fontmeme.com/permalink/220102/80b2e83ec91311621e8aea703b915905.png)

<img width="1029" alt="Screen Shot 2021-12-02 at 10 43 18 PM" src="mainpage.gif">

EndFlix is a clone of popular video streaming website Netflix. It provides functionality for creating an account, making profiles, adding movies to My List, searching for movies, and playing movies. The technologies implemented in this project include:

- Languages: Javascript, Ruby, HTML, and CSS
- Frontend: React-Redux
- Backend: Rails
- Database: PostgreSQL
- Hosting: Heroku
- Asset Storage: AWS Simple Cloud Storage (S3)


# MVP Features

## Profiles

Similarly to Netflix,users can create, edit, and delete profiles. Each profiles will have their own my-List and user can have a max of 5 profiles.

<img width="1029" alt="Screen Shot 2021-12-02 at 10 43 18 PM" src="https://media.giphy.com/media/8C1NWaigVy1WjlVGGT/giphy.gif">

### Code

```ruby
<% if logged_in? %>
  <script type="text/javascript">
    window.currentUser = <%= render(
      "api/users/user.json.jbuilder",
      user: current_user
    ).html_safe %>
  </script>
<% end %>

<% if profile_found? %> 
        <script type='text/javascript'>
            window.current_profile = <%= render(
                'api/profiles/profile.json.jbuilder',
                profile: current_profile
            ).html_safe %>
        </script>
<%end%>
```
One of the core features of the Profiles MVP was to keep the current users profile selected to persist after a state change in React/Redux. In order to achieve this I created a seperate session for the selected profile and bootstrapped it to the window. 

## Movie Browse and Show page

<img width="1029" alt="Screen Shot 2021-12-02 at 10 43 18 PM" src="https://media.giphy.com/media/SJaAC1PQkkPC02kQAN/giphy-downsized-large.gif">





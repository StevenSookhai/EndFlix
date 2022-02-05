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

Check it out here [EndFlix](https://endflix-app.herokuapp.com/)

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

When signed in and selecting a profile, a user is taken to the browse page. The browse page has featued title that start playing automactically. There are movies which are organized by genre. Users can see additional information about each title by hovering over its movie card, which also autoplays the movies trailer. From there, the user can play the video in fullscreen, add it to their My List, or click for more information, which opens a larger modal that includes the film's title and description.

<img width="1029" alt="Screen Shot 2021-12-02 at 10 43 18 PM" src="https://media.giphy.com/media/qkXaZmZnPeqHNwAl3d/giphy.gif">

<img width="1029" alt="Screen Shot 2021-12-02 at 10 43 18 PM" src="https://media.giphy.com/media/eRviZ93O5urjjIgJby/giphy.gif">


### Code
```javascript
if (!this.state.showModal && !this.state.hovered){
            return(
                <div onClick={this.showModal}
                     className="square"
                     onMouseEnter={this.handleHover}
                     onMouseLeave={this.handleHoverExit}>
                    {/* <div className="cover"></div> */}
                    <img onClick={this.handlePlay} className="cover" src={img}  />
                    <div className="text">
                        <button>P</button>
                        <button>+</button>

                        <div>
                            <button>-</button>
                        </div>
                    </div>
                    
                </div>
            )
        } else if (this.state.showModal && this.state.hovered && !this.state.playVideo){
            return (
                < MovieShowPageContainer video={this.props.video} hoveredExit={this.handleHoverExit} hovered={this.handleHover} showModal={this.showModal} />
            )
        } else if (!this.state.showModal && this.state.hovered){
            return(
            <div 
                className="square"
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHoverExit}>
                <video className="cover" autoPlay={true}
                        muted={true} src={this.props.video.videoURL} alt="https://endflix-seeds.s3.amazonaws.com/MugenTrain.mp4"></video>
                <div className="text">
                    <div className="movie-title">
                        <span>{this.props.video.title}</span>
                    </div>
                    <div className="movie-card-buttons">
                        <div className="right-btns">
                                <button onClick={this.handlePlay} className="play-card-btn">
                                    < PlayArrowIcon style={{ fontSize: '20px' }}/>
                                </button>
                                <button onClick={this.handleAddToList} className="movie-show-page-btn">{text}</button>
                        </div>
                        <div>
                                <button onClick={this.showModal} className="add-to-list-btn">
                                    < KeyboardArrowDownIcon style={{ fontSize: '22px' }}/>
                                </button>
                        </div>
                    </div>
                    <div className="movie-card-genre-list">
                        <ul className="genre-movie-card-list"> 
                            <li key={this.props.video.id}>
                                    {this.props.video.genre}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            )
        } 
```
In order to render different forms of the movie card, the above code renders different html depending on the state.   

## My List

Each profile has a their own My List which the user  can keep track of movies added to the list. They can add or delete a given movie from the main browse page or a separate My List page. Users are given the ability to scroll through their my list on the main browse page.

<img width="1029" alt="Screen Shot 2021-12-02 at 10 43 18 PM" src="https://media.giphy.com/media/qkXaZmZnPeqHNwAl3d/giphy.gif">

### Code
```javascript
handleArrow(arrow) {
        return (e) => {
            const myListContainer = document.getElementsByClassName("sliderArrow")[0].parentElement
            const currentPosition = myListContainer.getBoundingClientRect().x - 59.5
            if (((window.innerWidth - myListContainer.lastChild.getBoundingClientRect().x) >= 100) && arrow === 'right') {
                return false
            }
            if (arrow === 'right') {
                const leftArrow = document.getElementsByClassName("sliderArrow")[0]
                if (leftArrow.disabled !== false) {
                    leftArrow.disabled = false
                    this.setState({ itemCount: this.state.itemCount + 1 })
                    const myListContainer = document.getElementById('myList')
                    myListContainer.style.transform = `translateX(${-260 + currentPosition}px)`
                    setTimeout(() => {
                        leftArrow.disabled = true
                    }, 1000);
                }
            }
            else if (arrow === 'left' && this.state.itemCount !== 0) {
                const rightArrow = document.getElementsByClassName("sliderArrow-right")[0]
                if (rightArrow.disabled !== false) {
                    rightArrow.disabled = false
                    this.setState({ itemCount: this.state.itemCount - 1 })
                    this.setState({ moveItem: this.state.moveItem += -260 + currentPosition })
                    myListContainer.style.transform = `translateX(${260 + currentPosition}px)`
                    rightArrow.disabled = false
                    setTimeout(() => {
                        rightArrow.disabled = true
                    }, 1000);
                }
            }
        }

    }
```
With the above code, users are able to scroll through their my List. The handle arrow function checks which arrow is clicked and then it gets the current position of the container and then translates it by a set pixel + the current position of the my-list container.

## Search 
A search feature within the navigation bar allows a user to find movies by title or keywords. The search is responsive, with results changing as the user input.

<img width="1029" alt="Screen Shot 2021-12-02 at 10 43 18 PM" src="https://media.giphy.com/media/EYaehEXuGpfwhulRoY/giphy.gif">


## Bonus Feature
In the future I would like to implement a most popular and the ability to like a video features. 


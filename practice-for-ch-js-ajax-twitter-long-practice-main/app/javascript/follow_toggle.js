import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton
    this.toggleButton.addEventListener("click", this.handleClick.bind(this))
  }

  async handleClick(event) {
    event.preventDefault()
    console.log(this.followState)
    // if (this.toggleButton.dataset.followState === "unfollow"){
    //   this.toggleButton.follow()
    // }
    // else{
    //   this.toggleButton.unfollow()
    // }

  }

  async follow() {
    // Your code here
    const userId = this.toggleButton.dataset.userId
    API.followUser(userId)
  }

  async unfollow() {
    // Your code here
   const userId = this.toggleButton.dataset.userId
   API.unfollowUser(userId)
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}
# Office Management - JavaScript
## Setup

1. Clone the repo (`git clone git@github.com:lewiscj97/office-management-js.git`)
2. run `open index.html` within the project directory

## Usage

- Three rooms (Room 1, Room 2 and Room 3) are added by default to the office
- New rooms can be added by clicking `Add New Room`, filling out the room name and clicking `Submit`
- Room bookings are made by clicking `Book a Room`, selecting which room to be booked, and entering the team and meeting names
  - **Note: at this stage, there is nothing to stop these fields from being left blank - this should be implemented at a later date**
- The booking form will only let the user book rooms that are currently available, and if there are no available rooms the form will not be shown
- Rooms must be exited by clicking the `Exit` button within the room section in order to make them available again

## Improvement Points

- Make all text fields required
- Add backend API for saving state of the office
- Add users: office manager for adding rooms, employee for booking rooms

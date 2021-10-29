document.addEventListener('DOMContentLoaded', () => {
  const hideNewRoomContainer = () => {
    const container = document.querySelector('#new-room-container')
    if (container.style.display === "none") {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  }

  const toggleBookRoomContainer = () => {
    const container = document.querySelector('#book-room-container')
    if (container.style.display === "none") {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  }

  // Display rooms
  const displayRooms = () => {
    const container = document.querySelector('#rooms-container');
    const bookingForm = document.querySelector('#booking-room');
    bookingForm.innerHTML = '';
    container.innerHTML = '';
    const rooms = office.allMeetingRooms();
    rooms.forEach((room, index) => {
      // Create div element
      const div = document.createElement('div');
      div.setAttribute('id', index)
      div.className = 'room';

      // Room name
      const roomName = document.createElement('p');
      roomName.innerText += room.name;
      roomName.className = 'room-name';
      div.appendChild(roomName);

      // availability
      const availability = document.createElement('p');
      availability.innerText += room.available ? 'Available' : 'Unavailable';
      availability.className = 'room-availability';
      div.appendChild(availability);

      // show meeting details if occupied
      if (room.currentMeeting != null) {
        const meetingDetails = document.createElement('div');
        meetingDetails.className = 'meeting-details';
        // team name
        const teamName = document.createElement('p');
        teamName.innerText += `Team name: ${room.currentMeeting.teamName}`;
        meetingDetails.appendChild(teamName);
        // meeting name
        const meetingName = document.createElement('p');
        meetingName.innerText += `Meeting name: ${room.currentMeeting.meetingName}`;
        meetingDetails.appendChild(meetingName);
        // button to exit
        const button = document.createElement('button');
        button.setAttribute('id', 'exit-room');
        button.className = 'exit-button'
        button.innerText += 'Exit';
        button.addEventListener('click', () => {
          office.exit(room.name);
          displayRooms();
        });
        meetingDetails.appendChild(button);
        // add all elements
        div.appendChild(meetingDetails);
      } else {
        // add room name to the booking form if no current meeting
        const roomForBooking = document.createElement('option');
        roomForBooking.innerHTML = room.name;
        bookingForm.appendChild(roomForBooking);
      }
      // add div to container
      container.appendChild(div);
    });
  }

  // Populate office with some default rooms
  const office = new Office();
  office.addMeetingRoom('Room One');
  office.addMeetingRoom('Room Two');
  office.addMeetingRoom('Room Three');
  displayRooms();

  // Show form for adding new room on click
  document.querySelector('#add-new-room').addEventListener('click', () => {
    hideNewRoomContainer();
  });

  // Toggle room booking form
  document.querySelector('#booking-toggle').addEventListener('click', () => {
    toggleBookRoomContainer();
  });

  // Add new room to the office
  document.querySelector('#new-room-submit').addEventListener('click', () => {
    const roomName = document.querySelector('#room-name');

    office.addMeetingRoom(roomName.value);
    console.log(`${roomName.value} added`);
    roomName.value = '';
    hideNewRoomContainer();
    displayRooms();
  });

  // Book a room
  document.querySelector('#submit-booking').addEventListener('click', () => {
    const teamName = document.querySelector('#team-name');
    const meetingName = document.querySelector('#meeting-name');
    const roomNameField = document.querySelector('#booking-room');
    const roomName = roomNameField.options[roomNameField.selectedIndex];

    office.enter(roomName.value, teamName.value, meetingName.value);

    // reload
    teamName.value = '';
    meetingName.value = '';
    toggleBookRoomContainer();
    displayRooms();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const hideNewRoomContainer = () => {
    const container = document.querySelector('#new-room-container')
    if (container.style.display === "none") {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  }

  // Display rooms
  const displayRooms = () => {
    const container = document.querySelector('#rooms-container');
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

      // booking
      const bookingButton = document.createElement('button');
      bookingButton.className = 'booking-button';
      bookingButton.innerText += room.available ? 'Enter' : 'Exit';
      div.appendChild(bookingButton);

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
  
  // Add new room to the office
  document.querySelector('#new-room-submit').addEventListener('click', () => {
    const roomName = document.querySelector('#room-name');
    
    office.addMeetingRoom(roomName.value);
    console.log(`${roomName.value} added`);
    roomName.value = '';
    hideNewRoomContainer();
    displayRooms();
  });

  // Enter or exit room
  document.querySelectorAll('.booking-button').forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentNode;
      const roomName = parent.querySelector('.room-name').innerText;
      const roomAvailability = parent.querySelector('.room-availability').innerText === 'Available';

      if (roomAvailability == true) {
        office.enter(roomName);
      } else {
        office.exit(roomName);
      }
      displayRooms();
    });
  });
});

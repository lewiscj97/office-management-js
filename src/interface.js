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
      const booking = document.createElement('button');
      booking.setAttribute('id', '#room-booking');
      div.appendChild(booking);

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
});

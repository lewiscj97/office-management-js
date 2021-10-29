document.addEventListener('DOMContentLoaded', () => {
  const office = new Office();

  const hideNewRoomContainer = () => {
    const container = document.querySelector('#new-room-container')
    if (container.style.display === "none") {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  };

  // Show form for adding new room on click
  document.querySelector('#add-new-room').addEventListener('click', () => {
    hideNewRoomContainer();
  });
  
  // Add new room to the office
  document.querySelector('#new-room-submit').addEventListener('click', () => {
    const roomName = document.querySelector('#room-name');
    
    office.addMeetingRoom(roomName.value);
    console.log(`${roomName.value} added`)
    roomName.value = '';
    hideNewRoomContainer();
  });
});

class Room {
  constructor(name) {
    this.name = name;
    this.available = true;
  }
}

class Office {
  constructor() {
    this.rooms = [];
  }

  addMeetingRoom(roomName) {
    this.rooms.push(new Room(roomName));
  }
}

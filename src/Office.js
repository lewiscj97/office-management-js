class Room {
  constructor(name) {
    this.name = name;
    this.available = true;
  }

  enter() {
    this.available = false;
  }

  exit() {
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

  allMeetingRooms() {
    return this.rooms;
  }

  isAvailable(roomName) {
    const room = this._findRoom(roomName);
    return room.available;
  }

  enter(roomName) {
    const room = this._findRoom(roomName);
    room.enter();
  }

  exit(roomName) {
    const room = this._findRoom(roomName);
    room.exit();
  }

  availableRooms() {
    const availableRooms = this.rooms.filter((room) => {
      return room.available === true;
    });
    return availableRooms;
  }
  
  _findRoom(roomName) {
    const room = this.rooms.find((value) => {
      return value.name === roomName;
    });
    return room;
  }
}

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

  allMeetingRooms() {
    return this.rooms;
  }

  isAvailable(roomName) {
    const room = this._findRoom(roomName);
    return room.available;
  }
  
  _findRoom(roomName) {
    const room = this.rooms.find((value) => {
      return value.name === roomName;
    });
    return room;
  }
}

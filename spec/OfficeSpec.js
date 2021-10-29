describe('Room', () => {
  describe('Create a new room', () => {
    beforeEach(() => {
      room = new Room('Room One');
    });

    it('Is created with a name', () => {
      expect(room.name).toEqual('Room One');
    });

    it('Is available by default', () => {
      expect(room.available).toBe(true);
    });
  });

  describe('Enter room', () => {
    it('Sets room to unavailable', () => {
      room.enter();
      expect(room.available).toBe(false);
    });
  });

  describe('Exit room', () => {
    it('Sets room to available', () => {
      room.exit();
      expect(room.available).toBe(true);
    });
  });
});

describe('Office', () => {
  beforeEach(() => {
    room = new Room('Room One');
    office = new Office();
  });

  describe('Adding meeting rooms', () => {
    it('Has no meeting rooms initially', () => {
      expect(office.rooms).toEqual([]);
    });

    it('Can add a new room', () => {
      office.addMeetingRoom('Room One');
      expect(office.rooms[0]).toEqual(room);
    });
  });

  describe('Viewing meeting rooms', () => {
    it('Returns an empty array initially', () => {
      expect(office.allMeetingRooms()).toEqual([]);
    });

    it('Returns an array containing a room when rooms have been added', () => {
      office.addMeetingRoom('Room One');
      expect(office.allMeetingRooms()[0]).toEqual(room);
    });
  });

  describe('Check availability of room', () => {
    it('Returns true if the meeting room is available', () => {
      office.addMeetingRoom('Room One');
      expect(office.isAvailable('Room One')).toBe(true);
    });

    it('Returns false if the meeting room is unavailable', () => {
      office.addMeetingRoom('Room One');
      office.rooms[0].available = false;
      expect(office.isAvailable('Room One')).toBe(false);
    });
  });

  describe('Entering and exiting rooms', () => {
    beforeEach(() => {
      office = new Office();
      office.addMeetingRoom('Room One');
    });

    it('Lets the user enter a room and sets room to unavaiable', () => {
      office.enter('Room One');
      expect(office.allMeetingRooms()[0].available).toBe(false);
    });

    it('Lets the user exit an occupied room and sets the room to available', () => {
      office.enter('Room One');
      expect(office.allMeetingRooms()[0].available).toBe(false);
      
      office.exit('Room One');
      expect(office.allMeetingRooms()[0].available).toBe(true);
    });
  });

  describe('List of available rooms', () => {
    beforeEach(() => {
      office = new Office();
      office.addMeetingRoom('Room One');
      office.addMeetingRoom('Room Two');
      office.addMeetingRoom('Room Three');
    });

    it('Returns a list of all rooms when they are all available', () => {
      let rooms = office.availableRooms();

      expect(rooms.length).toEqual(3);
      expect(rooms[0].name).toEqual('Room One');
      expect(rooms[0].available).toBe(true);
      expect(rooms[1].name).toEqual('Room Two');
      expect(rooms[1].available).toBe(true);
      expect(rooms[2].name).toEqual('Room Three');
      expect(rooms[2].available).toBe(true);
    });

    it('Returns list of available rooms when some rooms unavaiable', () => {
      office.enter('Room One');
      let rooms = office.availableRooms();
      expect(rooms.length).toEqual(2);
      expect(rooms[0].name).toEqual('Room Two');
      expect(rooms[0].available).toBe(true);
      expect(rooms[1].name).toEqual('Room Three');
      expect(rooms[1].available).toBe(true);
    });
  });

  describe('Meetings', () => {
    it('Has a team name and a meeting name', () => {
      let meeting = new Meeting(teamName ='Orange', meetingName = 'Retro');
      
      expect(meeting.teamName).toEqual('Orange');
      expect(meeting.meetingName).toEqual('Retro');
    });
  });
});

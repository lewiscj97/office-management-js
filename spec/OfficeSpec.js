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
  });
});

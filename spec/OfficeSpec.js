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
  describe('Adding meeting rooms', () => {
    beforeEach(() => {
      room = new Room('Room One');
      office = new Office();
    });

    it('Has no meeting rooms initially', () => {
      expect(office.rooms).toEqual([]);
    });

    it('Can add a new room', () => {
      office.addMeetingRoom('Room One');
      expect(office.rooms[0]).toEqual(room);
    });
  });
});

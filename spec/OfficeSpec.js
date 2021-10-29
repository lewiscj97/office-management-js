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
  describe('Add meeting room', () => {
    beforeEach(() => {
      room = new Room('Room One');
    });

    it('Office has no meeting rooms initially', () => {
      office = new Office();
      expect(office.rooms).toEqual([]);
    });
  });
});

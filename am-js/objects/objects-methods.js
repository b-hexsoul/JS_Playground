let restaurant = {
  name: "ASB",
  guestCapacity: 75,
  guestCount: 0,

  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },

  seatParty: function (partySize) {
    this.guestCapacity -= partySize;
    this.guestCount += partySize;
  },

  removeParty: function (partySize) {
    this.guestCapacity += partySize;
    this.guestCount -= partySize;
  },
};

import Immutable from 'seamless-immutable';

export const fetchSpots = (room, year) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Immutable({
        '1.13': {status: 'open', count: 10, price: 49.95},
        '1.14': {status: 'open', count: 10, price: 49.95},
        '1.15': {status: 'open', count: 10, price: 49.95},
        '1.16': {status: 'open', count: 10, price: 49.95},
        '2.4': {status: 'close', count: 5, price: 29.95},
        '2.5': {status: 'close', count: 5, price: 29.95},
        '2.6': {status: 'close', count: 5, price: 29.95},
        '2.7': {status: 'close', count: 5, price: 29.95},
        '2.8': {status: 'close', count: 5, price: 29.95},
      }));
    }, 1000);
  });
};

export const fetchRooms = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Immutable([
        {id: 123123, name: 'Room Type #1'},
        {id: 123124, name: 'Room Type #2'},
        {id: 123125, name: 'Budget Room'},
        {id: 123126, name: 'Luxury Room'},
      ]));
    }, 1000);
  });
};

export const submitSpots = spots => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

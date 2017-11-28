import _ from 'lodash';
import Immutable from 'seamless-immutable';

export function nullSpot() {
  return Immutable({status: '', count: null, price: null});
}

export function compareSpots(s1, s2) {
  return s1.status === s2.status && s1.count === s2.count && s1.price === s2.price;
}

export function calcCommonSpot(days, spots) {
  let res = null;
  _.forEach(days, ([month, day]) => {
    const key = `${month}.${day}`;
    const spot = key in spots ? spots[key] : nullSpot();

    if (res === null) {
      res = _.clone(spot);
    }

    if (!compareSpots(res, spot)) {
      res = nullSpot();
      return false;
    }
  });
  return Immutable(res ? res : nullSpot());
}

import React from 'react';

export function renderErrorText(errorText, state) {
  let result = null;
  if (!errorText) {
    return result;
  }
  if (Array.isArray(errorText)) {
    result = [];
    _.forEach(errorText, (v, k) => {
      result.push(<p key={k} className={state === null ? 'help' : 'help is-' + state}>{v}</p>);
    });
  } else {
    result = <p className={state === null ? 'help' : 'help is-' + state}>{errorText}</p>;
  }
  return result;
}

export function fetchToServer (endpoint, input, cb) {
  const fetchPromise = fetch("http://35.226.157.89/" + endpoint, {
    method: 'POST',
    body: JSON.stringify(input),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  fetchPromise.then(response => {
    response.json().then(cb);
  });
}
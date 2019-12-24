export function fetchMessages(channel) {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
  .then(response => response.json());

  return {
  type: 'FETCHED_MESSAGES',
  payload: promise
  };
}

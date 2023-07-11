const { auth } = require("../functions/firebase");

function useUser() {
  function getUserName() {
    return auth?.currentUser?.displayName ?? "Guest";
  }

  return {
    getUserName,
  };
}

export default useUser;

// file path: src/profile/gateway.js

export default async function fetchUser(userId) {
    try {
      const response = await fetch(`https://api.github.com/users/${userId}`);
      return await response.json();
    } catch (error) {
      throw new Error('Failed to get user data');
    }
  }
  
// file path: /profile/gateway.js

// экспортируйте fetchUser как export по умолчанию

export default async function fetchUser(userId) {
    console.log('implementation for fetchUser');
  
    try {
      const response = await fetch(`https://api.github.com/users/${userId}`);
      return await response.json();
    } catch (error) {
      throw new Error('Failed to get user data');
    }
  }
  
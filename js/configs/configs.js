export const BASE_URL = `https://sem-project-strapi-nathalie.herokuapp.com`;

export const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  };
  
import { faker } from '@faker-js/faker';

export const generateMockData = (count: number) => {
  return Array.from({ length: count }).map((_, id) => ({
    id,
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    website: faker.internet.url(),
    views: faker.number.int({ min: 1000, max: 150000 }),
  }));
};

export const fetchMockData = (page: number, pageSize: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateMockData(pageSize));
    }, 500);
  });
};

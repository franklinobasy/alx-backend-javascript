import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    return Promise.all([uploadPhoto(), createUser()])
      .then((resps) => ({
        photo: resps[0],
        user: resps[1],
      }));
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

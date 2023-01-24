import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  try {
    const resps = await Promise.all([signUp, upload]);
    return resps;
  } catch (error) {
    return error;
  }
}

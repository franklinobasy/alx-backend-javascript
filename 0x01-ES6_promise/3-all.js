import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((res1) => {
      createUser()
        .then((res2) => {
          console.log(
            `${res1.body} ${res2.firstName} ${res2.lastName}`,
          );
        })
        .catch(() => console.log('Signup system offline'));
    }).catch(() => console.log('Signup system offline'));
}

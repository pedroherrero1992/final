import { getData, postData, putData, deleteData } from '../services/services';

async function fetchData() {
  try {
    const data = await getData('/users');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function createData() {
  try {
    const newUser = await postData('/users', { name: 'Juan', age: 25 });
    console.log(newUser);
  } catch (error) {
    console.error(error);
  }
}

async function updateData() {
  try {
    const updatedUser = await putData('/users/1', { name: 'Juan Updated', age: 26 });
    console.log(updatedUser);
  } catch (error) {
    console.error(error);
  }
}

async function removeData() {
  try {
    await deleteData('/users/1');
    console.log('Usuario eliminado');
  } catch (error) {
    console.error(error);
  }
}

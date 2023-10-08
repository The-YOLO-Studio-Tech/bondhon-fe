import axios from 'axios';

type LoginType = {
  username: string;
  password: string;
};

// api call
const authCredentialsLogin = async (data: LoginType) => {
  try {
    const res = await axios.post(`${process.env.API_URL}/auth/login/`, data);

    return res.data;
  } catch (error) {
    // console.log(222, error);
    return false;
  }
};

export default authCredentialsLogin;

import { REACT_NATIVE_API } from 'react-native-dotenv';

import axios from 'axios';

export default axios.create({
  baseURL: REACT_NATIVE_API,
});

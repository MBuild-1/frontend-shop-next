import { CryptoJSAesDecrypt } from '@/lib/cryptoJS';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/v1/web/category');

      const decryptData = CryptoJSAesDecrypt(await res.data.data);

      return decryptData;
    } catch (error) {
      if (error instanceof AxiosError) {
        const json = error.response?.data;

        return rejectWithValue(json);
      }
    }
  },
);

const categoryEntity = createEntityAdapter({
  selectId: category => category.id,
});

const categorySlice = createSlice({
  name: 'category',
  initialState: categoryEntity.getInitialState(),
  reducers: {
    getCategories: (state, action) => {
      categoryEntity.setAll(state, action.payload);
    },
  },
});

export const categorySelectors = categoryEntity.getSelectors(
  state => state.category,
);

export default categorySlice.reducer;

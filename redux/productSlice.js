import { CryptoJSAesDecrypt } from '@/lib/cryptoJS';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/v1/web/product');

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

const productEntity = createEntityAdapter({
  selectId: product => product.id,
});

const productSlice = createSlice({
  name: 'product',
  initialState: productEntity.getInitialState(),
  reducers: {
    getProducts: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
  },
});

export const productSelectors = productEntity.getSelectors(
  state => state.product,
);

export default productSlice.reducer;

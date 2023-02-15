import { CryptoJSAesDecrypt } from '@/lib/cryptoJS';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

export const getBanners = createAsyncThunk(
  'banners/getBanners',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/v1/web/banner');

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

const bannerEntity = createEntityAdapter({
  selectId: banner => banner.id,
});

const bannerSlice = createSlice({
  name: 'banner',
  initialState: bannerEntity.getInitialState(),
  reducers: {
    getBanners: (state, action) => {
      bannerEntity.setAll(state, action.payload);
    },
  },
});

export const bannerSelectors = bannerEntity.getSelectors(state => state.banner);

export default bannerSlice.reducer;

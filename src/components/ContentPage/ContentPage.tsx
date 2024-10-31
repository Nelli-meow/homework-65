import * as React from 'react';
import axiosAPI from '../../axiosAPI.ts';
import { useEffect, useState } from 'react';
import Loader from '../UI/Loader.tsx';
import { IPageApi } from '../../types';

const ContentPage = () => {
  const [pages, setPages] = useState();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try  {
      const response = await axiosAPI<IPageApi>.get('pages.json');

      if (response.data) {
        setPages(response.data);
        console.log(response.data);
      }
    } catch(e) {
      console.error(e);
    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    void fetchData();
  },[])


  return (
    loading ? (<Loader/>) :
        (
          <div className="container">
            <h2>sss</h2>
            <p>sss</p>
          </div>
        )
  );
};

export default ContentPage;
import * as React from 'react';
import axiosAPI from '../../axiosAPI.ts';
import { useEffect, useState } from 'react';
import Loader from '../UI/Loader.tsx';
import { IPageApi } from '../../types';
import { useParams } from 'react-router-dom';

const ContentPage = () => {
  const [page, setPage] = useState<IPageApi>({});
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  const fetchData = async () => {
    if (!id) return;
    setLoading(true);
    try  {
      const response = await axiosAPI.get<IPageApi>(`pages/${id}.json`);

      if (response.data) {
        setPage(response.data);
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
  },[id])

  return (
    loading ? (<Loader/>) :
        (
          <div className="container">
            {page ? (
              <div className="container mt-5 text-center">
                <h2>{page.title}</h2>
                <p>{page.content}</p>
              </div>
            ) : (
              <p>Page is not found :(</p>
            )}
          </div>
        )
  );
};

export default ContentPage;
import * as React from 'react';
import { useState } from 'react';
import Loader from '../../components/UI/Loader.tsx';
import AdminForm from '../../components/AdminForm/AdminForm.tsx';
import { IPages } from '../../types';
import axiosAPI from '../../axiosAPI.ts';

const NewPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const submitForm = async (page: IPages) => {
    setLoading(true);
    try {
      await axiosAPI.post('pages.json', {...page});
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {loading ? <Loader/> : <AdminForm submitForm={submitForm}/>}
    </div>
  );
};

export default NewPage;